import Link from "next/link";

const NavBar = () => {
  return (
    <ul className="py-4 flex justify-between  ">
      <li>
        <Link className="rounded px-4 py-2 underline text-red-400" href="/">
          Home
        </Link>
      </li>
      <li className="mr-4">
        <Link className=" rounded px-4 py-2 text-red-400 gap-4 underline" href="/resume">
          Contact
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
