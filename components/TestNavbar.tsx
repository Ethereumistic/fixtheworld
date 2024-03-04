"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/test-navbar";
import { cn } from "@/utils/cn";
import {
    motion,
    AnimatePresence,
    useScroll,
    useMotionValueEvent,
  } from "framer-motion";
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes"


export function TestNavbar() {

    
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-0" />

    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  
  const toggleDarkMode = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const [active, setActive] = useState<string | null>(null);

  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true); // Always show the navbar when scrolling up
      } else {
        setVisible(direction < 0); // Hide the navbar only when scrolling down
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          // y: -100,
        }}
        animate={{
          // y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit  fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2  items-center justify-center space-x-4",
          className
        )}
      >

    <div
      className={cn("fixed top-10 inset-x-0 max-w-[896px] mx-auto z-50 translate-x-2 ", className)}
    >

<div className="h-[4rem] w-full bg-black dark:bg-white  bg-grid-white/[0.2] dark:bg-grid-black/[0.2] relative flex items-center justify-center ">
<Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="What is Bitcoin?">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/1lvl-exp">I LVL Bitcoin</HoveredLink>
            <HoveredLink href="/2lvl-exp">II LVL Fiat</HoveredLink>
            <HoveredLink href="/3lvl-exp">III LVL Alts</HoveredLink>
            <HoveredLink href="/4lvl-exp">IV LVL CBDCs</HoveredLink>
            <HoveredLink href="/5lvl-exp">V LVL War</HoveredLink>
            <HoveredLink href="/6lvl-exp">VI LVL Time</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Products">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4 dark:text-white text-black">
            <ProductItem
              title="Algochurn"
              href="https://algochurn.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/partners/53-turgovishte.png"
              description="Prepare for tech interviews like never before."
            />
            <ProductItem
              title="Tailwind Master Kit"
              href="https://tailwindmasterkit.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/partners/53-turgovishte.png"
              description="Production ready Tailwind css components for your next project"
            />
            <ProductItem
              title="Moonbeam"
              href="https://gomoonbeam.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/partners/53-turgovishte.png"
              description="Never write from scratch again. Go from idea to blog in minutes."
            />
            <ProductItem
              title="Rogue"
              href="https://userogue.com"
              src="https://cdn.jsdelivr.net/gh/Ethereumistic/obshtini/partners/53-turgovishte.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
            />
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Pricing">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="Wallets">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/software">Software</HoveredLink>
            <HoveredLink href="/hardware">Hardware</HoveredLink>
            <HoveredLink href="/diy">DIY</HoveredLink>
          </div>
        </MenuItem>

        <div className="right-10 fixed">
        <Switch checked={theme === 'dark'} onClick={toggleDarkMode} />        </div>
      </Menu>
</div>

      
    </div>
    </motion.div>
    </AnimatePresence>
  );
}
