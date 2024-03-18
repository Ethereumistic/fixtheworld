"use client";
import { CardHoverEffectDemo } from '@/components/CardHoverEffectDemo'
import { EvervaultCardDemo } from '@/components/EvervaultCardDemo';
import { GlobeDemo } from '@/components/GlobeDemo';
import { HeroScrollDemo } from '@/components/HeroScrollDemo';
import { MeteorsDemo } from '@/components/MeteorsDemo';
import { WavyBg } from '@/components/WavyBg'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'
const FlvlBitcoin = () => {
  return (
    <div>
      <WavyBg />

    <TracingBeam className='-translate-y-48'>

    <div className=''>

      <div className='flex flex-row justify-center  '>

        <div className='-translate-x-[188px] translate-y-[10px]'>
          <CardHoverEffectDemo />
        </div>

        <div className='translate-y-[10px]'>
          <MeteorsDemo />
        </div>

      </div>
        <div className='flex justify-center -mt-56'>
        <HeroScrollDemo />
        </div>
        <GlobeDemo />
        <EvervaultCardDemo />
    </div>

    </TracingBeam>
    </div>
  )
}

export default FlvlBitcoin