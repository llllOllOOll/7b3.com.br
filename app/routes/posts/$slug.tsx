import { json, LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/post.server";
import invariant from "tiny-invariant";
import { marked } from "marked";
import Navigator from "~/components/navigator/navigator";

export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, `params.slug is required`);

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json({ post, html });
};

export default function PostSlug() {
  const { post, html } = useLoaderData<typeof loader>();
  return (
    <main>
      <Navigator />
      <section className="p-6 flex justify-center items-center">
        <div className="bg-neutral-200 w-full max-w-7xl">
      <h1 className="my-6 text-left font-semibold text-3xl">{post.title}</h1>
      <img className="w-28" src={post.imagePost} />
      <div className="float-right" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
      </section>
    </main>
  );
}
