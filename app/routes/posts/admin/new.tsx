import type { ActionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useTransition,
} from "@remix-run/react";

import { createPost } from "~/models/post.server";

export const action = async ({ request }: ActionArgs) => {
  await new Promise((res) => setTimeout(res, 1000));
  const formData = await request.formData();

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");
  const author = formData.get("author");
  const source = formData.get("source");
  const imagePost = formData.get("imagePost");
  const avatar = formData.get("avatar");

  const errors = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
    author: author ? null : "Author is required",
    source: source ? null : "Source is required",
    imagePost: imagePost ? null : "Image is required",
    avatar: avatar ? null : "Avatar is required",
  };
  const hasErrors = Object.values(errors).some(
    (errorMessage) => errorMessage
  );
  if (hasErrors) {
    return json(errors);
  }

  invariant(
    typeof title === "string",
    "title must be a string"
  );
  invariant(
    typeof slug === "string",
    "slug must be a string"
  );
  invariant(
    typeof markdown === "string",
    "markdown must be a string"
  );
  invariant(
    typeof author === "string",
    "author must be a string"
  );
  invariant(
    typeof source === "string",
    "source must be a string"
  );
  invariant(
    typeof imagePost === "string",
    "image must be a string"
  );
  invariant(
    typeof avatar === "string",
    "avatar must be a string"
  );

  await createPost({
    title,
    slug,
    markdown,
    author,
    source,
    imagePost,
    avatar,
  });

  return redirect("/posts/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewPost() {
  const errors = useActionData<typeof action>();

  const transition = useTransition();
  const isCreating = Boolean(transition.submission);

  return (
    <Form className="w-full max-w-7xl px-8" method="post">
      <p>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input
            type="text"
            name="title"
            className={inputClassName}
          />
        </label>
      </p>

      <p>
        <label>
          Post Author:{" "}
          {errors?.author ? (
            <em className="text-red-600">
              {errors.author}
            </em>
          ) : null}
          <input
            type="text"
            name="author"
            className={inputClassName}
          />
        </label>
      </p>

      <p>
        <label>
          Post Source:{" "}
          {errors?.source ? (
            <em className="text-red-600">
              {errors.source}
            </em>
          ) : null}
          <input
            type="url"
            name="source"
            className={inputClassName}
          />
        </label>
      </p>

      <p>
        <label>
          Post Image:{" "}
          {errors?.imagePost ? (
            <em className="text-red-600">
              {errors.imagePost}
            </em>
          ) : null}
          <input
            type="url"
            name="imagePost"
            className={inputClassName}
          />
        </label>
      </p>

      <p>
        <label>
          Post Avatar:{" "}
          {errors?.avatar ? (
            <em className="text-red-600">
              {errors.avatar}
            </em>
          ) : null}
          <input
            type="url"
            name="avatar"
            className={inputClassName}
          />
        </label>
      </p>
      <p>
        <label>
          Post Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input
            type="text"
            name="slug"
            className={inputClassName}
          />
        </label>
      </p>
      <p>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">
              {errors.markdown}
            </em>
          ) : null}
        </label>
        <br />
        <textarea
          id="markdown"
          rows={15}
          name="markdown"
          className={`${inputClassName} font-mono`}
        />
      </p>
      <p className="text-right">
        <button
          type="submit"
          className="rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isCreating}
        >
          {isCreating ? "Creating..." : "Create Post"}
        </button>
      </p>
    </Form>
  );
}
