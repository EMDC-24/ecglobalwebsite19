"use client";

import { Separator } from '@/components/ui/separator'


import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

const Footer = () => {
    const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  const getInTouchClick = () => {
    router.push('/contact');
  };
  const aboutClick = () => {
    router.push('/about');
  };
  const sectorsClick = () => {
    router.push('/#sectors');
  };
  const projectsClick = () => {
    router.push('/#projects');
  };
  const homeClick = () => {
    router.push('/');
  };
  return (
    <div className="mx-10 flex flex-col gap-3 mt-40">
        <Separator />
        <div className="flex flex-col md:flex-row my-5">
            <div className="w-1/2">
                <h5 className="text-3xl font-medium text-slate-800 mx-10">Empowering Excellence in Workforce Development & Strategic Consulting, Your Partner for Success</h5>
            </div>
            <div className="w-1/2 flex flex-row gap-0">
                <div className="w-1/3 flex flex-col gap-2 ">
                <p className="text-slate-800 ">Navigation</p>
                <p onClick={homeClick} className="text-slate-800 font-light">Home</p>
                <p onClick={aboutClick} className="text-slate-800 font-light">About</p>
                <p onClick={sectorsClick} className="text-slate-800 font-light">Sectors</p>
                <p onClick={projectsClick} className="text-slate-800 font-light">Recent Projects</p>
                <p onClick={getInTouchClick} className="text-slate-800 font-light">Contact</p>
                </div>
                <div className="w-2/3 flex flex-row gap-0 ">
                <div className="w-1/2 flex flex-col gap-2">
                <p className="text-slate-800 ">Sectors</p>
                <a href="/" className="text-slate-800 font-light">Agriculture</a>
                <a href="/" className="text-slate-800 font-light">Construction</a>
                <a href="/" className="text-slate-800 font-light">Education</a>
                <a href="/" className="text-slate-800 font-light">Environment</a>
                <a href="/" className="text-slate-800 font-light">Energy</a>
                <a href="/" className="text-slate-800 font-light">Hydropower</a>
                </div>
                <div className="w-1/2 flex flex-col gap-2">
                <p className="text-slate-800 "><br></br></p>
                <a href="/" className="text-slate-800 font-light">Management Consulting</a>
                <a href="/" className="text-slate-800 font-light">Roads & Bridges</a>
                <a href="/" className="text-slate-800 font-light">Oil & Gas</a>
                <a href="/" className="text-slate-800 font-light">Public Health</a>
                <a href="/" className="text-slate-800 font-light">Solid Waste Management</a>
                </div>
                </div>
                
                
            </div>
            
        </div>
        <Separator />
        <div className="flex flex-col md:flex-row items-center">
            <div className="w-2/3 px-10"><Image src="/assets/ecpaklogo.png" width={200} height={1} alt="" /></div>
            <div className="w-1/3 flex flex-row gap-5">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Settings</p>
            </div>
        </div>
        <Separator />
        <div className="mx-10 mb-3 flex flex-row items-center justify-between">
            <p className="text-sm font-light text-slate-800">©2024 Euroconsult Private Limited. </p>
            <p className="text-sm font-light text-slate-800">All rights reserved. </p>
        </div>
    </div>
  )
}

export default Footer