import { Reveal } from "@/components/Reveal";
import { SpotlightPreview } from "@/components/SpotlightPreview";
import Image from "next/image";

export default function Home() {
  return (
<>
    <div>

    {/* 1st grid */}
    <div className="h-[1088px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      <div>
        <SpotlightPreview />
        <div className="-translate-y-36">
          <Reveal />
        </div>
      </div>
    </div>

    {/* 2nd grid */}
    <div className="h-[1088px] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex justify-center">
      


    </div>

    </div>
</>
  );
}
