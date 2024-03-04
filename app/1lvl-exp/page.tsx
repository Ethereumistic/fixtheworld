"use client";
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { MeteorsDemo } from '@/components/MeteorsDemo';
import { WavyBg } from '@/components/WavyBg'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
const FlvlExp = () => {
  return (
    <div>
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center overflow-hidden">
      <WavyBg />
      <div className='text-black dark:text-white'>

      </div>
    </div>
    <TracingBeam>
{/* razdelitelna liniq
<div className='text-black dark:text-white'>--------------------------------------</div> */}
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
      <div className='flex flex-row'>
        <div className='-translate-x-[188px] translate-y-[10px]'>
          <CardHoverEffectDemo />
        </div>
        <div className='translate-y-[14px]'>
          <MeteorsDemo />
        </div>
      </div>
    </div>


    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div>


    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div>
    </TracingBeam>
    </div>
  )
}

export default FlvlExp