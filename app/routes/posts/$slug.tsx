import { json, LoaderArgs } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
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
    <main className="flex min-h-screen flex-col items-center ">
      <div className="w-full bg-gradient-to-r from-blog-primary to-blog-secondary">
        <Navigator />
        <div className=" relative w-full bg-gray-200">
          <section className=" absolute inset-0 mx-auto mt-16 w-full max-w-7xl">
            <div>
              <h1 className="font-Roboto text-4xl">{post.title}</h1>
              <p className="mt-8 font-Roboto">{post.createdAt}</p>
              <div className="flex  justify-start">
                <div className="mt-8">
                  <img className="h-9 w-9 rounded-full" src={post.avatar} />
                </div>
                <div>
                  <div className="mt-4">{post.author}</div>
                  <div>
                    <Link
                      to={post.source}
                    >{`@${post.author.toLowerCase()}`}</Link>
                  </div>
                </div>
              </div>
              <img className="mt-8" src={post.imagePost} />
              <div className="p-8" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
