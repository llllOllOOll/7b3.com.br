export default function Navigator() {
  return (
    <header className="mt-4 mb-4">
      <nav className="mx-auto max-w-6xl sm:flex sm:items-center sm:justify-between">
        <div className="flex justify-between">
          <a href="/">
            <img
              alt="logo binary"
              className="h-5 sm:h-6  "
              src="/images/binary.svg"
            />
          </a>
          <img
            alt="menu"
            className="h-5 sm:hidden"
            src="/images/menu.png"
          />
        </div>
        <ul className="hidden text-white sm:flex sm:space-x-8 ">
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
      </nav>
    </header>
  );
}
