import { TabsDemo } from '@/components/TabsDemo'
import { TracingBeam } from '@/components/ui/tracing-beam'
import React from 'react'

const Dictionary = () => {
  return (
    <div className=''>
            <TracingBeam>

    <div className="h-[100rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex  justify-center">
      <TabsDemo />
    </div>


    
    </TracingBeam>

    </div>
  )
}

export default Dictionary