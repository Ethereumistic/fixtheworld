import { WavyBg2 } from '@/components/WavyBg2'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'

const SlvlExp = () => {
  return (
    <div>
    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center overflow-hidden">
      <WavyBg2 />

    </div>
    <TracingBeam>


    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div>


    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div>


    <div className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      
    </div>
    </TracingBeam>
    </div>
  )
}

export default SlvlExp