import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PraiseSection from '../PraiseSection'

const page = () => {
  return (
    <div>
        <Header />
        <div className="w-full bg-gray-950 flex flex-row h-[640px]">
        <div className="w-1/2 flex flex-col p-16 gap-5 items-center justify-center">
        <h1 className="text-6xl text-gray-200 font-light">Who we are</h1>
        <p className="text-gray-300">Euroconsult Pakistan (Pvt.) Limited (ECPAK) is a Pakistani Private Sector owned multidisciplinary ISO Certified Company, involved in providing engineering and management consultancy services domestically and internationally; established in 1996, and registered with the Pakistan Engineering Council.</p>
        <div className="flex flex-row gap-20 my-10">
            <div className="">
                <h2 className="font-light text-gray-200 text-6xl">&gt;240</h2>
                <p className="font-light text-gray-200">Projects Completed</p>
            </div>
            <div className="">
                <h2 className="font-light text-gray-200 text-6xl">230</h2>
                <p className="font-light text-gray-200">Employees</p>
            </div>
        </div>
        </div>
        <div className="w-1/2 h-full  bg-cover bg-center" style={{ backgroundImage: `url('/assets/heroimage.jpg')` }}></div>
        </div>
        <PraiseSection />
        <Footer />
    </div>
  )
}

export default page