import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col gap-4">
      <section className="flex flex-col lg:flex-row min-h-screen bg-backgrounds-primary">
        <div className="w-full md:w-24  flex flex-col justify-center items-center py-4">
          <nav className=" -rotate-0 flex flex-col space-y-4 items-center justify-center md:-rotate-90">
            <ul className="flex flex-row items-center justify-center gap-4 text-center">
              <li>
                <a
                  href="#projects"
                  className="text-typography-primary hover:text-typography-secondary font-bold leading-7"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-typography-primary hover:text-typography-secondary font-bold leading-7"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-typography-primary hover:text-typography-secondary font-bold leading-7"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="w-full lg:w-4/5 lg:max-w-3xl h-[calc(100vh-10vh)] lg:h-screen bg-black flex justify-center items-center p-6 rounded-xl text-white">
          <div className="text-center">
            <h1 className="text-4xl font-bold">Main Content</h1>
            <p className="text-lg mt-4">content</p>
          </div>
        </div>
      </section>
    </main>
  );
}
/*
       <Image
            src="/images/bg.svg"
            alt="Company Logo"
            layout="intrinsic"
            width={600}
            height={600}
            priority
            className="rounded-full shadow-md w-full h-full"
          />
*/
