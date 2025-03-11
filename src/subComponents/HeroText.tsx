import ArrowIcon from "@/icons/ArrowIcon";
import React from "react";

export default function HeroText() {
  return (
    <div className="texts flex justify-start items-start py-[25px] lg:py-[0px] pl-[25px] flex-col gap-[12px]">
      <h1 className=" font-semibold text-[#FFFFFF] text-[20px] lg:text-[24]">
        Welcome back, Rainer Yaeger 👏🏻
      </h1>
      <div className="buttons text-[12px] flex items-center gap-[12px]">
        <p className="text-[#A2A6AA]">Dashboard</p>
        <p className="text-white h-[12px] w-[12px]">
          <ArrowIcon></ArrowIcon>
        </p>
        <p className="text-[#FFFFFF]">Transaction</p>
      </div>
    </div>
  );
}
