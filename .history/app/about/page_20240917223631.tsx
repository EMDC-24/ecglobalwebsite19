import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import PraiseSection from '../PraiseSection'

const page = () => {
  return (
    <div>
        <Header />
        <div className="w-full bg-gray-950 flex flex-row">
        <div className="w-1/2"></div>
        </div>
        <PraiseSection />
        <Footer />
    </div>
  )
}

export default page