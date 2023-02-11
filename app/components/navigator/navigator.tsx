export default function Navigator() {
  return (
    <header className="mt-4">
      <nav className="">
        <div className="flex justify-between">
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
        <ul className="hidden">
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
