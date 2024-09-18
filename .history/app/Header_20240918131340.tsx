import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="my-5 mx-10 flex flex-row items-center justify-between">
      <Image src="/assets/ecpaklogo.png" width={150} height={1} alt="" />
      <div>Nav Here</div>
      <Button className="px-5 py-6 text-lg font-light  hover:bg-blue-600" onClick={aboutClick}>About Us  <FaAngleRight className="mr-2 ml-2 h-4 w-4" /></Button>
    </div>
  )
}

export default Header