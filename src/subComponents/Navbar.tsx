import HamburgerIcon from '@/icons/HamburgerIcon'
import NotificationIcon from '@/icons/NotificationIcon'
import SearchIcon from '@/icons/SearchIcon'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <nav className="  text-white">
      <div className="logo hidden lg:flex items-centerj gap-3">
        <Image src={"/logo.png"} alt='logo' className='object-cover' width={38} height={38}></Image>
        <h1 className="text-xl font-semibold">FinLab</h1>
      </div> 

      <div className="nav flex justify-between p-[25px]">
        <div className="ham bg-[#FFFFFF12] flex items-center cursor-pointer justify-center rounded-full w-[42px] h-[42px] lg:hidden">
          <HamburgerIcon />
        </div>

        <div className="icons flex gap-[12px] cursor-pointer lg:hidden">
        <div className="search bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px] lg:hidden">
            <SearchIcon></SearchIcon>
        </div>
        <div className="notification cursor-pointer bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px] lg:hidden">
            <NotificationIcon></NotificationIcon>
        </div>
        <div className="profile cursor-pointer bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px] lg:hidden">
            <img src="/profile.png" alt="" />
        </div>
        </div>
      </div>
    </nav>
  )
}
