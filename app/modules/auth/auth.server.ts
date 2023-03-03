import {
  createCookieSessionStorage,
  redirect,
} from "@remix-run/node";
import invariant from "tiny-invariant";
import { userLogin } from "./user.server";

invariant(
  process.env.SESSION_SECRET,
  "SESSION_SECRET must be set"
);

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

const USER_SESSION_KEY = "userID";
const EMAIL_SESSION_KEY = "userEmail";

type CreateSessionProps = {
  request: Request;
  userID: string;
  userEmail: string;
  remember: boolean;
  redirectTo: string;
};

export const authenticator = {
  getSession: async (request: Request) => {
    const session = await sessionStorage.getSession(
      request.headers.get("Cookie")
    );

    return session;
  },

  createUserSession: async ({
    request,
    userID,
    userEmail,
    remember,
    redirectTo,
  }: CreateSessionProps) => {
    const session = await authenticator.getSession(request);
    session.set(USER_SESSION_KEY, userID);
    session.set(EMAIL_SESSION_KEY, userEmail);

    return redirect(redirectTo, {
      headers: {
        "Set-Cookie": await sessionStorage.commitSession(
          session,
          {
            maxAge: remember ? 60 * 60 * 24 * 7 : undefined,
          }
        ),
      },
    });
  },

  isAuthenticated: async (
    request: Request,
    options?: { successRedirect: string }
  ) => {
    const session = await authenticator.getSession(request);
    const userID = session.get(USER_SESSION_KEY);
    console.log("userID:", userID);

    return userID;
  },

  login: async (email: string, password: string) => {
    const user = await userLogin(email, password);

    return user;
  },

  destroyUserSession: async (request: Request) => {
    const session = await authenticator.getSession(request);

    return redirect("/", {
      headers: {
        "Set-Cookie": await sessionStorage.destroySession(
          session
        ),
      },
    });
  },
};
