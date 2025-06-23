'use client'

import React from 'react'


export default function HeaderComponent() {
  return (
    <header className='max-h-[70px] grid grid-cols-2 border-b-[1px] border-b-[#fff] pb-3 fixed z-10 bg-[rgba(0,0,0,0.8)] w-full left-0'>
      <img src='/logo.png' className='h-[50px] pt-3 pl-3' /> 
      <nav className='hidden md:block'>
        <div className='float-right mt-3 grid grid-cols-5 place-items-center text-[14px] pr-10'>
          <a onClick={() => document.getElementById("concept")?.scrollIntoView({ behavior: "smooth" })} className='cursor-pointer hover:text-blue-500' >Concept</a>
          <a onClick={() => document.getElementById("features")?.scrollIntoView({ behavior: "smooth" })} className='cursor-pointer hover:text-blue-500'>Features</a>
          <a onClick={() => document.getElementById("roadmap")?.scrollIntoView({ behavior: "smooth" })} className='cursor-pointer hover:text-blue-500'>Roadmap</a>
          <a  onClick={() => document.getElementById("tokenomics")?.scrollIntoView({ behavior: "smooth" })} className='cursor-pointer hover:text-blue-500'>Tokenomics</a>
          <a className='float-left  p-5 pt-2 pb-2 bg-black rounded-lg hover:bg-white hover:text-black' href='https://zellet.org'>Get Started</a>
        </div>
      </nav>
    </header>
  )
}
