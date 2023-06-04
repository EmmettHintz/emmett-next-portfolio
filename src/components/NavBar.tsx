import Link from "next/link";
import ToggleDarkMode from "./ToggleDarkMode";

const NavBar = () => {
  return (
    <div className="relative w-full bg-red-200">

      <div className="bg-white">
        <ToggleDarkMode />
      </div>

      <div className="text-red-400">
        <ul className="nav-links grid  items-center justify-items-center gap-4 py-4">
          <li>
            <Link href="/">
              <span className="hover:underline">Home</span>
            </Link>
          </li>
          <li className="pr-4">
            <Link href="/resume">
              <span className="hover:underline">Resume</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
