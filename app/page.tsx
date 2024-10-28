import Image from "next/image";

export default function Home() {
  return (
    <main className="flex gap-2 flex-col">
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
      <section className="relative w-full flex flex-col justify-center items-center bg-white select-none">
        <div className="flex items-center justify-center text-center">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black  relative font-pacifico mb-[-1rem]  lg:mb-[-1.5rem]">
            W
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black z-20 relative font-pacifico mb-[-1rem]  lg:mb-[-1.5rem]">
            e
          </h2>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black  relative font-pacifico mb-[-1rem]  lg:mb-[-1.5rem]">
            b
          </h2>
        </div>

        <div className="relative w-full max-w-xs md:max-w-md lg:max-w-lg h-auto flex justify-center items-center z-10">
          <Image
            src="/images/bg.svg"
            alt="Company Logo"
            layout="intrinsic"
            width={500}
            priority
            height={500}
            className="rounded-full shadow-md"
          />

          <h2 className="absolute bottom-0 -translate-y-1/2 text-4xl md:text-6xl  font-bold z-20 font-pacifico text-white">
            Developer
          </h2>
        </div>
      </section>
    </main>
  );
}
