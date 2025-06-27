import React from 'react'

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative z-10 py-[120px]">
      <div className="container">
        <div className="wow fadeInUp mx-auto mb-16 max-w-[590px] text-center md:mb-20" data-wow-delay="0s">
          <span className="mb-3 text-lg font-semibold uppercase text-primary sm:text-xl"> ROADMAP </span>
          <h2 className="mb-3 text-3xl font-semibold leading-tight text-dark dark:text-white md:text-[45px]">The Timeline</h2>
          <p className="text-lg font-medium text-body-color-2 dark:text-body-color">From testnet to mainnet, from validator onboarding to dApp ecosystem growth — the Zelonis journey is driven by milestones that prioritize speed, decentralization, and developer-first innovation. Time is our foundation, progress is our path.</p>
        </div>

        <div className="flex justify-center -mx-4">
          <div className="w-full px-4 lg:w-10/12 xl:w-9/12">
            <div className="relative flex flex-wrap -mx-4 wow fadeInUp md:py-14 lg:py-20" data-wow-delay="0s">
              <span className="absolute top-0 left-2 hidden h-full w-[2px] bg-light-bg dark:bg-[#2D2C4A] md:left-1/2 md:block"></span>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 px-6 py-8 mb-10 rounded-lg bg-light-bg dark:bg-dark md:mr-3 md:mb-0 md:text-right lg:mr-5">
                  <span
                    className="absolute left-0 hidden w-4 h-4 -translate-y-1/2 bg-white border-4 rounded-full top-1/2 border-primary dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"
                  ></span>
                  <span className="absolute hidden w-3 h-3 rotate-45 -translate-y-1/2 -right-1 top-1/2 bg-light-bg dark:bg-dark md:block"></span>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">Q2 2025</h3>
                  <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                     Launch of Zelonis testnet<br/>
                    Deployment of PoToS consensus on testnet<br/>
                    Basic wallet integration and block explorer<br/>
                    Genesis community validator program initiation<br/>
                    Mainnet rollout with 10+ validators
                  </p>

                  
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 px-6 py-8 mb-10 rounded-lg bg-light-bg dark:bg-dark md:ml-3 md:mb-0 lg:ml-5">
                  <span
                    className="absolute left-0 hidden w-4 h-4 -translate-y-1/2 bg-white border-4 rounded-full top-1/2 border-primary dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"
                  ></span>
                  <span className="absolute hidden w-3 h-3 rotate-45 -translate-y-1/2 -left-1 top-1/2 bg-light-bg dark:bg-dark md:block"></span>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">Q4 2025</h3>
                  <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                    Mainnet rollout with 200+ validators<br/>
                    Time Oracle integration with VDF committee<br/>
                    Native token bridges to Ethereum and BNB Chain<br/>
                    Smart contract deployment and auditing tools<br/>
                    Developer grant onboarding and dev portal launch
                  </p>

                  
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 px-6 py-8 mb-10 rounded-lg bg-light-bg dark:bg-dark md:mr-3 md:mb-0 md:text-right lg:mr-5">
                  <span
                    className="absolute left-0 hidden w-4 h-4 -translate-y-1/2 bg-white border-4 rounded-full top-1/2 border-primary dark:border-body-color md:left-auto md:-right-9 md:block lg:-right-11"
                  ></span>
                  <span className="absolute hidden w-3 h-3 rotate-45 -translate-y-1/2 -right-1 top-1/2 bg-light-bg dark:bg-dark md:block"></span>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">2026</h3>
                  <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                    Launch of ZGP and startup accelerator<br/>
                    Full implementation of on-chain governance<br/>
                    DAO toolkits and multisig support<br/>
                    Cross-chain ZVM interoperability layer<br/>
                    Initial DeFi and NFT application suites
                  </p>

                  
                </div>
              </div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2"></div>
              <div className="w-full px-4 md:w-1/2">
                <div className="relative z-10 px-6 py-8 mb-10 rounded-lg bg-light-bg dark:bg-dark md:ml-3 md:mb-0 lg:ml-5">
                  <span
                    className="absolute left-0 hidden w-4 h-4 -translate-y-1/2 bg-white border-4 rounded-full top-1/2 border-primary dark:border-body-color md:right-auto md:-left-9 md:block lg:-left-11"
                  ></span>
                  <span className="absolute hidden w-3 h-3 rotate-45 -translate-y-1/2 -left-1 top-1/2 bg-light-bg dark:bg-dark md:block"></span>
                  <h3 className="mb-3 text-xl font-semibold text-black dark:text-white">2027 and beyond</h3>
                  <p className="mb-5 text-base font-medium text-body-color-2 dark:text-body-color">
                    Institutional adoption and compliance modules<br/>
                    Zero-knowledge proof integration for privacy<br/>
                    Zelonis L2 rollups for specialized applications<br/>
                    AI-enabled contracts and decentralized agents<br/>
                    Governance AI and incentive mechanism upgrades
                  </p>

                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 -z-10">
        <img src="images/shapes/timeline.svg" alt="shape" />
      </div>
      
        
    </section>
  )
}
