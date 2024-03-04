"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background-3";

export function WavyBg3() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center">
        Bitcoin <span className="text-white">vs</span> <span className="text-tblue">CBDCs</span>
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Level 1: Bitcoin Basics - Understand the core concept of Bitcoin in simple terms.
      </p>
    </WavyBackground>
  );
}
