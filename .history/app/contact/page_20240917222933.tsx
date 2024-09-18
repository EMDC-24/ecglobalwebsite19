import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { ContactForm } from './ContactForm'

const page = () => {
  return (
    <>
    <Header />
    <div className="flex md:flex-row">
        <div className="w-1/2 flex items-center justify-center"><ContactForm /></div>
        <div className="w-1/2 p-3">
        <div className="w-full h-full bg-gray-950 rounded-2xl flex flex-col p-20">
            <h3 className="text-5xl text-white font-extralight">Visit us or drop a call.</h3>
            <h5 className="text-3xl text-white mt-5 mb-1">Address</h5>
            <p className="text-white">514, 5th Floor, GoldCrest Mall, Phase IV, DHA, Lahore, Pakistan.</p>
            <h5 className="text-3xl text-white mt-3 mb-1">Phone</h5>
            <p className="text-white">+92 42 35220805</p>
            <h5 className="text-3xl text-white mt-3 mb-1">Email</h5>
            <p className="text-white">info@euroconsultglobal.com</p>

        </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default page