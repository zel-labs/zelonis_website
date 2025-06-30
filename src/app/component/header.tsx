'use client'

import React from 'react'


export default function HeaderComponent() {
  return (
    <header
      className="fixed top-0 z-50 flex items-center w-full bg-dark "
    >
      <div className="container">
        <div className="relative flex items-center justify-between -mx-4">
          <div className="max-w-full px-4 w-60">
            <a className="block w-full py-6 lg:py-5">
              <img src="logo.png" alt="logo" className="w-full dark:hidden" />
              <img src="logo.png" alt="logo" className="hidden w-full dark:block" />
            </a>
          </div>
          <div className="flex items-center justify-end w-full px-4">
            <div>
              <button
                id="navbarToggler"
                className="absolute right-4 top-1/2 block -translate-y-1/2 rounded-lg px-3 py-[6px] ring-primary focus:ring-2 lg:hidden"
              >
                <span  className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span  className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
                <span  className="relative my-[6px] block h-[2px] w-[30px] bg-black dark:bg-white"></span>
              </button>
              <nav
                
                id="navbarCollapse"
                className="absolute right-4 top-full w-full max-w-[250px] rounded-lg bg-white py-4 px-6 shadow-sm dark:bg-black lg:static lg:block lg:w-full lg:max-w-full lg:bg-transparent lg:py-0 lg:shadow-none dark:lg:bg-transparent"
              >
                <ul className="blcok lg:flex">
                  <li className="text-body-color-2 dark:text-body-color">
                    <a href="#home"
                      className="flex py-2 text-lg font-semibold scroll-menu text-primary hover:text-primary dark:text-white dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Home
                    </a>
                  </li>
                  <li>
                    <a
                      href="#features"
                      className="flex py-2 text-lg font-semibold scroll-menu text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Features
                    </a>
                  </li>

                  <li>
                    <a
                      href="#roadmap"
                      className="flex py-2 text-lg font-semibold scroll-menu text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-white lg:ml-7 lg:inline-flex lg:py-5 xl:ml-10 2xl:ml-12"
                    >
                      Roadmap
                    </a>
                  </li>

                  {/*<li className="relative group submenu-item">
                    <a
                      href="javascript:void(0)"
                      
                      className="relative flex py-2 text-lg font-semibold text-body-color-2 after:absolute after:right-1 after:top-1/2 after:mt-[-2px] after:h-2 after:w-2 after:translate-y-[-50%] after:rotate-45 after:border-b-2 after:border-r-2 after:border-current group-hover:text-primary dark:text-body-color dark:group-hover:text-white lg:ml-7 lg:inline-flex lg:py-5 lg:pl-0 lg:pr-4 lg:after:right-0 xl:ml-10 2xl:ml-12"
                    >
                      News
                    </a>
                    <div
                      
                      className="submenu relative top-full left-0 rounded-lg bg-white transition-[top] duration-300 group-hover:opacity-100 dark:bg-black lg:invisible lg:absolute lg:top-[115%] lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full"
                    >
                      <a href="blog-grid.html" className="block rounded-sm py-[10px] text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary lg:px-4"> Blog Grid Page </a>

                      <a href="blog-details.html" className="block rounded-sm py-[10px] text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary lg:px-4"> Blog Details Page </a>

                      <a href="token-sale.html" className="block rounded-sm py-[10px] text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary lg:px-4"> Token Sale Page </a>

                      <a href="support.html" className="block rounded-sm py-[10px] text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary lg:px-4"> Support Page </a>

                      <a href="signin.html" className="block rounded-sm py-[10px] text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary lg:px-4"> Signin Page </a>

                      <a href="signup.html" className="block rounded-sm py-[10px] text-sm text-black hover:text-primary dark:text-white dark:hover:text-primary lg:px-4"> Signup Page </a>
                    </div>
                  </li>*/}
                  
                </ul>
              </nav>
            </div>
            <div className="flex justify-end pr-16 lg:pr-0 xl:pl-12 2xl:pl-20">
              <div className="mr-4 hidden" onClick={() => document.documentElement.classList.toggle('dark')}>
                <label  className="flex h-11 w-20 cursor-pointer items-center justify-center rounded-full bg-light-bg dark:bg-[#1E2763]">
                  <input type="checkbox" name="darkToggler" id="darkToggler" className="sr-only" aria-label="darkToggler" />
                  <span className="flex items-center justify-center w-8 h-8 text-white rounded-full bg-primary dark:bg-transparent dark:text-body-color">
                    <svg width="16" height="16" viewBox="0 0 16 16" className="fill-current">
                      <path
                        d="M4.50663 3.2267L3.30663 2.03337L2.36663 2.97337L3.55996 4.1667L4.50663 3.2267ZM2.66663 7.00003H0.666626V8.33337H2.66663V7.00003ZM8.66663 0.366699H7.33329V2.33337H8.66663V0.366699ZM13.6333 2.97337L12.6933 2.03337L11.5 3.2267L12.44 4.1667L13.6333 2.97337ZM11.4933 12.1067L12.6866 13.3067L13.6266 12.3667L12.4266 11.1734L11.4933 12.1067ZM13.3333 7.00003V8.33337H15.3333V7.00003H13.3333ZM7.99996 3.6667C5.79329 3.6667 3.99996 5.46003 3.99996 7.6667C3.99996 9.87337 5.79329 11.6667 7.99996 11.6667C10.2066 11.6667 12 9.87337 12 7.6667C12 5.46003 10.2066 3.6667 7.99996 3.6667ZM7.33329 14.9667H8.66663V13H7.33329V14.9667ZM2.36663 12.36L3.30663 13.3L4.49996 12.1L3.55996 11.16L2.36663 12.36Z"
                      />
                    </svg>
                  </span>
                  <span className="flex items-center justify-center w-8 h-8 bg-transparent rounded-full text-body-color-2 dark:bg-primary dark:text-white">
                    <svg width="13" height="15" viewBox="0 0 13 15" className="fill-current">
                      <path
                        d="M10.6111 12.855C11.591 12.1394 12.3151 11.1979 12.7723 10.1623C10.4824 10.4065 8.1342 9.46314 6.67948 7.47109C5.22476 5.47905 5.04093 2.95516 5.97054 0.848179C4.84491 0.968503 3.72768 1.37162 2.74781 2.08719C-0.224105 4.25747 -0.874706 8.43084 1.29558 11.4028C3.46586 14.3747 7.63923 15.0253 10.6111 12.855Z"
                      />
                    </svg>
                  </span>
                </label>
              </div>
              <div className="hidden sm:flex">
                <a
                  href="https://zellet.org"
                  className="flex items-center justify-center rounded-full border border-body-color-2 py-[9px] px-8 text-base font-semibold text-body-color-2 transition-all hover:border-primary hover:bg-primary hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary lg:px-4 xl:px-8"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
