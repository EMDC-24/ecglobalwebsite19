import { Button } from '@/components/ui/button'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
const AboutSection = () => {
  return (
    <div className="px-10 flex flex-col items-center justify-center">
        <div className="my-10 gap-5 flex flex-col">
            <h3 className="text-4xl font-medium text-slate-800 px-72 text-center">Comprehensive Training & Consulting Solutions Tailored to Your Needs</h3>
            <p className="px-64 text-center font-light text-slate-800">With focus on individual attention, we are committed to delivering customized strategies, empowering your workforce, and guiding your business to sustainable growth & excellence</p>
        </div>
        <div className="flex flex-row gap-10 px-24 mt-10">
            <div className="w-1/2 flex gap-5 flex-col px-12">
                <h3 className="text-3xl">Our Approach to Leadership Development</h3>
                <p className="tracking-tight font-light text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dolorem voluptas velit obcaecati laborum placeat aliquid ipsum voluptate, repudiandae a, deserunt dignissimos exercitationem, neque sit. Placeat ullam quo ipsum!</p>
                <p className="tracking-tight font-light text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dolorem voluptas velit obcaecati laborum placeat aliquid ipsum voluptate, repudiandae a, deserunt dignissimos exercitationem, neque sit. Placeat ullam quo ipsum!</p>
                <a href="#" >
            <Button variant="outline" className="px-5 py-6 text-lg font-light  hover:bg-gray-200">Contact Us<FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
            </a>
            </div>
            <div className="w-1/2 flex gap-5 flex-col px-12">
                <h3 className="text-3xl">Leadership Development Expands a leader's impact</h3>
                <p className="tracking-tight font-light text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dolorem voluptas velit obcaecati laborum placeat aliquid ipsum voluptate, repudiandae a, deserunt dignissimos exercitationem, neque sit. Placeat ullam quo ipsum!</p>
                <p className="tracking-tight font-light text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dolorem voluptas velit obcaecati laborum placeat aliquid ipsum voluptate, repudiandae a, deserunt dignissimos exercitationem, neque sit. Placeat ullam quo ipsum!</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection