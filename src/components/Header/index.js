"use client";
import UserProfileModal from "@/app/profile/UserProfileModal";
import Link from "next/link";
import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { useSession } from "next-auth/react";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { data: session } = useSession(); // Kullanıcı oturumunu kontrol et

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <header className="bg-gray-800 text-white py-4 sticky top-0 z-10">
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
            {session && ( // Kullanıcı giriş yapmışsa render edilir
              <li>
                <div>
                  <button onClick={handleOpenModal} className="text-2xl">
                    <FaUserCircle />
                  </button>
                </div>
                <UserProfileModal
                  isOpen={isModalOpen}
                  onClose={handleCloseModal}
                />
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
