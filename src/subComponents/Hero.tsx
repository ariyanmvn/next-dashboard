import React from 'react'
import Navbar from './Navbar'
import HeroText from './HeroText'
import HeroTabs from './HeroTabs'

export default function Hero() {
  return (
    <div className='hero bg-[#1C2634] w-full h-[320px]'>
        <Navbar></Navbar>
        <HeroText></HeroText>
        <HeroTabs></HeroTabs>
    </div>
  )
}
