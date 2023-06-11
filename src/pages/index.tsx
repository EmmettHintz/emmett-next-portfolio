import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/NavBar";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emmett Hintz Portfolio</title>
        <meta name="description" content="Emmett Hintz's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-slate-800 px-4 sm:px-20">
        <div className="">
          <NavBar />
        </div>

        <div className="grid grid-cols-1 gap-x-7 h-auto md:grid-cols-2">
          <div className="flex justify-center py-4 bg-cover">
            <Image
              src="/Emmett.jpg"
              className="rounded-full shadow-xl transition-all duration-1000 hover:scale-105 hover:shadow-2xl sm:w-1/3 sm:h-auto md:w-3/4 md:h-auto lg:w-2/3 lg:h-auto"
              alt="Emmett Hintz"
              width={500}
              height={500}
            />
          </div>

          <div className="flex flex-col justify-between pb-1 h-auto text-center text-white">
            <div>
              <h2 className="hover text-4xl sm:text-6xl md:text-8xl text-rose-400 font-bold transition-all duration-500">
                Emmett Hintz
              </h2>
            </div>

            <div>
              <h2 className="text-5xl sm:text-5xl font-bold text-sky-400">Full-Stack Developer</h2>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-3xl">
                Hello! My name is Emmett and I am a rising junior at Colgate
                University and I am teaching myself full stack development.
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-3xl">
                This summer, I am focusing on building apps that interest me and
                will help me learn new skills. I have a few projects in the
                works, so stay tuned! This fall I will be interning at Tewke as
                a junior developer!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
