import React from 'react'

export default function FooterComponent() {
  return (
    <>
        <div className='bg-[#111] w-full h-50  absolute left-0'>
            <div className='max-w-[1280px] m-auto relative pt-10 pl-10 pr-10'>
                <div className='grid grid-cols-4'>
                    <div className='text-left col-span-2'>
                        <h3 className='text-2xl font-semibold'>Zelonis Blockchain</h3>
                        <p>
                            Building trust through innovative Proof of Time<br/>
                            over Stake consensus.
                        </p>
                    </div>
                    <div className='col-start-4 text-left'>
                        <h3>Resources</h3>
                        <div><a href="">Whitepaper</a></div>
                        <div><a href="">Github</a></div>
                        <div><a href="">Community</a></div>
                    </div>
                    
                </div>
                
            </div>
            <div className='absolute bottom-0 w-full text-center text-[14px]'>© 2025 Zelonis. All rights reserved. | Built by Zel-labs</div>  
        </div>
    </>
    
  )
}
