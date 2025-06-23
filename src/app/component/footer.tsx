import React from 'react'

export default function FooterComponent() {
  return (
    <>
        <div className='bg-[#111] w-full min-h-50  absolute left-0'>
            <div className='max-w-[1280px] m-auto relative pt-10 pl-10 pr-10'>
                <div className='grid grid-cols-4'>
                    <div className='text-left col-span-2'>
                        <h3 className='text-2xl font-semibold'>Zelonis Blockchain</h3>
                        <p>
                            Building trust through innovative Proof of Time<br/>
                            over Stake consensus.
                        </p>
                    </div>
                    <div className='col-start-4 text-left text-[14px]'>
                        <h3 className='font-semibold text-[16px]'>Resources</h3>
                        <div><a href="/Zelonis-Whitepaper.pdf">Whitepaper</a></div>
                        <div><a href="https://github.com/zel-labs">Github</a></div>
                        <div><a href="https://t.me/zelonisofficial">Community</a></div>
                        <div><a href="https://zelscope.space">Explorer</a></div>
                        <div><a href="https://zellet.org">Wallet</a></div>
                    </div>
                    
                </div>
                
            </div>
            <div className='absolute bottom-0 w-full text-center text-[14px] bg-[#333] p-3'>© 2025 Zelonis. All rights reserved. | Built by Zel-labs</div>  
        </div>
    </>
    
  )
}
