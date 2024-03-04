import React from "react";
import { cn } from "@/utils/cn";
import { Spotlight } from "./ui/Spotlight";

export function SpotlightPreview() {
  return (
    <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-transparent antialiased bg-grid-white/[0.02] relative overflow-hidden translate-y-10">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-borange bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Bitcoin</h1> <br /> 
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">is the new trend.</h1>
        
        <p className="mt-4 font-normal text-base text-black dark:text-neutral-300 max-w-lg text-center mx-auto">
        Discover the fundamentals of the timechain (blockchain), 
        the backbone of Bitcoin, and understand how it facilitates 
        secure and transparent transactions without the need for 
        intermediaries. Uncover the decentralized nature of Bitcoin, 
        challenge the trad-fi systems and gain unprecedented 
        control over your money.
        </p>
      </div>
    </div>
  );
}
