import Link from "next/link";
import NavBar from "~/components/NavBar";

const Projects = () => {
  return (
    <main className="min-h-screen bg-white px-4 dark:bg-bg-dark sm:px-20">
      <div>
        <NavBar />
      </div>

      <div className="flex justify-center py-4">
        <h2 className="text-6xl font-bold text-primary-heading transition-all duration-500 dark:text-primary-heading sm:text-6xl md:text-8xl">
          Projects
        </h2>
      </div>

      <div className="flex justify-center py-4">
        <p className="text-center text-lg text-tertiary-heading sm:text-xl md:text-3xl">
          This summer, I am working on a few areas that currently interest me
          and I will be posting updates here.
        </p>
      </div>

      <div className="grid h-auto grid-cols-1 gap-x-7 py-8 md:grid-cols-2">
        <div className="flex flex-col items-center justify-center gap-y-1 text-center text-text-light dark:text-text-dark">
          <p className="pb-4 text-2xl font-semibold text-primary-heading dark:text-primary-heading sm:text-4xl md:text-6xl">
            Full-Stack Development
          </p>

          <p className="text-lg sm:text-xl md:text-3xl">
            I have solid experience in front-end development and I am currently
            in the process of expanding my skills into back-end development. My
            ultimate goal is to be able to build and deploy AI-powered
            applications.
          </p>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-1 text-center text-text-light dark:text-text-dark">
          <p className="py-4 text-2xl font-bold text-secondary-heading dark:text-secondary-heading sm:text-4xl md:text-6xl">
            Present Project:
          </p>

          <Link
            href="https://litlocator.com/"
            className="text-2xl text-primary-heading transition-all duration-500 hover:text-pink-500 hover:underline dark:text-primary-heading sm:text-4xl md:text-6xl"
          >
            LitLocator
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-y-1 py-8 pt-16 text-center text-text-light dark:text-text-dark">
          <p className="pb-4 text-2xl font-semibold text-primary-heading dark:text-primary-heading sm:text-4xl md:text-6xl">
            Machine Learning + Fast.AI
          </p>

          <p className="text-lg sm:text-xl md:text-3xl">
            I am currently engaging with the course &apos;Practical Deep Learning for
            Coders&apos; by fast.ai to gain a deeper understanding of neural networks
            and deep learning. My aim is to apply my web development
            skills towards improving human-computer interaction (HCI) and deploying apps using deep learning.
          </p>
        </div>

        <div className="py-4items-center flex flex-col justify-center gap-y-1 text-center text-text-light dark:text-text-dark">
          <p className="pb-4 text-2xl font-bold text-secondary-heading dark:text-secondary-heading sm:text-4xl md:text-6xl">
            Present Goal:
          </p>

          <Link
            href="https://course.fast.ai/"
            className="text-2xl text-primary-heading transition-all duration-500 hover:text-pink-500 hover:underline dark:text-primary-heading sm:text-4xl md:text-6xl"
          >
            fast.ai
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Projects;
