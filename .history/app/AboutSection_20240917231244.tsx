import { Button } from '@/components/ui/button'
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";
const AboutSection = () => {
  return (
    <div className="px-10 flex flex-col items-center justify-center">
        <div className="my-10 gap-5 flex flex-col">
            <h3 className="text-[40px] tracking-tight leading-snug font-medium text-slate-800 px-64 text-center">Comprehensive Engineering & Consulting Solutions Tailored to Your Needs</h3>
            <p className="px-64 text-center font-light text-slate-800">Euroconsult has established itself as a leading independent global consulting group, serving both public and private stakeholders across a comprehensive business ecosystem. </p>
        </div>
        <div className="flex flex-row gap-10 px-24 mt-10">
            <div className="w-1/2 flex gap-5 flex-col px-12">
                <h3 className="text-3xl">Your trusted partner for Sustainable Growth</h3>
                <p className="tracking-tight font-light text-justify">With a proven track record of delivering success on hundreds of mandates, we leverage our international reach and the diverse backgrounds of our team members. This unique combination of strategic, economic, industrial, and technical expertise allows us to craft bespoke solutions that address the specific needs of each client. </p>
                <p className="tracking-tight font-light text-justify">Furthermore, we skillfully integrate industry-specific knowledge with proven consulting methodologies to deliver exceptional value and maximize the impact of our services.</p>
                <a href="/about" >
            <Button variant="outline" className="px-5 py-6 text-lg font-light  hover:bg-gray-200">Learn More<FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
            </a>
            </div>
            <div className="w-1/2 flex gap-5 flex-col px-12">
                <h3 className="text-3xl">We offer expert support at every phase of your project.</h3>
                <p className="tracking-tight font-light text-justify">Almost two and half decades of worldwide activities have enabled us to form a multidisciplinary, multinational team of full-time personnel composed of qualified young staff and experienced senior experts. Our team is reinforced by competent controllers, procurement specialists, personnel management staff, as well as state-of-the-art ICT Solution, which permits our experts to successfully plan, manage and implement projects in more than 35 countries.</p>
                <p className="tracking-tight font-light text-justify"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo nisi dolorem voluptas velit obcaecati laborum placeat aliquid ipsum voluptate, repudiandae a, deserunt dignissimos exercitationem, neque sit. Placeat ullam quo ipsum!</p>
                <a href="/about" >
            <Button  className="px-5 py-6 text-lg font-light bg-black  hover:bg-blue-600">Get in Touch<FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
            </a>
            </div>
        </div>
    </div>
  )
}

export default AboutSection