import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import NavBar from "components/NavBar";
import Image from "next/image";

const resume = () => {
  return (
    <>
     <main className="h-screen bg-slate-800 px-20 text-white">
        <div className="h-auto w-32 pb-16 text-red-400">
          <NavBar />
        </div>

        <div className="flex-row content-center items-center justify-center py-4 text-center text-white ">
          <div>
            <h2 className="pb-2 text-2xl font-bold">Emmett Hintz</h2>
          </div>
          <div>
            <h3 className="pb-6 text-lg">
              415 Ellerslie Avenue | Ambler, PA 19002 | eahintz@colgate.edu |
              215-767-1602 | http://www.linkedin.com/in/emmett-hintz/
            </h3>
          </div>
        </div>

        {/* left header */}
        <div className="grid grid-cols-2 gap-x-36">
          <div className=" flex justify-between pb-2">
            <div>
              <p className="underline underline-offset-4 shadow-md">
                Colgate University
              </p>
            </div>
            <div>
              <p className=" font-bold">Hamilton NY</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div>
              <p className="underline underline-offset-4">
                CAMPUS INVOLVEMENT & LEADERSHIP
              </p>
            </div>
            <div>
              <p className=" font-bold">2021-2023</p>
            </div>
          </div>

          {/* top left body */}
          <div className="pb-1">
            <div className="flex justify-between">
              <p className="font-medium">
                Computer Science and Economics Double Major
              </p>
              <p>GPA: 3.79</p>
            </div>
            <p>Honors and Societies: </p>
            <p className="pb-1 indent-5">
              - Dean’s Award for Academic Excellence (Spring 2022 - 2023)
            </p>
            <p className="pb-1 indent-5">- Phi Eta Sigma Honors Society</p>
            <div>
              <p className="font-medium">
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
            <div className="flex w-[100%] justify-between px-20 pb-16">
              <div>
                <Image
                  src="/ColgateImage.png"
                  className="rounded-full shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-slate-700 hover:ring-opacity-50"
                  alt="colgate"
                  width={200}
                  height={200}
                />
              </div>

              <div>
                <Image
                  src="/ColgateCampus.webp"
                  className="aspect-square rounded-full shadow-xl hover:shadow-2xl hover:ring-4 hover:ring-slate-700 hover:ring-opacity-50"
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
              <p className="font-medium">
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
        </div>

        <div>
          <p>
            Next section placeholder for the rest of the resume. Add more later.
          </p>
        </div>
      </main>
    </>
  );
};

export default resume;
