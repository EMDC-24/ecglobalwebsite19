import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PraiseSection from '../PraiseSection'

const page = () => {
  return (
    <div>
        <Header />
        <div className="w-full bg-gray-950 flex flex-row">
        <div className="w-1/2">.</div>
        <div className="w-1/2 h-[440px] p-10 rounded-2xl bg-cover bg-center" style={{ backgroundImage: `url('/assets/heroimage.jpg')` }}> </div>
        </div>
        <PraiseSection />
        <Footer />
    </div>
  )
}

export default page