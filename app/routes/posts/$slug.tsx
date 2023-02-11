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
    <>
      <div className="px-6">
        <Navigator />
      </div>
      <main className="">
        <div className="">
          <section className="bg-white">
            <div className="">
              <div className="">
                <div className="px-6 py-4">
                  <h1 className="font-Roboto text-lg font-bold lg:mt-32 lg:text-center lg:text-4xl">
                    {post.title}
                  </h1>
                  <p className="mt-4 font-Roboto text-xs lg:hidden">
                    {post.createdAt}
                  </p>
                  <div className="">
                    <div className="mt-4 lg:hidden">
                      <img
                        className="h-10 w-10 rounded-md"
                        src={post.avatar}
                      />
                    </div>
                    <div className="mt-4">
                      <div className=" mt-4 text-lg font-bold lg:text-center ">
                        {post.author}
                      </div>
                      <div className="text-md lg:text-center">
                        <Link
                          to={post.source}
                        >{`@${post.author.toLowerCase()}`}</Link>
                      </div>
                    </div>
                  </div>
                  <img
                    className="my-4 mx-auto h-full w-full max-w-6xl rounded-lg object-fill"
                    src={post.imagePost}
                  />
                  <div
                    className="text-justify text-lg lg:mx-auto  lg:max-w-6xl lg:p-4"
                    dangerouslySetInnerHTML={{
                      __html: html,
                    }}
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <footer className="">
        <div className="flex h-48 items-center justify-center bg-blog-black-700 text-center text-white">
          © IIIIOIIOOII | Seven, Júlia e Luna, 2023
        </div>
      </footer>
    </>
  );
}
