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

        <div className="flex flex-col items-center justify-center pb-4 text-center text-primary-heading dark:text-primary-heading">
          <div>
            <h2 className="pb-2 text-4xl font-extrabold sm:text-5xl md:text-6xl">
              Emmett Hintz
            </h2>
          </div>
          <div>
            <h3 className="sm:text-md pb-6 text-sm font-medium  text-secondary-heading  md:text-lg">
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
                Double Major in Computer Science and Economics
              </p>
              <p>GPA: 3.79</p>
            </div>
            <p>Honors and Societies: </p>
            <p className="pb-1 indent-5">
              - Received the Dean’s Award for Academic Excellence With
              Distinction (Spring 2022 - 2023)
            </p>
            <p className="pb-1 indent-5">
              - Member of Phi Eta Sigma Honors Society
            </p>
            <div>
              <p className="font-medium text-tertiary-heading">
                Colgate University Computer Science Department, Teaching
                Assistant
              </p>
              <p className="indent-5">
                - Assisted the professor in structuring the learning
                environment, preparing materials, and designing a lab plan
              </p>
              <p className="pb-8 indent-5">
                - Offered individual attention to students during group sessions to optimize their learning experiences.
              </p>
            </div>
            <div className="pb-16space-y-4 flex  w-[100%] justify-between space-x-4 px-20 pb-8 sm:space-y-0">
              <div>
                <Image
                  src="/ColgateImage.png"
                  className="rounded-full shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-neutral-600 hover:ring-opacity-50"
                  alt="colgate"
                  width={200}
                  height={200}
                />
              </div>

              <div>
                <Image
                  src="/ColgateCampus.webp"
                  className="aspect-square rounded-3xl shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-neutral-600 hover:ring-opacity-50"
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
                - Supervised a team of fifteen, focusing on consumer retail, and
                contributed to the creation of DCF and comparable company
                analyses for stock pitches. These pitches were subsequently
                presented to the whole group and voted on by the Executive
                Board.
              </p>
              <p className="indent-5 ">
                - Participated in voting on stock pitches for the group&apos;s
                $40,000 portfolio and contributed to decisions regarding the
                best way to organize the 180-member group.
              </p>

              <p className="font-medium text-tertiary-heading">
                Colgate TAMID Group
              </p>
              <p className="pb-1 indent-5">
                - Constructed financial models for the Colgate team to use in
                national TAMID events, competing against other schools in stock
                pitch competitions.
              </p>
            </div>

            <div className="pb-16space-y-4  flex w-[100%] justify-between space-x-4 px-20 pt-4 sm:space-y-0">
              <div className="sm:ml-4">
                <Image
                  src="/Cig.jpeg"
                  className="rounded-3xl shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-neutral-600 hover:ring-opacity-50"
                  alt="colgate-campus"
                  width={200}
                  height={200}
                />
              </div>
              <div className="sm:mr-4">
                <Image
                  src="/tamid.png"
                  className="rounded-full shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-neutral-600 hover:ring-opacity-50"
                  alt="colgate"
                  width={200}
                  height={200}
                />
              </div>
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
                - Serving as a lead front-end engineer within a dynamic team of
                12 Colgate students, we are eager to make our mark in the tech
                consulting space.
              </p>
              <p>
                - Currently working on the development of a mobile app using
                React Native, designed for a student-run startup at Colgate.
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
                Web Development, Machine Learning (Learning), HTML, CSS,
                React.js, Next.js, Javascript, Python, Java , C, Comps Analysis
                (Learning), DCF Reports (Learning), CapIQ (Learning),
              </p>
            </div>

            <div className="flex-row pb-1">
              <p className="font-medium text-tertiary-heading">Interests:</p>

              <p>
                Running, Mountain Biking, Coding, Designing, Volleyball, Soccer,
                Weightlifting, Video Games
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default resume;
