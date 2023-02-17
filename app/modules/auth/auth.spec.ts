import { createCookieSessionStorage } from "@remix-run/node";
import { Request } from "@remix-run/node";

const request = new Request("http://localhost:3000");

const getUserSession = async (request: Request) => {
  const cookie = request.headers.get("Cookie");
  return sessionStorage.getSession(cookie);
};

describe("User auth processing", () => {
  it("Should be return an user session", async () => {
    const session = await getUserSession(request);

    // const userSession = await getUserSession(request:Resquest){
    // const cookie = request.headers.get('Cookie')
    // return sessionStorage.getSessiion(cookie)
    //  }
    expect(request).toBeInstanceOf(Request);
  });
});

const sessionStorage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: ["test"], //[process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});
