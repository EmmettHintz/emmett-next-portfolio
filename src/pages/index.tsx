import { type NextPage } from "next";
import Head from "next/head";
import NavBar from "~/components/NavBar";
import Image from "next/image";
import { useTheme } from 'next-themes'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Emmett Hintz Portfolio</title>
        <meta name="description" content="Emmett Hintz's Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-white px-4 dark:bg-slate-800 sm:px-20">
        <div className="">
          <NavBar />
        </div>

        <div className="grid h-auto grid-cols-1 gap-x-7 md:grid-cols-2">
          <div className="flex justify-center bg-cover py-4">
            <Image
              src="/Emmett.jpg"
              className="rounded-full object-cover shadow-xl transition-all duration-1000 hover:scale-105 hover:shadow-2xl sm:h-32 sm:w-32 md:h-48 md:w-48 lg:h-[40rem] lg:w-[40rem]"
              alt="Emmett Hintz"
              width={500}
              height={500}
            />
          </div>

          <div className="flex h-auto flex-col justify-between gap-y-4 text-center text-black dark:text-white">
            <div>
              <h2 className="hover text-4xl font-bold text-rose-400 transition-all duration-500 dark:text-rose-400 sm:text-6xl md:text-8xl">
                Emmett Hintz
              </h2>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-sky-400 dark:text-sky-500 sm:text-5xl">
                Full-Stack Developer
              </h2>
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
                works, so stay tuned!
              </p>
            </div>
            <div>
              <p className="text-lg sm:text-xl md:text-3xl">
                Currently, I am engaged in a small tech startup called Sloop
                Software. It is comprised of 11 other Colgate students and we
                are working to break into tech consulting, creating full-stack
                applications for clients. This fall I will be interning
                at Tewke as a junior software developer!
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
