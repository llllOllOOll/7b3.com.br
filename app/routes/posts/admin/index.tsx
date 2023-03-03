import { json, LoaderArgs } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { authenticator } from "~/modules/auth/auth.server";

export default function AdminIndex() {
  return (
    <p>
      <Link
        to="new"
        className="rounded-md bg-sky-700 px-4 py-2 text-white hover:bg-sky-200"
      >
        Create a New Post
      </Link>
    </p>
  );
}

export async function loader({ request }: LoaderArgs) {
  await authenticator.isAuthenticated(request);
  return json({});
}
