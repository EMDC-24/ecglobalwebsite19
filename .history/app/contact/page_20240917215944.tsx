import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const page = () => {
  return (
    <>
    <Header />
    <div className="flex md:flex-row">
        <div className="w-1/2"></div>
        <div className="w-1/2 p-3">
        <div className="w-full h-full bg-black rounded-2xl flex flex-col p-20">
            <h3 className="text-5xl text-white font-light">Get in Touch</h3>
            <h5 className="text-3xl text-white mt-5 mb-2">Address</h5>
            <p className="text-white">514, 5th Floor, GoldCrest Mall, Phase IV, DHA, Lahore, Pakistan.</p>
            <h5 className="text-3xl text-white mt-5 mb-2">Phone</h5>
            <p className="text-white">514, 5th Floor, GoldCrest Mall, Phase IV, DHA, Lahore, Pakistan.</p>
            <h5 className="text-3xl text-white mt-5 mb-2">Email</h5>
            <p className="text-white">514, 5th Floor, GoldCrest Mall, Phase IV, DHA, Lahore, Pakistan.</p>

        </div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default page