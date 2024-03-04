"use client";
import React from "react";
import { WavyBackground } from "./ui/wavy-background-2";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";


const words = [
  {
    text: "Level",
  },
  {
    text: "2:",
  },
  {
    text: "Exploring",
  },
  {
    text: "the",
  },
  {
    text: "characteristics",
  },
  {
    text: "of",
  },
  {
    text: "both",
  },
  {
    text: "types",
  },
  {
    text: "of",
  },
  {
    text: "currencies",
  },
  {
    text: "centralized",
    className: "text-tgreen"
  },
  {
    text: "&",
  },
  {
    text: "decentralized",
    className: "text-borange"
  },
  {
    text: "and",
  },
  {
    text: "highlights",
  },
  {
    text: "the",
  },
  {
    text: "unique",
  },
  {
    text: "features",
  },
  {
    text: "of",
  },
  {
    text: "Bitcoin.",
    className: "text-borange text-xl"
  },
];

export function WavyBg2() {
  return (
    <WavyBackground className=" mx-auto pb-40 ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center">
        Bitcoin <span className="text-white">vs</span> <span className="text-tgreen">Fiat</span>
      </p>
      {/* <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Level 2: Exploring the characteristics of both types of currencies centralized & decentralized and highlights the unique features of Bitcoin.
      </p> */}
      <TypewriterEffectSmooth words={words} />
    </WavyBackground>
  );
}
