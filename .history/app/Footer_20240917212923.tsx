import { Separator } from '@/components/ui/separator'
import React from 'react'

const Footer = () => {
  return (
    <div className="mx-10 flex flex-col gap-10">
        <Separator />
        <div className="flex flex-col md:flex-row ">
            <div className="w-1/2">
                <h5 className="text-3xl font-medium text-slate-800 mx-10">Empowering Excellence in Workforce Development & Strategic Consulting, Your Partner for Success</h5>
            </div>
            <div className="w-1/2 flex flex-row gap-0">
                <div className="w-1/2 flex flex-col gap-2">
                <p className="text-slate-800 ">Navigation</p>
                <a href="/" className="text-slate-800 font-light">Home</a>
                <a href="/" className="text-slate-800 font-light">About</a>
                <a href="/" className="text-slate-800 font-light">Sectors</a>
                <a href="/" className="text-slate-800 font-light">Recent Projects</a>
                <a href="/" className="text-slate-800 font-light">Contact</a>
                </div>
                
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Footer