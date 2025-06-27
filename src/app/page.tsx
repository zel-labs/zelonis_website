"use client"

import Image from "next/image";
import HeaderComponent from "./component/header"
import RoadmapComponent from "./component/roadmap"
import TopSection from "./section/top";
import SecondSection from "./section/second";
import TokenomicsSection from "./section/tokenomics";
import RoadmapSection from "./section/roadmap";
import FooterComponent from "./component/footer"
import 'animate.css'
import WOW from 'wowjs'
import { useEffect,useState  } from "react";
import HomeSection from "./section/home";

export default function Home() {
  
 

  useEffect(() => {
    const darkMode = window.matchMedia('(prefers-color-scheme: dark)')
    if (darkMode.matches) {
      document.documentElement.classList.add('dark')
    }
   // or remove it for light
  new WOW.WOW().init()
}, [])
 

  return (
    <>
    
   
    <HeaderComponent />
    <TopSection />
    <SecondSection/>
    <TokenomicsSection/>
    <RoadmapSection/>
    <HomeSection/>
    <FooterComponent />
    
    
    
    
    </>
  );
}
