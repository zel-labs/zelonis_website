import React from 'react'

export default function SecondSection() {
  return (
    
    <section id="features" className="pt-[120px] pb-16">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20" data-wow-delay="0s">
          <span className="mb-3 text-lg font-semibold uppercase text-primary sm:text-xl"> Zelonis Features </span>
          <h2 className="mb-3 text-3xl font-semibold leading-tight text-white dark:text-white md:text-[45px]">Best Features</h2>
          <p className="text-lg font-medium text-body-color-2 dark:text-body-color">Zelonis combines speed, security, and time-native innovation to deliver a next-gen blockchain experience. From ultra-low fees and validator-backed storage to community-driven governance and provable fairness — everything is built for builders, by time.</p>
        </div>

        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center" data-wow-delay="0s">
              <div className="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-full mb-7 bg-primary">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 1.66675L5 8.33341V18.3334C5 27.5834 11.4 36.2334 20 38.3334C28.6 36.2334 35 27.5834 35 18.3334V8.33341L20 1.66675ZM20 19.9834H31.6667C30.7833 26.8501 26.2 32.9667 20 34.8834V20.0001H8.33333V10.5001L20 5.31675V19.9834Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">Sustainable Security</h3>

                <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Energy-efficient, time-anchored protection.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center" data-wow-delay="0s">
              <div className="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-full mb-7 bg-primary">
                <svg className="w-12 h-12 m-auto" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"></circle>
                    <line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
                    <line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"></line>
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">Time-based Trust</h3>

                <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Every block. Every action. Time-verified.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center" data-wow-delay="0s">
              <div className="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-full mb-7 bg-primary">
                <svg className="w-12 h-12 m-auto" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                    <path d="M12 2L15 8H9L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"></path>
                    <path d="M12 22L9 16H15L12 22Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"></path>
                    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"></circle>
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">Fairness & Integrity</h3>

                <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Time-synced consensus that treats every vote and action equally.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center" data-wow-delay="0s">
              <div className="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-full mb-7 bg-primary">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 24.9999H18.3333V21.6666H5V24.9999ZM5 31.6666H18.3333V28.3333H5V31.6666ZM5 18.3333H18.3333V14.9999H5V18.3333ZM5 8.33325V11.6666H18.3333V8.33325H5ZM21.6667 8.33325H35V31.6666H21.6667V8.33325Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">Secure Storage</h3>

                <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Zelonis offers tamper-proof, time-stamped data storage backed by validators. 
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center" data-wow-delay="0s">
              <div className="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-full mb-7 bg-primary">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M35 30V31.6667C35 33.5 33.5 35 31.6667 35H8.33333C6.48333 35 5 33.5 5 31.6667V8.33333C5 6.5 6.48333 5 8.33333 5H31.6667C33.5 5 35 6.5 35 8.33333V10H20C18.15 10 16.6667 11.5 16.6667 13.3333V26.6667C16.6667 28.5 18.15 30 20 30H35ZM20 26.6667H36.6667V13.3333H20V26.6667ZM26.6667 22.5C25.2833 22.5 24.1667 21.3833 24.1667 20C24.1667 18.6167 25.2833 17.5 26.6667 17.5C28.05 17.5 29.1667 18.6167 29.1667 20C29.1667 21.3833 28.05 22.5 26.6667 22.5Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">Low Gas Fee</h3>

                <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                  Fast, efficient, and ultra-low-cost transactions on Zelonis.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="wow fadeInUp mx-auto mb-14 max-w-[370px] text-center" data-wow-delay="0s">
              <div className="flex items-center justify-center w-20 h-20 mx-auto text-white rounded-full mb-7 bg-primary">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M20 13.3333C16.3167 13.3333 13.3333 16.3167 13.3333 20C13.3333 23.6833 16.3167 26.6667 20 26.6667C23.6833 26.6667 26.6667 23.6833 26.6667 20C26.6667 16.3167 23.6833 13.3333 20 13.3333ZM8.33333 25H5V31.6667C5 33.5 6.5 35 8.33333 35H15V31.6667H8.33333V25ZM8.33333 8.33333H15V5H8.33333C6.5 5 5 6.5 5 8.33333V15H8.33333V8.33333ZM31.6667 5H25V8.33333H31.6667V15H35V8.33333C35 6.5 33.5 5 31.6667 5ZM31.6667 31.6667H25V35H31.6667C33.5 35 35 33.5 35 31.6667V25H31.6667V31.6667Z"
                    fill="white"
                  />
                </svg>
              </div>

              <div>
                <h3 className="mb-3 text-xl font-semibold text-white dark:text-white sm:text-3xl lg:text-xl xl:text-3xl">Governance Enforced</h3>

                <p className="text-base font-medium text-body-color-2 dark:text-body-color sm:text-lg lg:text-base xl:text-lg">
                  All protocol changes decided by the community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
