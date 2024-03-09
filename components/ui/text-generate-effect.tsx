// text-generate-effect.tsx
import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    controls.start({ opacity: 1 });
    const interval = setInterval(() => {
      controls.start({ opacity: 0 }).then(() => {
        setCurrentWordIndex((prevIndex) =>
          prevIndex < wordsArray.length - 1 ? prevIndex + 1 : 0
        );
        controls.start({ opacity: 1 });
      });
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, [controls, wordsArray.length]);

  const renderWords = () => {
    return (
      <motion.div>
        <motion.span
          key={wordsArray[currentWordIndex]}
          className="text-white dark:text-black"
          animate={controls}
        >
           {wordsArray[currentWordIndex]}?
        </motion.span>
      </motion.div>
    );
  };

  return (
    <div className={cn("", className)}>
      <div className="mt-0 px-4">
        <div className="dark:text-white text-black text-2xl leading-snug tracking-wide">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
