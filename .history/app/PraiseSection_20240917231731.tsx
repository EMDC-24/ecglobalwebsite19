
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const PraiseSection = () => {
  return (
    <div className="mx-20 flex flex-row gap-10 my-20 items-center justify-center">
    <div className="w-2/3 flex flex-col gap-3 mr-36">
        <h3 className="text-3xl font-medium text-slate-800">Proving Excellence through Engineering & Consulting</h3>
        <p className="font-light text-slate-800 text-justify">Euroconsult is one of the leading consulting firms in Pakistan having international operations. It houses highly qualified and experienced professionals with state of the art organisational setup and provides services in Engineering, Construction, Financial, Water, and Socio-economic Sector.</p>
        <div className="w-auto mt-3"><a href="/contact"><Button className="px-5 py-6 text-lg font-light  hover:bg-blue-600" >Get in Touch  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button></a></div>
    </div>
    <div className="w-1/3 flex flex-col gap-10 items-start">
    <div className="flex flex-row gap-20 items-start justify-center">
        <div>
        <h3 className="text-5xl font-medium text-slate-800">250+</h3>
        <p className="font-light text-slate-800">Projects Completed</p>
        </div>
        <div>
        <h3 className="text-5xl font-medium text-slate-800">230</h3>
        <p className="font-light text-slate-800">Employees</p>
        </div>
    </div>
    <div className="flex flex-row gap-20 items-start justify-center">
        <div>
        <h3 className="text-5xl font-medium text-slate-800">24+</h3>
        <p className="font-light text-slate-800">Years of Experience</p>
        </div>
        <div>
        <h3 className="text-5xl font-medium text-slate-800">56+</h3>
        <p className="font-light text-slate-800">Satisfied Clients</p>
        </div>
    </div>
    
    </div>
    </div>
  )
}

export default PraiseSection