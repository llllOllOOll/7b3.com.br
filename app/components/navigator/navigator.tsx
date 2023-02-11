export default function Navigator() {
  return (
    <header>
      <nav className="mx-auto mt-4 max-w-5xl items-center justify-between px-5 sm:flex sm:w-full">
        <div className="flex justify-between ">
          <img
            alt="logo binary"
            className="h-5 sm:h-6  "
            src="/images/binary.svg"
          />
          <img
            alt="menu"
            className="h-5 sm:hidden"
            src="/images/menu.png"
          />
        </div>
        <div className="hidden sm:block">
          <ul className="flex   space-x-16  text-white ">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/posts">Artigos</a>
            </li>
            <li>
              <a href="/">Login</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
