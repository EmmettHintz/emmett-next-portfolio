import NavBar from "~/components/NavBar";
import Image from "next/image";
import Link from "next/link";

const resume = () => {
  return (
    <>
      <main className="min-h-screen bg-white px-4 text-text-light dark:bg-bg-dark dark:text-text-dark sm:px-20">
        <div className="pb-4">
          <NavBar />
        </div>

        <div className="flex flex-col items-center justify-center py-4 text-center text-primary-heading dark:text-primary-heading">
          <div>
            <h2 className="pb-2 text-4xl font-bold sm:text-5xl md:text-6xl">
              Emmett Hintz
            </h2>
          </div>
          <div>
            <h3 className="sm:text-md pb-6 text-sm  text-secondary-heading  md:text-lg">
              eahintz@colgate.edu | 215-767-1602 |{" "}
              <Link href="http://www.linkedin.com/in/emmett-hintz/">
                LinkedIn.com/in/emmett-hintz/
              </Link>
            </h3>
          </div>
        </div>

        {/* left header */}
        <div className="grid grid-cols-1 gap-x-8 md:grid-cols-2 md:gap-x-36">
          <div className=" flex justify-between pb-2">
            <div>
              <p className="text-primary-heading underline underline-offset-4 shadow-xl">
                Colgate University
              </p>
            </div>
            <div>
              <p className="font-bold text-secondary-heading">Hamilton NY</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="text-primary-heading underline underline-offset-4 shadow-xl">
                CAMPUS INVOLVEMENT & LEADERSHIP
              </p>
            </div>
            <div>
              <p className="font-bold text-secondary-heading">2021-2023</p>
            </div>
          </div>

          {/* top left body */}
          <div className="pb-1">
            <div className="flex justify-between">
              <p className="font-medium text-tertiary-heading">
                Computer Science and Economics Double Major
              </p>
              <p>GPA: 3.79</p>
            </div>
            <p>Honors and Societies: </p>
            <p className="pb-1 indent-5">
              - Dean’s Award for Academic Excellence With Distinction (Spring
              2022 - 2023)
            </p>
            <p className="pb-1 indent-5">- Phi Eta Sigma Honors Society</p>
            <div>
              <p className="font-medium text-tertiary-heading">
                Colgate University Computer Science Department, Teaching
                Assistant
              </p>
              <p className="indent-5">
                - Assisted the professor in organizing the learning environment,
                preparing materials, and creating a lab plan
              </p>
              <p className="pb-8 indent-5">
                - Provided individual attention to students during group
                sessions to best help with learning
              </p>
            </div>
            <div className="pb-16space-y-4 flex w-[100%] justify-between px-20 sm:space-y-0">
              <div className="sm:mr-4">
                <Image
                  src="/ColgateImage.png"
                  className="rounded-full shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-neutral-600 hover:ring-opacity-50"
                  alt="colgate"
                  width={200}
                  height={200}
                />
              </div>

              <div className="sm:ml-4">
                <Image
                  src="/ColgateCampus.webp"
                  className="aspect-square rounded-full shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-neutral-600 hover:ring-opacity-50"
                  alt="colgate-campus"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>

          {/* top right body */}
          <div className=" pb-1">
            <div className="pb-2">
              <p className="font-medium text-tertiary-heading">
                Colgate Investment Group, Hamilton, NY, Executive Board and
                Consumer Retail Leader
              </p>
              <p className="pb-1 indent-5">
                - Oversaw a fifteen-person group focused on consumer retail and
                creates DCF and comparable company analyses for stock pitches
                that will be presented to the whole group and voted on by the
                Executive Board{" "}
              </p>
              <p className="indent-5 ">
                - Voted on stock pitches for the group’s $40,000 portfolio and
                made decisions as to how to best organize the 180-person group
              </p>
            </div>
          </div>

          <div className="pt-8">
            <div className="w-fit pb-2">
              <p className="text-primary-heading underline underline-offset-4 shadow-xl">
                Relevant Work Experience
              </p>
            </div>

            <div className="pb-2">
              <p className="font-medium text-tertiary-heading ">
                Sloop Software Group
              </p>
              <p className="pb-1">
                - Worked as one of the lead front-end engineers on a team of 12
                Colgate students with ambitions of breaking into the tech
                consulting space
              </p>
              <p>
                - Currently working on a mobile app, using React Native for
                another student run colgate startup
              </p>
            </div>
          </div>

          <div className="pt-8">
            <div className="w-fit pb-2">
              <p className="font-medium text-primary-heading underline underline-offset-4 shadow-xl">
                Skills & Interests
              </p>
            </div>

            <div className="flex-row pb-1">
              <p className="font-medium text-tertiary-heading">Skills:</p>
              <p>
                Web Development, Machine Learning (Learning), HTML, CSS, React.js, Next.js, Javascript
                , Python,
                Java , C,
                Comps Analysis (Learning), DCF Reports (Learning), CapIQ
                (Learning),
              </p>
            </div>

            <div className="flex-row pb-1">
              <p className="font-medium text-tertiary-heading">Interests:</p>

              <p>
              Running, Mountain Biking, Coding, Designing, Volleyball, Soccer, Weightlifting, Video Games
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default resume;
