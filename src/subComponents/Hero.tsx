import React from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'
import HeroTabs from './HeroTabs'

export default function Hero() {
  return (
    <>
    <div className='hero bg-[#1C2634] w-full h-[320px] lg:h-[340px]'>
        <Navbar></Navbar>
        <HeroText></HeroText>
   
        <HeroTabs></HeroTabs>

    </div>


    <div className='bg-[#F4F4F7] w-full h-[1000px]'>

    </div>
   
    </>
  )
}
