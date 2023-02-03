import Card from "~/components/card/card-post";
import Navigator from "~/components/navigator/navigator";

export default function Index() {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
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
          <h2 className=" text-center">POSTS RECENTES</h2>
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
        <section className="mb-20  w-full bg-white">
          <h2 className="mt-20 text-center">VIDEO RECENTE</h2>
          <div>
            <div>
<iframe width="1904" height="810" src="https://www.youtube.com/embed/tbcveXCPqCA" title="Explorando o Remix e os Padrões da Web: Aprenda a Usar a Fetch API" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
              <div>Exporando o Remix e os Padr
              es WEB
            </div>
          </div>
        </section>
      </main>
      <footer className="">
        <div className="h-80 bg-blog-black-700">Footer</div>
      </footer>
    </>
  );
}
