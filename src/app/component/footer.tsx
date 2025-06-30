import React from 'react'

export default function FooterComponent() {
  return (
    <>
    <footer className="relative z-10 pt-[120px]">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-4/12">
            <div className="wow fadeInUp mb-14 max-w-[330px] xl:mb-20" data-wow-delay="0s">
              <a href="index.html" className="inline-block mb-6">
                <img src="logo.png" alt="logo" className="hidden dark:block" />
                <img src="logo.png" alt="logo" className="dark:hidden" />
              </a>
              <p className="mb-10 text-base font-medium text-body-color-2 dark:text-body-color">
                Building trust through innovative Proof of Time over Stake consensus.
              </p>
              <div className="flex items-center space-x-3">
                <a
                  href="https://discord.gg/4365DfgnMG"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                  aria-label="Discord"
                >
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.25 8.46875C7.6875 8.46875 7.28125 8.96875 7.28125 9.53125C7.28125 10.0938 7.71875 10.5938 8.25 10.5938C8.8125 10.5938 9.21875 10.125 9.21875 9.53125C9.25 8.9375 8.8125 8.46875 8.25 8.46875Z"
                      fill="currentColor"
                    />
                    <path
                      d="M11.75 10.5625C12.285 10.5625 12.7187 10.0868 12.7187 9.5C12.7187 8.9132 12.285 8.4375 11.75 8.4375C11.215 8.4375 10.7812 8.9132 10.7812 9.5C10.7812 10.0868 11.215 10.5625 11.75 10.5625Z"
                      fill="currentColor"
                    />
                    <path
                      d="M16.4687 0.3125H3.53125C2.4375 0.3125 1.53125 1.1875 1.53125 2.28125V15.375C1.53125 16.4688 2.40625 17.3438 3.5 17.3438H14.4687L13.9375 15.5938L15.1562 16.75L16.3437 17.8437L18.4062 19.6875V2.28125C18.5 1.1875 17.5625 0.3125 16.4687 0.3125ZM12.7187 12.9375C12.7187 12.9375 12.375 12.5313 12.0625 12.1563C13.3437 11.8125 13.8125 11 13.8125 11C13.4062 11.25 13.0312 11.4375 12.7187 11.5625C12.25 11.7812 11.75 11.9062 11.3125 11.9687C10.375 12.1562 9.5625 12.0937 8.8125 11.9687C8.25 11.875 7.8125 11.7188 7.40625 11.5625C7.1875 11.4687 6.90625 11.375 6.6875 11.25C6.65625 11.25 6.65625 11.2188 6.59375 11.2188C6.59375 11.2188 6.5625 11.2187 6.5625 11.1875C6.375 11.0937 6.3125 11 6.3125 11C6.3125 11 6.8125 11.7813 8.03125 12.1563C7.71875 12.5 7.375 12.9375 7.375 12.9375C5.21875 12.8438 4.4375 11.5 4.4375 11.5C4.4375 8.375 5.84375 5.875 5.84375 5.875C7.25 4.8125 8.5625 4.875 8.5625 4.875L8.65625 5C6.875 5.46875 6.09375 6.25 6.09375 6.25C6.09375 6.25 6.3125 6.125 6.65625 6C7.71875 5.5625 8.5 5.4375 8.84375 5.375C8.875 5.375 8.9375 5.375 9.03125 5.375C9.59375 5.28125 10.3125 5.28125 10.9687 5.375C11.9062 5.46875 12.875 5.78125 13.875 6.3125C13.875 6.3125 13.125 5.59375 11.4375 5.09375L11.5625 4.90625C11.5625 4.90625 12.875 4.875 14.2812 5.90625C14.2812 5.90625 15.6875 8.40625 15.6875 11.5313C15.7187 11.5 14.875 12.9063 12.7187 12.9375Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="https://x.com/ZelonisNetwork"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                  
                  aria-label="X Offical"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" height="15" width="18" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799">
                    <path fill-rule="nonzero" fill='#fff' d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/zelonisofficial"
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-light-bg text-body-color-2 hover:bg-primary hover:text-white dark:bg-dark dark:text-white dark:hover:bg-primary"
                  
                  aria-label="Telegram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" data-name="Social Media Icons" id="Social_Media_Icons" height="18" width="18" viewBox="0 0 512 512">
                    <path fill='#fff' d="M477,43.86,13.32,223.29a5.86,5.86,0,0,0-.8.38c-3.76,2.13-30,18.18,7,32.57l.38.14,110.41,35.67a6.08,6.08,0,0,0,5.09-.62L409.25,120.57a6,6,0,0,1,2.2-.83c3.81-.63,14.78-1.81,7.84,7-7.85,10-194.9,177.62-215.66,196.21a6.3,6.3,0,0,0-2.07,4.17l-9.06,108a7.08,7.08,0,0,0,2.83,5.67,6.88,6.88,0,0,0,8.17-.62l65.6-58.63a6.09,6.09,0,0,1,7.63-.39l114.45,83.1.37.25c2.77,1.71,32.69,19.12,41.33-19.76l79-375.65c.11-1.19,1.18-14.27-8.17-22-9.82-8.08-23.72-4-25.81-3.56A6,6,0,0,0,477,43.86Z" id="Telegram"/>
                  </svg>
                </a>
                
              </div>
            </div>
          </div>
<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12 justify-self-end"></div>
<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12 justify-self-end"></div>
          <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12 justify-self-end">
            <div className="wow fadeInUp mb-14 xl:mb-20" data-wow-delay="0s">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">Quick Links</h2>
              <div className="space-y-3">
                <a href="https://zelonis.org/Zelonis-Whitepaper.pdf" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Whitepaper </a>
                <a href="https://github.com/zel-labs" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Github </a>
                <a href="https://zelscope.space/" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Explorer </a>
                <a href="https://zellet.org/" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Wallet </a>
              </div>
            </div>
          </div>

          {/*<div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-4/12 xl:w-2/12">
            <div className="wow fadeInUp mb-14 xl:mb-20" data-wow-delay="0s">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">Supports</h2>
              <div className="space-y-3">
                <a href="javascript:void(0)" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Setting & Privacy </a>
                <a href="javascript:void(0)" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Help & Support </a>
                <a href="javascript:void(0)" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> Terms & Conditions </a>
                <a href="javascript:void(0)" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> 24/7 Supports </a>
                <a href="javascript:void(0)" className="block text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary"> On Point FAQ </a>
              </div>
            </div>
          </div>

          <div className="w-full px-4 md:w-1/2 lg:w-1/2 xl:w-4/12">
            <div className="wow fadeInUp mb-14 xl:mb-20" data-wow-delay="0s">
              <h2 className="mb-5 text-2xl font-bold text-black dark:text-white">News & Post</h2>
              <div className="space-y-3">
                <div className="flex">
                  <div className="mr-5 h-[75px] w-full max-w-[75px] rounded-md">
                    <img src="images/footer/blog-01.jpg" alt="post" className="object-cover object-center w-full h-full rounded-md" />
                  </div>
                  <div>
                    <a href="javascript:void(0)" className="text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary">
                      Roll Out New Features Without Hurting Loyal Users
                    </a>
                    <p className="flex items-center">
                      <span className="pr-1 text-body-color-2 dark:text-body-color">
                        <svg width="14" height="16" viewBox="0 0 14 16" className="fill-current">
                          <path
                            d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-body-color-2 dark:text-body-color"> Dec 18, 2025 </span>
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="mr-5 h-[75px] w-full max-w-[75px] rounded-md">
                    <img src="images/footer/blog-02.jpg" alt="post" className="object-cover object-center w-full h-full rounded-md" />
                  </div>
                  <div>
                    <a href="javascript:void(0)" className="text-base font-medium text-body-color-2 hover:text-primary dark:text-body-color dark:hover:text-primary">
                      Top 10 Best Cryptocurrency Blogs and Websites
                    </a>
                    <p className="flex items-center">
                      <span className="pr-1 text-body-color-2 dark:text-body-color">
                        <svg width="14" height="16" viewBox="0 0 14 16" className="fill-current">
                          <path
                            d="M3.25 8H4.75V9.5H3.25V8ZM13.75 3.5V14C13.75 14.3978 13.592 14.7794 13.3107 15.0607C13.0294 15.342 12.6478 15.5 12.25 15.5H1.75C0.9175 15.5 0.25 14.825 0.25 14V3.5C0.25 3.10218 0.408035 2.72064 0.68934 2.43934C0.970644 2.15804 1.35218 2 1.75 2H2.5V0.5H4V2H10V0.5H11.5V2H12.25C12.6478 2 13.0294 2.15804 13.3107 2.43934C13.592 2.72064 13.75 3.10218 13.75 3.5ZM1.75 5H12.25V3.5H1.75V5ZM12.25 14V6.5H1.75V14H12.25ZM9.25 9.5V8H10.75V9.5H9.25ZM6.25 9.5V8H7.75V9.5H6.25ZM3.25 11H4.75V12.5H3.25V11ZM9.25 12.5V11H10.75V12.5H9.25ZM6.25 12.5V11H7.75V12.5H6.25Z"
                          />
                        </svg>
                      </span>
                      <span className="text-sm font-medium text-body-color-2 dark:text-body-color"> Dec 18, 2025 </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>*/}
        </div>

        <div className="wow fadeInUp border-t border-[#F3F4F4] py-7 text-center dark:border-[#2D2C4A]" data-wow-delay="0s">
          <p className="text-base font-medium leading-loose text-body-color-2 dark:text-body-color">
            © 2025 Zelonis. All rights reserved. | Built by Zel-labs
          </p>
        </div>
      </div>

      <div className="absolute top-0 left-0 -z-10">
        <img src="images/shapes/footer-shape-2.svg" alt="shape" />
      </div>

      <div className="absolute bottom-0 right-0 -z-10">
        <img src="images/shapes/footer-shape-1.svg" alt="shape" />
      </div>
    </footer>
        
    </>
    
  )
}
