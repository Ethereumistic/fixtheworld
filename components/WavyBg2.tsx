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
    className: "text-tgreen dark:text-tgreen"
  },
  {
    text: "&",
  },
  {
    text: "decentralized",
    className: "text-borange dark:text-borange"
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
    text: "₿itcoin.",
    className: "text-borange text-xl dark:text-borange"
  },
];

export function WavyBg2() {
  return (
    <WavyBackground className=" mx-auto ">
      <p className="text-2xl md:text-4xl lg:text-7xl text-borange font-bold inter-var text-center pb-2">
      ₿itcoin <span className="text-black dark:text-white">vs</span> <span className="text-tgreen">Fiat</span>
      </p>
      {/* <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
      Level 2: Exploring the characteristics of both types of currencies centralized & decentralized and highlights the unique features of Bitcoin.
      </p> */}
      <TypewriterEffectSmooth words={words} className="mb-[567px]"/>
    </WavyBackground>
  );
}
