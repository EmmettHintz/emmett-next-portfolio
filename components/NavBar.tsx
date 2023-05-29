import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="grid grid-cols-2 items-center justify-items-center gap-4 py-4 nav-links">
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
  );
};

export default NavBar;
