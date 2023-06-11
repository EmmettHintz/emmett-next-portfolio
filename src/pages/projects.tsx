import Link from "next/link";
import NavBar from "~/components/NavBar";

const projects = () => {
  return (
    <div className="h-screen w-full bg-gray-800 px-4 sm:px-20">
      <div>
        <NavBar />
      </div>

      <div>
        <h2 className="flex h-auto w-[100%] justify-center py-4 text-6xl font-bold text-white">
          Projects
        </h2>
      </div>

      <div className="flex h-[15%] w-[100%] justify-center py-8">
        <p className="text-center text-lg sm:text-2xl text-rose-400">
          This summer, I am working on a few areas that currently interest me
          and I will be posting updates here.
        </p>
      </div>

      <div className="grid h-auto grid-cols-1 md:grid-cols-2 py-8">
        <div className="h-auto w-[100%] flex-col justify-center space-y-4 text-center  text-white">
          <p className="text-2xl sm:text-4xl font-semibold text-rose-400">
            Full-Stack Development
          </p>

          <p className="text-lg sm:text-2xl">
            I am currently experienced with front-end development and I am
            presently teaching myself back-end skills with the goal of
            developing mid to large scale AI powered applications.
          </p>
        </div>

        <div className="flex-cols w-[100%] justify-center text-center ">
          <p className="py-4 text-2xl sm:text-4xl font-bold text-sky-400">
            Present project:
          </p>
          <a
            href="www.litlocator.com"
            className=" text-xl sm:text-3xl  font-semibold text-rose-400 transition-all duration-300 hover:text-rose-500 hover:underline"
          >
            litlocator
          </a>
        </div>
      </div>
    </div>
  );
};

export default projects;
