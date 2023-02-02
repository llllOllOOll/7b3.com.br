import Navigator from "~/components/Navigator/navigator";

export default function Index() {
  return (
    <>
      <Navigator />
      <main className="flex items-center justify-center">
        <div className="w-full max-w-7xl ">
          <section className="mt-20 flex space-x-10">
            <div className="w-full ">
              <img src="images/seven-blog.svg" className="mb-4 h-14" />
              <p>
                Lorem Ipsum is simply dummy text of the printing and <br />
                typesetting industry. Lorem Ipsum has been the industry <br />
                standard dummy text ever since the 1500s, when an un
              </p>
              <div className="mt-4">
                <div className=" flex items-center space-x-4">
                  <a href="#">
                    <img src="images/twitter.svg" />
                  </a>
                  <a href="#">
                    <img src="images/youtube.svg" />
                  </a>
                  <a href="#">
                    <img src="images/linkedin.svg" />
                  </a>
                  <a href="#">
                    <img src="images/instagram.svg" />
                  </a>
                </div>
              </div>
            </div>
            <div className="flex w-full">
              <div>
                <div>
                  <p>categorias</p>
                  <ul>
                    <li>
                      <a href="#">lorem</a>
                    </li>
                    <li>
                      <a href="#">turpis</a>
                    </li>
                  </ul>
                  <ul>
                    <li>
                      <a href="#">ipsum</a>
                    </li>
                    <li>
                      <a href="#">varius</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-20 mb-20">
            <div className="flex items-center  space-x-8">
              <div className="h-96 w-full  rounded-md bg-gray-200 p-6">
                <div className="mb-4">Last post</div>
                <div className="mb-4 text-2xl">
                  <h2>VSCode vs LunarVim. Which is better?</h2>
                </div>
                <div>
                  lkjfklajsdklf skfjlaskdjfklajsdf alksjdfljasdfkj
                  asdjfklasdklfja alskdjfl;asjdlfajsldfja;lsdjfa:e .
                  alsdfklajsldfja;j akjskldjf;asjd;fkaj;lsdjflasjdfkla
                  aksdjflkajsdklfja;l;kfja
                </div>
                <div>More</div>
              </div>
              <div className="h-96 w-full  rounded-md bg-gray-200 p-6">
                <div className="mb-4">Last post</div>
                <div className="mb-4 text-2xl">
                  <h2>VSCode vs LunarVim. Which is better?</h2>
                </div>
                <div>
                  lkjfklajsdklf skfjlaskdjfklajsdf alksjdfljasdfkj
                  asdjfklasdklfja alskdjfl;asjdlfajsldfja;lsdjfa
                  alsdfklajsldfja;j akjskldjf;asjd;fkaj;lsdjflasjdfkla
                  aksdjflkajsdklfja;l;kfja
                </div>
                <div>More</div>
              </div>
            </div>
          </section>
        </div>
      </main>
      <footer className="">
        <div className="h-80 bg-blog-black-700">Footer</div>
      </footer>
    </>
  );
}
