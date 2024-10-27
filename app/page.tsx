export default function Home() {
  return (
    <main className="flex gap-2">
      <section className="w-full flex items-center justify-center sticky text-center h-24">
        <nav className="whitespace-nowrap block">
          <div className="m-0 p-0 border-0 align-baseline">
            <ul className="flex gap-6">
              <li className="flex relative items-center leading-4">
                <a className="link">About</a>
              </li>
              <li className="flex relative items-center leading-4">
                <a className="link">Experience</a>
              </li>
              <li className="flex relative items-center leading-4">
                <a className="link">Projects</a>
              </li>
              <li className="flex relative items-center leading-4">
                <a className="link">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </section>
    </main>
  );
}
