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

        <section className="mt-20 mb-20">
          <h2>POSTS RECENTES</h2>
          <div>
            <div></div>
            <div></div>
          </div>
        </section>
      </main>
      <footer className="">
        <div className="h-80 bg-blog-black-700">Footer</div>
      </footer>
    </>
  );
}
