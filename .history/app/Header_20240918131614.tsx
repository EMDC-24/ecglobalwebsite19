"use client";

import { Button } from '@/components/ui/button'

import { FaAngleRight } from "react-icons/fa6";
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
const Header = () => {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const getInTouchClick = () => {
    router.push('/contact');
  };
  const aboutClick = () => {
    router.push('/#projects');
  };
  return (
    <div className="my-5 mx-10 flex flex-row items-center justify-between">
      <Image src="/assets/ecpaklogo.png" width={150} height={1} alt="" />
      <div><HeaderMenu  /></div>
      <Button className="px-5 py-6 text-lg font-light  hover:bg-blue-600" onClick={aboutClick}>Case Studies  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
    </div>
  )
}

export default Header