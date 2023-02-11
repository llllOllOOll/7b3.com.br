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
        <div className="">
          <Navigator />
          <section className="mt-24">
            <div>
              <img
                alt="seven logo"
                className="mx-auto h-24 "
                src="images/seven.svg"
              />
              <ul className="mb-24  mt-4 flex items-center justify-center space-x-8">
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
        <h2 className="hidden text-center font-Roboto text-3xl text-blog-primary">
          POSTS RECENTES
        </h2>
        <div className="space-y-8">
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
      <section className="bg-white px-6 py-8">
        <div className="hidden">VIDEO RECENTE</div>
        <div className="">
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
