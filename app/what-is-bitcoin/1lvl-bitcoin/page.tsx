"use client";
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { MeteorsDemo } from '@/components/MeteorsDemo';
import { WavyBg } from '@/components/WavyBg'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
const FlvlBitcoin = () => {
  return (
    <div>
    {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden"> */}
      <WavyBg />

      {/* </div> */}
    <TracingBeam className='-translate-y-48'>

      <div className='flex flex-row justify-center  '>
        <div className='-translate-x-[188px] translate-y-[10px]'>
          <CardHoverEffectDemo />
        </div>
        <div className='translate-y-[10px]'>
          <MeteorsDemo />
        </div>
      </div>
    {/* </div> */}


    {/* <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div>


    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div> */}
    </TracingBeam>
    </div>
  )
}

export default FlvlBitcoin