export default function Navigator() {
  return (
    <header className="flex items-center justify-center bg-blog-black-700">
      <nav className="flex w-full max-w-6xl items-center  justify-between py-4">
        <div>
          <img src="images/logo-menu.svg" />
        </div>

        <div>
          <ul className="flex space-x-16 text-blog-grey-200">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Artigos</a>
            </li>
            <li>
              <a href="#">Vídeos</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
          </ul>
        </div>

        <div>
          <img src="images/hamburguer-menu.svg" />
        </div>
      </nav>
    </header>
  );
}
