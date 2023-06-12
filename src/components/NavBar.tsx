import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <div className="relative w-full pb-14">

      <DarkModeToggle />

      <div className="text-secondary-heading sm:text-md text-sm sm:text-xl">
        <ul className="nav-links flex flex-col sm:flex-row items-center justify-items-center py-4">
          <li className="pr-4 sm:pr-2 pb-2 sm:pb-0">
            <Link href="/">
              <span className="hover:underline transition-all duration-300">Home</span>
            </Link>
          </li>

          <li className="pr-4 sm:pr-2 pb-2 sm:pb-0">
            <Link href="/resume">
              <span className="hover:underline transition-all duration-300">Resume</span>
            </Link>
          </li>

          <li className="pr-4 sm:pr-2 pb-2 sm:pb-0">
            <Link href="/projects">
              <span className="hover:underline transition-all duration-300">Projects</span>
            </Link>
          </li>

          <li className="pr-4 sm:pr-2 pb-2 sm:pb-0">
            <Link href="/contact">
              <span className="hover:underline transition-all duration-300">Contact </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
