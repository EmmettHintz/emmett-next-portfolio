import NavBar from "~/components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Contact = () => {
  return (
    <main className="min-h-screen bg-white px-4 dark:bg-bg-dark sm:px-20">
      <div>
        <NavBar />
      </div>

      <div className="flex justify-center">
        <h2 className="text-6xl font-extrabold pb-16 text-primary-heading">Contact Me!</h2>
      </div>

      <div className="inline-flex justify-center text-center w-full gap-4">
        <p className="text-4xl font-medium text-tertiary-heading">Email: {""}</p>
        <p className="text-4xl font-medium text-secondary-heading">eahintz@colgate.edu</p>
      </div>

      <div className="grid grid-cols-2">
        <div className="flex items-center justify-center">
          <Link
            href="http://www.linkedin.com/in/emmett-hintz/"
            className="text-[30vw] text-blue-600 sm:text-[20vw] md:text-[15vw] lg:text-[25vw] rounded-full hover:opacity-80  hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </Link>
        </div>
        <div className="flex items-center justify-center">
          <Link
            href="https://github.com/EmmettHintz"
            className="text-[30vw] text-bg-dark dark:text-white sm:text-[20vw] md:text-[15vw] lg:text-[25vw] rounded-full hover:opacity-80  hover:scale-105 transition-all duration-300"
          >
            <FontAwesomeIcon icon={faGithub} />
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Contact;
