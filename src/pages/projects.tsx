import Link from "next/link";
import NavBar from "~/components/NavBar";
import { useTheme } from 'next-themes'

const Projects = () => {
  return (
    <main className="min-h-screen bg-white dark:bg-bg-dark px-4 sm:px-20">
      <div>
        <NavBar />
      </div>

      <div className="flex justify-center py-4">
        <h2 className="text-6xl font-bold text-primary-heading dark:text-primary-heading transition-all duration-500 sm:text-6xl md:text-8xl">
          Projects
        </h2>
      </div>

      <div className="flex justify-center py-8">
        <p className="text-lg text-text-light dark:text-text-dark text-center sm:text-xl md:text-3xl">
          This summer, I am working on a few areas that currently interest me
          and I will be posting updates here.
        </p>
      </div>

      <div className="grid h-auto grid-cols-1 gap-x-7 py-8 md:grid-cols-2">
        <div className="flex flex-col justify-center items-center gap-y-1 text-text-light dark:text-text-dark text-center">
          <p className="text-2xl font-semibold text-primary-heading dark:text-primary-heading sm:text-4xl md:text-6xl">
            Full-Stack Development
          </p>

          <p className="text-lg sm:text-xl md:text-3xl">
            I am currently experienced with front-end development and I am
            presently teaching myself back-end skills with the goal of
            developing mid to large scale AI powered applications.
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-y-1 text-text-light dark:text-text-dark text-center">
          <p className="py-4 text-2xl font-bold text-secondary-heading dark:text-secondary-heading sm:text-4xl md:text-6xl">
            Present project:
          </p>

          <Link
            href="https://litlocator.com/"
            className="text-primary-heading dark:text-primary-heading text-2xl hover:text-pink-500 hover:underline sm:text-4xl md:text-6xl transition-all duration-500"
          >
            LitLocator
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
