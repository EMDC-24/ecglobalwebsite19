import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const page = () => {
  return (
    <>
    <Header />
    <div className="flex md:flex-row">
        <div className="w-1/2"></div>
        <div className="w-1/2 p-5">
        <div className="w-full h-full bg-black"></div>
        </div>

    </div>
    <Footer />
    </>
  )
}

export default page