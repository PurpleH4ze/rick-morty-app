import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-lg font-semibold">Rick and Morty App</h1>
        <nav>
          <ul className="flex space-x-5">
            <li>
              <Link href="/" className="hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link href="/characters" className="hover:text-gray-300">
                Characters
              </Link>
            </li>
            <li>
              <Link href="/locations" className="hover:text-gray-300">
                Locations
              </Link>
            </li>
            <li>
              <Link href="/episodes" className="hover:text-gray-300">
                Episodes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
