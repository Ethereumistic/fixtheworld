import { TabsDemo } from '@/components/TabsDemo';
import { TracingBeam } from '@/components/ui/tracing-beam';

const Dictionary = () => {


  return (
    // <div className='dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] size-full'>
      <TracingBeam>
    <div className="relative h-[1216px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2]  flex  justify-center">

          <TabsDemo />
        </div>

      </TracingBeam>
    //   </div>
  );
};

export default Dictionary;
