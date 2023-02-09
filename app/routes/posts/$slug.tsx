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
  <main className="flex min-h-screen flex-col items-center ">
      <div className="w-full bg-gradient-to-r from-blog-primary to-blog-secondary">
        <Navigator />
        <section>
          <div className="w-full  bg-white">
             <div className="flex flex-col justify-center items-center">
              <div className="max-w-5xl px-9 pt-16">
                <h1 className="font-Roboto text-4xl font-bold">{post.title}</h1>
                <p className="mt-8 font-Roboto">{post.createdAt}</p>
                <div className="flex justify-start">
                  <div className="mt-8">
                    <img className="h-20 w-20 rounded-md" src={post.avatar} />
                    </div>
                  <div className="mt-8 mx-4">
                    <div className="mt-4 text-lg font-bold ">{post.author}</div>
                    <div className="text-md">
                      <Link
                      to={post.source}
                      >{`@${post.author.toLowerCase()}`}</Link>
                  </div>
                </div>
              </div>
              <img className="h-full w-full object-fill  rounded-lg my-20" src={post.imagePost} />
              <div className=" text-lg text-justify" dangerouslySetInnerHTML={{ __html: html }} />
            </div>
        </div>
        </div>
        </section>
      </div>
    </main>

      <footer className="mt-32">
        <div className="flex h-48 items-center justify-center bg-blog-black-700 text-center text-white">
          © IIIIOIIOOII | Seven, Júlia e Luna, 2023
        </div>
      </footer>
          </>
  );
}
