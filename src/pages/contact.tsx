import React from "react";
import NavBar from "~/components/NavBar";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="min-h-screen bg-white px-4 text-text-light dark:bg-bg-dark dark:text-text-dark sm:px-20">
      <div>
        <NavBar />
      </div>

      <div className="flex justify-center">
        <h2 className="pb-16 text-4xl font-extrabold text-primary-heading sm:text-6xl md:text-7xl lg:text-9xl">
          Contact Me!
        </h2>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-4 gap-y-6 text-center text-2xl sm:gap-y-8 sm:text-4xl md:gap-y-10 md:text-5xl lg:gap-y-12 lg:text-6xl">
        <div className="inline-flex justify-center gap-2">
          <p className="font-medium text-tertiary-heading">Email: {""}</p>
          <p className="font-medium text-secondary-heading">
            eahintz@colgate.edu
          </p>
        </div>

        <Link
          href="http://www.linkedin.com/in/emmett-hintz/"
          className="inline-flex items-center text-2xl font-medium text-blue-600 hover:underline sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <FaLinkedin className="mr-2" />
          Linkedin
        </Link>

        <Link
          href="https://github.com/EmmettHintz"
          className="inline-flex  items-center text-2xl font-medium text-bg-dark hover:underline dark:text-text-dark sm:text-4xl md:text-5xl lg:text-6xl"
        >
          <FaGithub className="mr-2" />
          GitHub
        </Link>
      </div>
    </main>
  );
};

export default Contact;
