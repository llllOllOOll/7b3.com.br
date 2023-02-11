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
      <main className="px-6">
        <div>
          <Navigator />
          <section className="mt-24 lg:mt-48">
            <div>
              <img
                alt="seven logo"
                className="mx-auto h-24 sm:h-64 lg:h-96"
                src="images/seven.svg"
              />
              <ul className="mb-24 mt-4  flex items-center justify-center space-x-8 lg:mb-36">
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
        </div>
      </main>
      <section className="mt-8 bg-gray-200 px-6 py-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="hidden text-center font-Roboto text-3xl text-blog-primary lg:mt-10 lg:block">
            POSTS RECENTES
          </h2>
          <div className="space-y-8 lg:mt-24 lg:flex lg:gap-4 lg:space-y-0 ">
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
        </div>
      </section>
      <section className="bg-white px-6 py-8">
        <div className="hidden text-center font-Roboto  text-3xl text-blog-primary lg:block ">
          VIDEO RECENTE
        </div>
        <div className="mx-auto font-Roboto text-3xl  text-blog-primary lg:mt-16 lg:mb-16 lg:max-w-6xl">
          <Video channelID={"UUZLKkUXgNv2RVCfJkazpM4A"} />
        </div>
      </section>
      <footer className="">
        <div className="mx-auto bg-slate-800  py-8  text-center text-white">
          © IIIIOIIOOII | Seven, Júlia e Luna, 2023
        </div>
      </footer>
    </>
  );
}
