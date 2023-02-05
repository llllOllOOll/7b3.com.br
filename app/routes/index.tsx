import Card from "~/components/card/card-post";
import Navigator from "~/components/navigator/navigator";

export default function Index() {
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
                    <img src="images/twitter.png" />
                  </li>
                  <li>
                    <img src="images/instagram.png" />
                  </li>
                  <li>
                    <img src="images/youtube.png" />
                  </li>
                  <li>
                    <img src="images/linkedin.png" />
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
              title={"Pai e filha brigam por codigo"}
              author={"Luna Miranda"}
              date={"March, 14"}
            />
            <Card
              title={"Pai e filha brigam por codigo"}
              author={"Luna Miranda"}
              date={"March, 14"}
            />
          </div>
        </section>
        <section className="mb-20  w-full  bg-white ">
          <h2 className=" mt-20 text-center font-Roboto text-3xl text-blog-primary">
            VIDEO RECENTE
          </h2>
          <div className="relative mx-auto  mt-16 max-w-7xl  px-16 ">
            <div className="aspect-w-16 aspect-h-9 px-40">
              <iframe
                width="1904"
                height="810"
                src="https://www.youtube.com/embed/tbcveXCPqCA"
                title="Explorando o Remix e os Padrões da Web: Aprenda a Usar a Fetch API"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
          <div className="mt-8 text-center font-Roboto text-2xl text-slate-700 ">
            Explorando o Remix e os Padrões da Web: Aprenda a Usar a Fetch API
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
