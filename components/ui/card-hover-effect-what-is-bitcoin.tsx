
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { IoLogoBitcoin } from "react-icons/io5";
import { FaRegMoneyBill1 } from "react-icons/fa6";
import { FaEthereum } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";
import { GiPistolGun } from "react-icons/gi";
import { ImHourGlass } from "react-icons/im";
import { FaExchangeAlt } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";
import { IoGameControllerOutline } from "react-icons/io5";


interface ProjectItem {
  title: string;
  description: string;
  link: string;
  borderColor?: string; // Make them optional if not all projects need styles
  bgColor?: string;
  titleColor?: string;
  iconColor?: string;
  icons: string;
}

const icons = [FaExchangeAlt, GiGoldBar, IoLogoBitcoin, FaRegMoneyBill1, FaEthereum, SiWebmoney , GiPistolGun, ImHourGlass, IoGameControllerOutline];
const borderColors = ['border-[#C79A66]', 'border-yellow-500', 'border-borange', 'border-tgreen', 'border-eth', 'border-tblue', 'border-red-600', 'border-yellow-500', 'border-purple-500'];
const bgColors = ['bg-[#C79A66]', 'bg-yellow-400', 'bg-borange', 'bg-tgreen', 'bg-eth', 'bg-tblue', 'bg-red-600', 'bg-yellow-300', 'bg-purple-500'];
const titleColors = ['text-[#C79A66]', 'text-yellow-400', 'text-borange', 'text-tgreen', 'text-eth', 'text-tblue', 'text-red-600', 'text-yellow-300', 'text-purple-500'];
const iconColors = ['group-hover:text-[#C79A66]', 'group-hover:text-yellow-400', 'group-hover:text-borange', 'group-hover:text-tgreen', 'group-hover:text-eth', 'group-hover:text-tblue', 'group-hover:text-red-600', 'group-hover:text-yellow-300', 'group-hover:text-purple-500'];

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
        const borderColor = borderColors[idx % borderColors.length]; // Get a border color for each card
        const bgColor = bgColors[idx % bgColors.length]; // Get a border color for each card
        const titleColor = titleColors[idx % titleColors.length];
        const iconColor = iconColors[idx % iconColors.length];

        return (
          <Link
            href={item?.link}
            key={item?.link}
            className="relative group  block p-2 h-full w-full "
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className={`absolute inset-0 h-full w-full ${bgColor} block  rounded-3xl`}
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
            <Card className={`${borderColor}`}>
              <div className={`  flex items-center justify-between text-2xl`}>
                <CardTitle className={`${titleColor} `}>{item.title}</CardTitle>
                <motion.span
                  className={`group-hover:scale-125 group-hover:rotate-[-15deg] transition duration-300 ${iconColor}`} // Apply scaling on hover
                >
                  <Icon size={36} />
                </motion.span>
              </div>
              <CardDescription className={`${titleColor}`}>{item.description}</CardDescription>
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
        "rounded-2xl h-full w-full p-4 overflow-hidden border  bg-borange dark:bg-black border-transparent group-hover:border-bgray relative z-20",
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
    // ot tuka kontroliram cveta na title-tata
    <h4 className={cn(" font-bold tracking-wide mt-4", className)}>   
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
