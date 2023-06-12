import Link from "next/link";
import DarkModeToggle from "./DarkModeToggle";

const NavBar = () => {
  return (
    <div className="relative w-full">

      <DarkModeToggle />

      <div className="text-secondary-heading text-xl">
        <ul className="nav-links flex  items-center justify-items-center py-4">
          <li className="pr-4">
            <Link href="/">
              <span className="hover:underline transition-all duration-300">Home</span>
            </Link>
          </li>

          <li className="pr-4">
            <Link href="/resume">
              <span className="hover:underline transition-all duration-300">Resume</span>
            </Link>
          </li>

          <li className="pr-4">
            <Link href="/projects">
              <span className="hover:underline transition-all duration-300">Projects</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
