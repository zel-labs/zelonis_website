'use client'
import React, { useEffect, useState } from 'react'
import ReactApexChart from 'react-apexcharts'

export default function TokenomicsSection() {
  useEffect(()=>{},
 [] )
  /*const [chartData] = useState({
    series: [73, 55, 38, 20],
    chart: {
      type: "donut",
      width: 400,
    },
    colors: ["#2347B9", "#3363FF", "#8BA6FF", "#8696CA"],
    legend: {
      show: false,
    },
    stroke: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  })*/
 const [chartData] = useState({
    series: [30,25,20,15,10],
    options: {
      chart: {
        type: 'bubble',
        width: 400,
      },
      colors: ["#1691CA", "#3363FF", "#8BA6FF", "#8696CA","#9691CA"],
      legend: {
        show: false,
      },
      stroke: {
        show: false,
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  })
  return (
    <section className="relative z-10">
      <div className="container">
        <div className="rounded-lg bg-light-bg py-12 px-8 dark:bg-[#14102C] sm:py-16 sm:px-14 lg:px-8 xl:px-14">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="flex items-center justify-center mb-12 wow fadeInUp lg:mb-0" data-wow-delay="0s">
                <div id="chart">
                  <ReactApexChart
                    options={chartData.options}
                    series={chartData.series}
                    type="donut"
                    width={600}
                  />
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2">
              <div className="wow fadeInUp mb-9" data-wow-delay="0s">
                <span className="mb-3 text-lg font-bold uppercase text-primary sm:text-xl"> Tokenomics </span>
                <h2 className="mb-3 text-3xl font-bold leading-tight text-black dark:text-white md:text-[45px]">Zelonis Ecosystem Tokenomics</h2>
                <p className="text-lg font-medium text-body-color-2 dark:text-body-color">
                  Transparent and sustainable tokenomics designed to fuel Zelonis Blockchain’s growth and incentivize long-term engagement.
                </p>
              </div>
              <div className="space-y-4 wow fadeInUp" data-wow-delay="0s">
                <p className="flex">
                  <span className="w-6 h-6 mr-4 rounded-full bg-primary"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-body-color"> 30% Public Sale & Community </span>
                </p>
                <p className="flex">
                  <span className="mr-4 h-6 w-6 rounded-full bg-[#2347B9]"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-body-color"> 25% Ecosystem Development Fund </span>
                </p>
                <p className="flex">
                  <span className="mr-4 h-6 w-6 rounded-full bg-[#8BA6FF]"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-body-color"> 20% Team & Advisors (Vested)</span>
                </p>
                <p className="flex">
                  <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-body-color"> 15% Partnerships & Strategic Reserves</span>
                </p>
                <p className="flex">
                  <span className="mr-4 h-6 w-6 rounded-full bg-[#8696CA]"></span>
                  <span className="text-lg font-medium text-body-color-2 dark:text-body-color"> 10% Liqudity & Exchange Reservers</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-0 -top-32 -z-10">
        <img src="images/shapes/token-sale-shape.svg" alt="shape" />
      </div>
    </section>
  )
}
