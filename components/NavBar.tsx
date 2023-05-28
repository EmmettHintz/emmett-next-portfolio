import Link from 'next/link';

const NavBar = () => {
  return (
    <ul className="py-4 flex justify-between">
      <li>
        <Link href="/">
          <span className="rounded px-4 py-2 cursor-pointer text-red-400 hover:text-red-600 transition-colors duration-200">
            <span className="border-b-2 border-transparent hover:border-red-400 transition-all duration-200">
              Home
            </span>
          </span>
        </Link>
      </li>
      <li className="mr-4">
        <Link href="/resume">
          <span className="rounded px-4 py-2 cursor-pointer text-red-400 hover:text-red-600 transition-colors duration-200">
            <span className="border-b-2 border-transparent hover:border-red-400 transition-all duration-200">
              Contact
            </span>
          </span>
        </Link>
      </li>
    </ul>
  );
};

export default NavBar;
