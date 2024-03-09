"use client";
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { CardHoverEffectWhatIsBitcoin } from '@/components/CardHoverEffectWhatIsBitcoin';
import { MeteorsDemo } from '@/components/MeteorsDemo';
import { WavyBg } from '@/components/WavyBg'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
import { IoLogoBitcoin } from "react-icons/io5";

const WhatIsBitcoin = () => {
  return (
    <div>
      <TracingBeam className=''>
      <div className='mt-32 translate-x-2'>
      <CardHoverEffectWhatIsBitcoin />
      </div>
    

      <div className='flex flex-row justify-center  my-32'>
        asd
      </div>
      <div className='flex flex-row justify-center  my-32'>
        asd
      </div>      <div className='flex flex-row justify-center  my-32'>
        asd
      </div>
    </TracingBeam>
    </div>
  )
}

export default WhatIsBitcoin