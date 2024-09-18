import { Button } from '@/components/ui/button'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  return (
    <div>
        <div className="bg-white px-10 flex flex-row my-10">
        <div className="md:w-1/2 flex flex-col items-start justify-normal py-10">
        <div className="bg-gray-100 border-[1px] border-gray-200 rounded-full px-2 py-1 text-sm text-gray-800">Engineering Consultancy</div>
        <h1 className="text-5xl text-gray-800 mt-3 font-light ">Empowering Excellence through Engineering & Consulting</h1>
        <p className="text-lg text-gray-700 mt-10 leading-snug tracking-tight text-justify mr-10 font-light">Euroconsult Pakistan is a global, state-of-the-art service provider organization actively engaged in water resources and energy, agriculture, infrastructure, environment, oil and gas, mass transit, light rail, motorways, highways, institutional capacity building, financial management, rural and urban development, and management. </p>
        <div className="mt-10 flex flex-row gap-3">
        <a href="#" >
        <Button className="px-5 py-6 text-lg font-light  hover:bg-blue-600">Get Started  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
        </a>
        <a href="#" >
        <Button variant="outline" className="px-5 py-6 text-lg font-light  hover:bg-gray-200">Contact Us<FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
        </a>
        </div>
        </div>
        <div className="md:w-1/2 flex flex-col gap-3">
        <div className="w-full h-[60%] rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url('/assets/heroimage.jpg')` }}> </div>
        <div className="w-full h-[40%] rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url('/assets/hero2.jpg')` }}> </div>
        </div>
        </div>
    </div>
  )
}

export default Hero