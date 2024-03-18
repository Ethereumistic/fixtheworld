import React from "react";
import { EvervaultCard, Icon } from "./ui/evervault-card";

export function EvervaultCardDemo() {
  return (
    <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start max-w-[30rem] mx-auto p-4 relative h-[30rem] translate-y-[7.5px] -translate-x-[7.5px]">
      <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
      <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />

      <EvervaultCard text="Cryptography" />

      <h2 className="dark:text-white text-black mt-4 text-sm font-light text-center">
        Hover over this card to reveal an awesome effect. Running out of copy
        here.
      </h2>

    </div>
  );
}
