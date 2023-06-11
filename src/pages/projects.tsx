import Link from "next/link";
import NavBar from "~/components/NavBar";

const Projects = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-800 px-4 sm:px-20">
      <div>
        <NavBar />
      </div>

      <div className="flex justify-center py-4">
        <h2 className="text-6xl font-bold text-rose-400 dark:text-rose-400 transition-all duration-500 sm:text-6xl md:text-8xl">
          Projects
        </h2>
      </div>

      <div className="flex justify-center py-8">
        <p className="text-lg text-black dark:text-white text-center sm:text-xl md:text-3xl">
          This summer, I am working on a few areas that currently interest me
          and I will be posting updates here.
        </p>
      </div>

      <div className="grid h-auto grid-cols-1 gap-x-7 py-8 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-y-1 text-black dark:text-white text-center">
          <p className="text-2xl font-semibold text-rose-400 dark:text-rose-400 sm:text-4xl md:text-6xl">
            Full-Stack Development
          </p>

          <p className="text-lg sm:text-xl md:text-3xl">
            I am currently experienced with front-end development and I am
            presently teaching myself back-end skills with the goal of
            developing mid to large scale AI powered applications.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-1 text-black dark:text-white text-center">
          <p className="py-4 text-2xl font-bold text-sky-400 dark:text-sky-500 sm:text-4xl md:text-6xl">
            Present project:
          </p>

          <Link
            href="https://litlocator.com/"
            className="text-rose-400 dark:text-rose-400 text-2xl hover:text-pink-500 hover:underline sm:text-4xl md:text-6xl transition-all duration-500"
          >
            LitLocator
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
