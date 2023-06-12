import React from "react";
import NavBar from "~/components/NavBar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-white px-4 dark:bg-bg-dark sm:px-20 lg:px-40">
      <div>
        <NavBar />
      </div>

      <div className="flex justify-center">
        <h2 className="pb-16 text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-extrabold text-primary-heading">
          Contact Me!
        </h2>
      </div>

      <div className="flex w-full items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl gap-y-6 sm:gap-y-8 md:gap-y-10 lg:gap-y-12 flex-col justify-center gap-4 text-center">
        <div className="inline-flex gap-2 justify-center">
          <p className="font-medium text-tertiary-heading">
            Email: {""}
          </p>
          <p className="font-medium text-secondary-heading">
            eahintz@colgate.edu
          </p>
        </div>

        <Link
          href="http://www.linkedin.com/in/emmett-hintz/"
          className="inline-flex items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-blue-600 hover:underline"
        >
          <FaLinkedin className="mr-2" />
          Linkedin
        </Link>

        <Link
          href="https://github.com/EmmettHintz"
          className="inline-flex  items-center text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-medium text-bg-dark dark:text-text-dark hover:underline"
        >
          <FaGithub className="mr-2" />
          GitHub
        </Link>
      </div>
    </main>
  );
};

export default Contact;
