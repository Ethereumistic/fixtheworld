"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function WavyBg() {

  const words = [
    {
      text: "Level",
    },
    {
      text: "1:",
    },
    {
      text: "₿itcoin",
      className: "text-borange dark:text-borange text-xl"
    },
    {
      text: "Basics",
    },
    {
      text: "-",
    },
    {
      text: "Understand",
    },
    {
      text: "the",
    },
    {
      text: "core",
    },
    {
      text: "concepts",
    },
    {
      text: "of",
    },
    {
      text: "₿itcoin",
      className: "text-borange dark:text-borange text-xl",
    },
    {
      text: "in",
    },
    {
      text: "simple",
    },
    {
      text: "terms.",
    },
  ]
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center">
        Bitcoin 
      </p>
      {/* <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Level 1: Bitcoin Basics - Understand the core concept of Bitcoin in simple terms.
      </p> */}
      <TypewriterEffectSmooth words={words} />
    </WavyBackground>
  );
}
