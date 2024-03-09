"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background-6";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Level",
  },
  {
    text: "6:",
  },
  {
    text: "Unveiling",
  },
  {
    text: "the",
  },
  {
    text: "fascinating",
  },
  {
    text: "connection",
  },
  {
    text: "between",
  },
  {
    text: "₿itcoin",
    className: "text-borange dark:text-borange text-xl",
  },
  {
    text: "and",
  },
  {
    text: "Time",
    className: "text-yellow-500 dark:text-yellow-400 text-xl",

  },
  {
    text: ",",
  },
  {
    text: "&",
  },
  {
    text: "how",
  },
  {
    text: "it",
  },
  {
    text: "is",
  },
  {
    text: "a",
  },
  {
    text: "hidden",
  },
  {
    text: "clock",
  },
  {
    text: ".",
  },
];

export function WavyBg6() {
  return (
    <WavyBackground className="max-w-4xl mx-auto ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center pb-1">
      ₿itcoin <span className="text-black dark:text-white">&</span> <span className="text-yellow-500 dark:text-yellow-400">Time</span>
      </p>
    <TypewriterEffectSmooth words={words} className="mb-[570px]" />
    </WavyBackground>
  );
}
