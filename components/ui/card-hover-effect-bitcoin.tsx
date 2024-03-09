
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FaServer } from "react-icons/fa";
import { GiMining } from "react-icons/gi";
import { MdOutlinePriceCheck } from "react-icons/md";
import { PiShareNetworkBold } from "react-icons/pi";
import { BiAtom } from "react-icons/bi";


interface ProjectItem {
  title: string;
  description: string;
  link: string;
}

const icons = [BiAtom, FaRegMoneyBill1, FaServer , GiMining , PiShareNetworkBold, MdOutlinePriceCheck];


export const HoverEffect = ({ items, className }: { items: ProjectItem[]; className?: string }) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10",
        className
      )}
    >
      {items.map((item, idx) => {
        const Icon = icons[idx % icons.length]; // Use the index to select an icon from the array

        return (
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-bgray/[0.5] dark:bg-borange/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <Card>
              <div className="flex items-center justify-between text-2xl">
                <CardTitle>{item.title}</CardTitle>
                <Icon size={36} />
              </div>
              <CardDescription>{item.description}</CardDescription>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};



export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden border border-borange bg-borange dark:bg-black border-transparent dark:border-borange group-hover:border-bgray relative z-20",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-black dark:text-borange font-bold tracking-wide mt-4", className)}>
      {children}
    </h4>
  );
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn(
        "mt-8 text-bgray dark:text-white tracking-wide leading-relaxed text-sm",
        className
      )}
    >
      {children}
    </p>
  );
};
