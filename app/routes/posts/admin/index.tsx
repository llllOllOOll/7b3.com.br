import { Link } from "@remix-run/react";

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
