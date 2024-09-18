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
                <div className="w-1/3 flex flex-col gap-2 ">
                <p className="text-slate-800 ">Navigation</p>
                <a href="/" className="text-slate-800 font-light">Home</a>
                <a href="/" className="text-slate-800 font-light">About</a>
                <a href="/" className="text-slate-800 font-light">Sectors</a>
                <a href="/" className="text-slate-800 font-light">Recent Projects</a>
                <a href="/" className="text-slate-800 font-light">Contact</a>
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
    </div>
  )
}

export default Footer