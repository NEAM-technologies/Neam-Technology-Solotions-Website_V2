import React from "react";
import {motion} from 'motion/react';

function Divider() {
  return (
    <motion.div
      initial={{
        width: 0,
      }}
      whileInView={{
        width: "100%",
      }}
      transition={{
        duration: 1,
        ease: "easeInOut",
        // stiffness: 20
      }}
      viewport={{ once: false, amount: 0.5 }}
      className="h-1 bg-gradient-to-r from-transparent via-white to-transparent"
    />
  );
}

export default Divider;
