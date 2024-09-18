import React from 'react'
import Image from 'next/image'
const Header = () => {
  return (
    <div className="my-10 mx-10 flex flex-row items-center justify-between">
      <Image src="/assets/ecpaklogo.png" width={150} height={1} alt="" />
    </div>
  )
}

export default Header