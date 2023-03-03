import { LoaderArgs, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Link,
  useLoaderData,
  Outlet,
  Form,
} from "@remix-run/react";
import Footer from "~/components/footer/footer";
import Navigator from "~/components/navigator/navigator";

import { getPosts } from "~/models/post.server";
import { authenticator } from "~/modules/auth/auth.server";
import { useUser } from "~/utils";

export async function loader({ request }: LoaderArgs) {
  const result = await authenticator.isAuthenticated(
    request
  );
  if (!result) return redirect("/login");
  return json({});
}

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  const user = "noat"; // useUser();
  return (
    <>
      <div>
        <div className="h-screen bg-white px-8">
          <main>
            <Outlet />
            <div className="mx-auto w-full max-w-6xl py-8"></div>
          </main>
          <Form
            className="hidden"
            action="/logout"
            method="post"
          >
            <button
              type="submit"
              className="mt-8 rounded bg-slate-600 py-2 px-4 text-blue-100 hover:bg-blue-500 active:bg-blue-600"
            >
              Logout
            </button>
          </Form>
        </div>
      </div>
      <header className="hidden">
        <p className="mt-4 px-8 font-semibold ">
          <Link to=".">{user.email}</Link>
        </p>
      </header>
      <Footer />
    </>
  );
}
