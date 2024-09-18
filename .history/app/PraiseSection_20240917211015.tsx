
import { Button } from '@/components/ui/button'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";

const PraiseSection = () => {
  return (
    <div className="mx-20 flex flex-row gap-10 my-20 items-center justify-center">
    <div className="w-1/2 flex flex-col gap-3">
        <h3 className="text-3xl font-medium text-slate-800">Proving Excellence through Training & Consulting</h3>
        <p className="font-light text-slate-800 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, vitae porro! Fuga hic modi ipsa animi? Eaque porro, blanditiis ratione mollitia unde, ullam nostrum eligendi maxime placeat esse officiis suscipit!</p>
        <div className="w-auto mt-3"><Button className="px-5 py-6 text-lg font-light  hover:bg-blue-800">Get in Touch  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button></div>
    </div>
    <div className="w-1/2 flex flex-col gap-10 ">
    <div className="flex flex-row gap-20 items-start justify-center">
        <div>
        <h3 className="text-5xl font-medium text-slate-800">160+</h3>
        <p className="font-light text-slate-800">Projects Completed</p>
        </div>
        <div>
        <h3 className="text-5xl font-medium text-slate-800">160+</h3>
        <p className="font-light text-slate-800">Projects Completed</p>
        </div>
    </div>
    <div className="flex flex-row gap-20 items-start justify-center">
        <div>
        <h3 className="text-5xl font-medium text-slate-800">160+</h3>
        <p className="font-light text-slate-800">Projects Completed</p>
        </div>
        <div>
        <h3 className="text-5xl font-medium text-slate-800">160+</h3>
        <p className="font-light text-slate-800">Projects Completed</p>
        </div>
    </div>
    
    </div>
    </div>
  )
}

export default PraiseSection