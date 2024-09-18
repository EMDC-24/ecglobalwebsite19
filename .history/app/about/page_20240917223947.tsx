import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PraiseSection from '../PraiseSection'

const page = () => {
  return (
    <div>
        <Header />
        <div className="w-full bg-gray-950 flex flex-row h-[640px]">
        <div className="w-1/2">.</div>
        <div className="w-full h-full  bg-cover bg-center" style={{ backgroundImage: `url('/assets/heroimage.jpg')` }}> asd</div>
        </div>
        <PraiseSection />
        <Footer />
    </div>
  )
}

export default page