export default function Home() {
  return (
    <main className="flex gap-2">
      <div>
        <nav className="whitespace-nowrap block">
          <div className="m-0 p-0 border-0 align-baseline">
            <ul className="flex gap-2">
              <li className="flex relative items-center leading-4">
                <a className="text-base font-semibold leading-7">About</a>
              </li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Contact</li>
            </ul>
          </div>
        </nav>
      </div>
    </main>
  );
}
