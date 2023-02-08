import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import Card from "~/components/card/card-post";
import Navigator from "~/components/navigator/navigator";
import Video from "~/components/video/video";
import { getPosts } from "~/models/post.server";

export const loader = async () => {
  return json({ posts: await getPosts(true) });
};

export default function Index() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="w-full bg-gradient-to-r from-blog-primary to-blog-secondary">
          <Navigator />
          <section className="mt-52 flex items-center justify-center space-x-10">
            <div>
              <div>
                <img src="images/seven.svg" />
              </div>
              <div className="mt-40 mb-8">
                <ul className="flex items-center justify-center space-x-3 ">
                  <li>
                    <Link to="https://twitter.com/1111O11OO11">
                      <img src="images/twitter.png" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.instagram.com/1111O11OO11/">
                      <img src="images/instagram.png" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.youtube.com/@llllOllOOll">
                      <img src="images/youtube.png" />
                    </Link>
                  </li>
                  <li>
                    <Link to="https://www.linkedin.com/in/llllollooll">
                      <img src="images/linkedin.png" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
        <section className="w-full bg-slate-200 py-16">
          <h2 className="text-center font-Roboto text-3xl text-blog-primary">
            POSTS RECENTES
          </h2>
          <div className="mt-24  flex gap-8 px-96">
            <Card
              title={posts[0].title}
              author={posts[0].author}
              date={"March, 14"}
              slug={posts[0].slug}
              source={posts[0].source}
              imagePost={posts[0].imagePost}
              avatar={posts[0].avatar}
            />
            <Card
              title={posts[1].title}
              author={posts[1].author}
              slug={posts[1].slug}
              date={"March, 14"}
              source={posts[1].source}
              imagePost={posts[1].imagePost}
              avatar={posts[1].avatar}
            />
          </div>
        </section>
        <section className="mb-20  w-full  bg-white ">
          <h2 className=" mt-20 text-center font-Roboto text-3xl text-blog-primary">
            VIDEO RECENTE
          </h2>
          <div className="relative mx-auto  mt-16 max-w-7xl  px-16 ">
            <Video channelID={"UUZLKkUXgNv2RVCfJkazpM4A"} />
          </div>
        </section>
      </main>
      <footer className="">
        <div className="flex h-80 items-center justify-center bg-blog-black-700 text-center text-white">
          © IIIIOIIOOII | Seven, Júlia e Luna, 2023
        </div>
      </footer>
    </>
  );
}
