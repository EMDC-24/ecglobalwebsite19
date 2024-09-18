import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="my-5 mx-10 flex flex-row items-center justify-between">
      <Image src="/assets/ecpaklogo.png" width={150} height={1} alt="" />
      <div>Nav Here</div>
    </div>
  )
}

export default Header