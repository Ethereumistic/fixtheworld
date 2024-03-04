"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background-3";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const words = [
  {
    text: "Level",
  },
  {
    text: "III:",
  },
  {
    text: "Delving",
  },
  {
    text: "into",
  },
  {
    text: "the",
  },
  {
    text: "world",
  },
  {
    text: "of",
  },
  {
    text: "altcoins",
  },
  {
    text: "and",
  },
  {
    text: "comparing",
  },
  {
    text: "them",
    className: "text-deth dark:text-eth"
  },
  {
    text: "to",
  },
  {
    text: "Bitcoin",
    className: "text-borange dark:text-borange"
  },
  {
    text: ".",
  },

];

export function WavyBg3() {
  return (
    <WavyBackground className=" mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center">
        Bitcoin <span className="text-black dark:text-white">vs</span> <span className="text-deth dark:text-eth">ALTs</span>
      </p>
      {/* <p className="text-base md:text-lg mt-4 text-black dark:text-white font-normal inter-var text-center">
      Level 1: Bitcoin Basics - Understand the core concept of Bitcoin in simple terms.
      </p> */}
      <TypewriterEffectSmooth words={words} />

    </WavyBackground>
  );
}
