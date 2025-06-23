import Image from "next/image";
import HeaderComponent from "./component/header"
import RoadmapComponent from "./component/roadmap"


export default function Home() {
  return (
    <>
    <HeaderComponent />
    <div className="fixed top-0 left-0 w-full hidden">
      <img src={"/hour-glass.png"}  alt="time-oracle" className="absolute top-[-150px] left-[-200px] rotate-[-30deg] h-[800px]"/>
    </div>
    <div className='p-20 relative z-10' id="concept">
      <div className='text-[5vh] font-semibold mt-[10vh]'>Proof of Time over Stake</div>
      <div className='pl-[10vw] pr-[10vw] text-justify text-[18px] mt-5'>
        Unlock a new era of blockchain trust: validators earn influence by continuous, reliable participation over time — not just coin ownership. This fosters a fair, secure, and sustainable network built on integrity and long-term commitment.
      </div>
      <button className='mt-[3vh] p-5 pt-3 pb-3 bg-black rounded-lg hover:bg-[#4b5563] hover:transform-[scale(1.05)] font-semibold cursor-pointer'>Get Started</button>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-3 gap-3 p-3 mt-[10vh] pt-[70px] relative z-10' id="features">
      <div className='bg-[#111] p-10 rounded-lg text-center'>
        <svg className="w-12 h-12 m-auto" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none"></circle>
          <line x1="12" y1="6" x2="12" y2="12" stroke="currentColor" strokeWidth="2" stroke-linecap="round"></line>
          <line x1="12" y1="12" x2="16" y2="14" stroke="currentColor" strokeWidth="2" stroke-linecap="round"></line>
        </svg>
        <div className='text-[24px] mt-3 font-semibold'>Time-based Trust</div>
        <div className='text-[16px] mt-10 text-justify pl-5 pr-5'>Validators build trust linearly through sustained uptime and honest participation, ensuring network reliability.</div>
      </div>
      <div className='bg-[#111] p-10 rounded-lg text-center'>
        <svg className="w-12 h-12 m-auto" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2L15 8H9L12 2Z" stroke="currentColor" strokeWidth="2" fill="none" stroke-linejoin="round"></path>
          <path d="M12 22L9 16H15L12 22Z" stroke="currentColor" strokeWidth="2" fill="none" stroke-linejoin="round"></path>
          <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" fill="none"></circle>
        </svg>
        <div className='text-[24px] mt-3 font-semibold'>Fairness & Integrity</div>
        <div className='text-[16px] mt-10 text-justify pl-5 pr-5'>Influence aligns with continuous contribution, mitigating undue power concentration by large but inactive holders.</div>
      </div>
      <div className='bg-[#111] p-10 rounded-lg text-center'>
        <svg className="w-12 h-12 m-auto" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect x="6" y="9" width="12" height="8" rx="2" ry="2" stroke="currentColor" strokeWidth="2" fill="none"></rect>
          <path d="M9 9V7a3 3 0 0 1 6 0v2" stroke="currentColor" strokeWidth="2" fill="none" stroke-linecap="round"></path>
        </svg>
        <div className='text-[24px] mt-3 font-semibold'>Sustainable Security</div>
        <div className='text-[16px] mt-10 text-justify pl-5 pr-5'>Encourages network stability by rewarding validators who consistently contribute over time, not via short-term stakes.</div>
      </div>
    </div>
    
    <RoadmapComponent />
    <div id="tokenomics" className="pt-[70px] relative z-10">
      <h3 className="text-[5vh] font-semibold mt-[3vh]">Tokenomics</h3>
      <div className="pl-[10vw] pr-[10vw]  text-[18px] mt-5 mb-[10vh]">Transparent and sustainable tokenomics designed to fuel Zelonis Blockchain’s growth and incentivize long-term engagement.</div>
    </div>
    <div className="grid grid-cols-1 p-3 md:grid-cols-3 gap-10 mt-5 pb-[70px] relative z-10">
      <div className="bg-black rounded-lg p-10">
        <h4 className="text-3xl font-semibold">500,000,000</h4>
        <h5 className="text-2xl mt-3">Pre-mint</h5>
      </div>
      <div className="bg-black rounded-lg p-10">
        <h4 className="text-3xl font-semibold">30 %</h4>
        <h5 className="text-2xl mt-3">Public Sale & Community</h5>
      </div>
      <div className="bg-black rounded-lg p-10">
        <h4 className="text-3xl font-semibold">25 %</h4>
        <h5 className="text-2xl mt-3">Ecosystem Development Fund</h5>
      </div>
      <div className="bg-black rounded-lg p-10">
        <h4 className="text-3xl font-semibold">20 %</h4>
        <h5 className="text-2xl mt-3">Team & Advisors (Vested)</h5>
      </div>
      <div className="bg-black rounded-lg p-10">
        <h4 className="text-3xl font-semibold">15%</h4>
        <h5 className="text-2xl mt-3">Partnerships & Strategic Reserves</h5>
      </div>
      <div className="bg-black rounded-lg p-10">
        <h4 className="text-3xl font-semibold">10%</h4>
        <h5 className="text-2xl mt-3">Liquidity & Exchange Reservers</h5>
      </div>
    </div>
    
    </>
  );
}
