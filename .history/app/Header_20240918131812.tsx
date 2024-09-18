"use client";

import { Button } from '@/components/ui/button';
import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Image from 'next/image';

const Header = () => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getInTouchClick = () => {
    router.push('/contact');
  };

  const aboutClick = () => {
    router.push('/#projects');
  };

  const handleMenuClick = (path: string) => {
    router.push(path);
    setIsMenuOpen(false); // Close submenu after navigation
  };

  return (
    <div className="my-5 mx-10 flex flex-row items-center justify-between relative">
      <Image src="/assets/ecpaklogo.png" width={150} height={1} alt="Logo" />
      <div></div>
      
      {/* Main Button */}
      <div className="relative">
        <Button 
          className="px-5 py-6 text-lg font-light hover:bg-blue-600" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          Case Studies <FaAngleRight className="mr-2 ml-2 h-4 w-4" />
        </Button>

        {/* Submenu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
            <a
              onClick={() => handleMenuClick('/page1')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Link 1
            </a>
            <a
              onClick={() => handleMenuClick('/page2')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Link 2
            </a>
            <a
              onClick={() => handleMenuClick('/page3')}
              className="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer"
            >
              Link 3
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default Header;
