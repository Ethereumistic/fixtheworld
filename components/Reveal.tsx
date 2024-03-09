"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function Reveal() {
  return (
    <div className="flex items-center justify-center bg-transparent h-[40rem] rounded-2xl w-full -mt-10">
      <TextRevealCard
        text="Fix the money"
        revealText="Fix the world"
      >
      </TextRevealCard>
    </div>
  );
}
