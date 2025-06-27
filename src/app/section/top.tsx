import React from 'react'

export default function TopSection() {
  return (
    <section id="home" className="relative z-10 pt-48 pb-28 w-full">
      <div className="container">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[720px] text-center">
              <h1 className="mb-4 text-3xl font-bold leading-tight text-dark dark:text-white md:text-[45px]">Proof of Time over Stake</h1>
              <p className="mx-auto mb-4 max-w-[620px] text-lg font-medium text-body-color-2 dark:text-white">
                Unlock a new era of blockchain trust: validators earn influence by continuous, reliable participation over time — not just coin ownership. This fosters a fair, secure, and sustainable network built on integrity and long-term commitment.
              </p>

              <div className="flex flex-wrap items-center justify-center mb-10 -mx-1 sm:-mx-2">
                
                <div className="relative px-1 mt-4 group sm:px-2">
                  <span className="flex items-center justify-center w-10 h-10 mt-2 bg-white rounded-full">
                    <svg data-v-4be4723e="" height="28" width="28" viewBox="0 0 32 32" fill="#fff" xmlns="http://www.w3.org/2000/svg">
                        <path data-v-4be4723e="" fillRule="evenodd" clipRule="evenodd" d="M15.7704 1.16329L11.5566 7.81411L10.3246 13.6477L17.1006 8.63871L27.0081 17.7879L15.7704 1.16329ZM30.2623 20.9562L23.0298 4.00032L20.2321 6.34897L30.2623 20.9562Z" fill="#000"></path>
                        <path data-v-4be4723e="" fillRule="evenodd" clipRule="evenodd" d="M31.1215 25.9284L27.4868 18.9463L23.0669 14.9607L24.0019 23.349L11.1469 27.3788L31.1215 25.9284ZM25.0425 30.8171L24.4142 27.2119L6.79077 28.6206L25.0425 30.8171Z" fill="#000"></path>
                        <path data-v-4be4723e="" fillRule="evenodd" clipRule="evenodd" d="M15.5619 25.3688L7.85089 21.987L10.7984 8.8056L2.06394 26.8806L9.90994 27.2144L15.5619 25.3688ZM11.9052 4.3979L0.883484 19.1573L4.31197 20.4139L11.9052 4.3979ZM24.0043 23.349L11.1493 27.3788L31.1214 25.9259L24.0043 23.349Z" fill="#000"></path>
                        <path data-v-4be4723e="" fillRule="evenodd" clipRule="evenodd" d="M7.85085 21.987L10.7983 8.80805L2.0639 26.8806L7.85085 21.987ZM17.1006 8.63871L27.0082 17.7879L15.7705 1.16329L17.1006 8.63871Z" fill="#000"></path>
                    </svg>
                  </span>
                  <div className="absolute -top-full left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#2D2C4A] px-5 py-2 text-white opacity-0 group-hover:opacity-100">
                    <span className="absolute -bottom-1 left-1/2 h-3 w-3 -translate-x-1/2 rotate-45 bg-[#2D2C4A]"></span>
                    <span>Dex Trade</span>
                  </div>
                </div>
                
              </div>

              <a href="javascript:void(0)" className="px-8 py-3 text-base font-semibold text-white rounded-full bg-primary hover:bg-primary/90 dark:hover:bg-primary/90"> Buy Coin from IEO </a>
            </div>
          </div>
        </div>
        <div className="wow fadeInUp border-y border-[#F3F4F4] pt-10 dark:border-[#2D2C4A] mt-30" data-wow-delay="0s"></div>
        <div className="wow fadeInUp border-y border-[#F3F4F4] pt-10 dark:border-[#2D2C4A]" data-wow-delay="0s"></div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20" ></div>
      <img src="images/shapes/hero-shape-1.svg" alt="" className="absolute top-0 left-0 -z-10" />
      <img src="images/shapes/hero-shape-2.svg" alt="" className="absolute top-0 right-0 -z-10" />
      
    </section>
  )
}
