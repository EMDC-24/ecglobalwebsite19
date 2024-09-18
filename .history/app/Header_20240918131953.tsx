"use client";

import { Button } from '@/components/ui/button';
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSectorsOpen, setIsSectorsOpen] = useState(false);

  const handleNavigate = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // Close main menu after navigation
  };

  return (
    <div className="my-5 mx-10 flex flex-row items-center justify-between relative">
      <Image src="/assets/ecpaklogo.png" width={150} height={1} alt="Logo" />
      <div></div>

      {/* Main Menu */}
      <div className="relative">
        <Button
          className="px-5 py-6 text-lg font-light hover:bg-blue-600"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Menu
        </Button>

        {/* Main Menu Items */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
            <div
              onClick={() => handleNavigate('/')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Home
            </div>
            <div
              onClick={() => { setIsSectorsOpen(!isSectorsOpen); }}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Sectors
            </div>
            <div
              onClick={() => handleNavigate('/about')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              About
            </div>
            <div
              onClick={() => handleNavigate('/contact')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Contact
            </div>

            {/* Sectors Submenu */}
            {isSectorsOpen && (
              <div className="absolute left-full top-0 mt-0 w-48 bg-white border border-gray-200 shadow-lg">
                <div
                  onClick={() => handleNavigate('/sectors/water')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Water
                </div>
                <div
                  onClick={() => handleNavigate('/sectors/agriculture')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Agriculture
                </div>
                <div
                  onClick={() => handleNavigate('/sectors/construction')}
                  className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
                >
                  Construction
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
