"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background-5";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Level",
  },
  {
    text: "5:",
  },
  {
    text: "Tackling",
  },
  {
    text: "the",
  },
  {
    text: "complex",
  },
  {
    text: "relationship",
  },
  {
    text: "between",
  },
  {
    text: "₿itcoin",
    className: "text-borange dark:text-borange text-xl"
  },
  {
    text: "and",
  },
  {
    text: "violence",
    className: "text-red-600 dark:text-red-600 text-xl"
  },
  {
    text: ",",
  },
  {
    text: "&",
  },
  {
    text: "analyzing",
  },
  {
    text: "how",
  },
  {
    text: "global",
  },
  {
    text: "conflicts",
  },
  {
    text: "could",
  },
  {
    text: "potentially",
  },
  {
    text: "dissapear.",
  },

];


export function WavyBg5() {
  return (
    <WavyBackground className="mx-auto ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center pb-1">
      ₿itcoin <span className="text-black dark:text-white">&</span> <span className="text-red-600">War</span>
      </p>
    <TypewriterEffectSmooth words={words} className="mb-[570px]"/>
    </WavyBackground>
  );
}
