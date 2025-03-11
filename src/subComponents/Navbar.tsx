import HamburgerIcon from '@/icons/HamburgerIcon'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-4 py-3  text-white">
      <div className="logo hidden lg:block">
        <h1 className="text-xl font-bold">MyLogo</h1>
      </div>
      
      <div className="nav">
        <div className="ham bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px] lg:hidden">
          <HamburgerIcon />
        </div>
      </div>
    </nav>
  )
}
