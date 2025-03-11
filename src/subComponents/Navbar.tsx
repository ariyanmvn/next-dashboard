import { Input } from "@/components/ui/input";
import HamburgerIcon from "@/icons/HamburgerIcon";
import NotificationIcon from "@/icons/NotificationIcon";
import SearchIcon from "@/icons/SearchIcon";
import Image from "next/image";
import React from "react";

export default function Navbar() {
  return (
    <nav className="text-white">
      <div className="deks-nav hidden lg:flex justify-between px-[25px] py-[15px]">
        <div className="flex items-center gap-[64px]">
          <div className="logo flex items-center gap-[12px]">
            <Image
              src={"/logo.png"}
              alt="FinLab logo"
              className="object-cover"
              width={38}
              height={38}
            />
            <h1 className="text-xl font-semibold">FinLab</h1>
          </div>
          <div className="links">
          <ul className="flex items-center gap-[10px] text-[#A2A6AA] font-light">
            <li className="bg-[#FFFFFF1A] text-white py-3 px-5 rounded-[14px]">Dashboard</li>
            <li>Wallets</li>
            <li>Settings</li>
            <li>Help & Center</li>
          </ul>
        </div>

        </div>
        
        <div className="icons flex gap-[14px] items-center">
          <div className="flex items-center cursor-pointer  bg-[#FFFFFF12] rounded-[100px] py-2 px-5">
            <SearchIcon></SearchIcon>
            <Input className="border-none" placeholder="search anything here"></Input>

          </div>
          <div className="notification bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <NotificationIcon />
          </div>
          <div className="profile bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <img src="/profile.png" alt="User profile" />
          </div>
        </div>
      </div>

      <div className="nav flex justify-between p-[25px]">
        <div className="ham bg-[#FFFFFF12] flex items-center cursor-pointer justify-center rounded-full w-[42px] h-[42px] lg:hidden">
          <HamburgerIcon />
        </div>

        <div className="icons flex gap-[12px] cursor-pointer lg:hidden">
          <div className="search bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <SearchIcon />
          </div>
          <div className="notification bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <NotificationIcon />
          </div>
          <div className="profile bg-[#FFFFFF12] flex items-center justify-center rounded-full w-[42px] h-[42px]">
            <img src="/profile.png" alt="User profile" />
          </div>
        </div>
      </div>
    </nav>
  );
}
