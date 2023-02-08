export default function Navigator() {
  return (
    <header className="flex items-center justify-center">
      <nav className="flex w-full max-w-7xl items-center  justify-between py-4 px-40">
        <div>
          <img src="/images/binary.svg" />
        </div>
        <div>
          <ul className="flex space-x-16 text-white">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/posts">Artigos</a>
            </li>
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Sign Up</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
