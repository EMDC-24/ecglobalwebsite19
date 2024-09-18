import { Separator } from '@/components/ui/separator'
import React from 'react'

const Footer = () => {
  return (
    <div className="mx-10 flex flex-col gap-10">
        <Separator />
        <div className="flex flex-col md:flex-row ">
            <div className="w-1/2">
                <h5 className="text-5xl font-medium text-slate-800">Empowering Excellence in Workforce Development & Strategic Consulting, Your Partner for Success</h5>
            </div>
            <div className="w-1/2">
                
            </div>
        </div>
    </div>
  )
}

export default Footer