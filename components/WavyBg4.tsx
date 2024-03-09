"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background-4";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Level",
  },
  {
    text: "4:",
  },
  {
    text: "Understanding",
  },
  {
    text: "the",
  },
  {
    text: "potential",
  },
  {
    text: "impact",
  },
  {
    text: "of",
  },
  {
    text: "CBDCs",
    className: "text-tblue dark:text-tblue text-xl",
  },
  {
    text: "and",
  },
  {
    text: "the",
  },
  {
    text: "future",
  },
  {
    text: "of",
  },
  {
    text: "humanity",
    className: "text-borange dark:text-borange text-xl"
  },
  {
    text: ".",
  },
];

export function WavyBg4() {
  return (
    <WavyBackground className="max-w-4xl mx-auto ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center pb-2">
      ₿itcoin <span className="text-black dark:text-white">vs</span> <span className="text-tblue">CBDCs</span>
      </p>
      <TypewriterEffectSmooth words={words}  className="mb-[590px]"/>
    </WavyBackground>
  );
}
