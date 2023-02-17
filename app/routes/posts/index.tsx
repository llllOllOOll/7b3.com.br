import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import Card from "~/components/card/card-post";
import Footer from "~/components/footer/footer";
import Navigator from "~/components/navigator/navigator";
import { getPostsReverse } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPostsReverse() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <header>
        <Navigator />
      </header>
      <main className="bg-white">
        <section className="mx-auto max-w-6xl py-10">
          <ul className="space-y-10">
            {posts.map((post) => (
              <li key={post.slug}>
                <div>
                  <Card
                    title={post.title}
                    author={post.author}
                    date={"March, 14"}
                    slug={post.slug}
                    source={post.source}
                    imagePost={post.imagePost}
                    avatar={post.avatar}
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}
