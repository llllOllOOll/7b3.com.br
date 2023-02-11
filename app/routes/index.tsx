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
      <main className="flex min-h-screen flex-col">
        <div className="min-h-screen w-full bg-gradient-to-r from-blog-primary to-blog-secondary">
          <Navigator />
          <section className="mt-16 flex items-center justify-center space-x-10">
            <div>
              <img
                alt="seven logo"
                className="h-24 "
                src="images/seven.svg"
              />
              <ul className="mt-8 flex  items-center justify-center space-x-6 ">
                <li>
                  <Link to="https://twitter.com/1111O11OO11">
                    <img
                      alt="twitter logo"
                      src="images/twitter16x16.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.instagram16x16.com/1111O11OO11/">
                    <img
                      alt="instagram logo"
                      src="images/instagram16x16.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.youtube.com/@llllOllOOll">
                    <img
                      alt="youtube logo"
                      src="images/youtube16x16.png"
                    />
                  </Link>
                </li>
                <li>
                  <Link to="https://www.linkedin.com/in/llllollooll">
                    <img
                      alt="linkedin logo"
                      src="images/linkedin16x16.png"
                    />
                  </Link>
                </li>
              </ul>
            </div>
          </section>
          <section className="mt-16 w-full bg-slate-200 ">
            <h2 className="hidden text-center font-Roboto text-3xl text-blog-primary">
              POSTS RECENTES
            </h2>
            <div className=" ">
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
          <section className=" w-full bg-white  py-4">
            <div className="text-center font-Roboto text-3xl text-blog-primary">
              VIDEO RECENTE
            </div>
            <div className="mx-auto  mt-16 max-w-7xl  px-16 ">
              <Video
                channelID={"UUZLKkUXgNv2RVCfJkazpM4A"}
              />
            </div>
          </section>
        </div>
      </main>
      <footer>
        <div className=" mt-16 flex h-48 items-center justify-center bg-blog-black-700 text-center text-white">
          © IIIIOIIOOII | Seven, Júlia e Luna, 2023
        </div>
      </footer>
    </>
  );
}
