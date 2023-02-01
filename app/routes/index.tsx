import Navigator from "~/components/Navigator/navigator";

export default function Index() {
  return (
    <>
      <Navigator />
      <main>
        <section className="flex space-x-7">
          <div>
            <img src="images/seven-blog.svg" className="h-14" />
            <p>
              Lorem Ipsum is simply dummy text of the printing and <br />
              typesetting industry. Lorem Ipsum has been the industry <br />
              standard dummy text ever since the 1500s, when an un
            </p>
            <p>where you can also find me:</p>
            <div>
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
          <div>
            <div>
              <form>
                <input type="search" placeholder="search" />
              </form>
            </div>
            <div>
              <p>categories</p>
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
        </section>
        <section></section>
      </main>
    </>
  );
}
