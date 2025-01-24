"use client";

import { AnimatePresence, motion } from "motion/react";
import React, { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

function ScrollToTop() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);

  useEffect(() => {
    const scrollWatch = () => {
      setIsAtTop(window.scrollY < 200);
    };

    document.addEventListener("scroll", scrollWatch);

    return () => document.removeEventListener("scroll", scrollWatch);
  }, []);

  const handleScrollToTop = () => {
    const anchor = document.getElementById("anchor");
    anchor?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {!isAtTop && (
        <motion.button
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 0.3,
          }}
          onClick={handleScrollToTop}
          className="z-50 fixed right-4 bottom-4 flex items-center justify-center w-10 h-10 bg-neamred text-white"
        >
          <FaArrowUp />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTop;
