"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function Reveal() {
  return (
    <div className="flex items-center justify-center bg-transparent h-[40rem] rounded-2xl w-full">
      <TextRevealCard
        text="Fix the money"
        revealText="Fix the world"
      >
        {/* <TextRevealCardTitle>
          Sometimes, you just need to see it.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
          This is a text reveal card. Hover over the card to reveal the hidden
          text.
        </TextRevealCardDescription> */}
      </TextRevealCard>
    </div>
  );
}
