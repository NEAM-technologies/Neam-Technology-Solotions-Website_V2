"use client";

import React from "react";
import { motion } from "motion/react";

const services = [
  "Assess Your Needs: We dive deep into understanding your operations, challenges, and goals.",
  "Strategic Planning: We develop actionable roadmaps that align with your short- and long-term objectives.",
  "Customized Solutions: We help you implement cutting-edge tools and software, ensuring a seamless transition.",
  "Ongoing Optimization: Our support doesn’t stop after implementation; we fine-tune solutions to adapt to your evolving needs.",
];

function Consulting() {
  const listContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger delay between items
        delayChildren: 0.2, // Delay before starting animation
      },
    },
  };

  const listItem = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="h-full min-h-screen w-full pb-[1000px]">
      {/* left body section */}
      <div className="w-3/5">
        {/* <Spotlight
          className="fixed top-1/2 left-1/3 w-[40%] h-[40%]"
          fill="white"
        /> */}
        {/* What we do */}
        <div className="snap-center relative h-[calc(100vh-190px)] flex items-center justify-center">
          {/* <Spotlight
            className="fixed -top-40 left-0 md:left-60 md:-top-10 h-[169%] w-[138%] lg:w-[104%] lg:h-[100%]"
            fill="white"
          /> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px 0px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="ml-2 text-neampurple font-bold">What We Do</h3>
            <div className="shadow-xl p-2">
              <p className="text-2xl">
                At NEAM Technology Solutions, we bridge the gap between your
                business challenges and the right technological solutions. Our
                consulting services are designed to optimize workflows, enhance
                decision-making, and future-proof your operations with
                innovative strategies tailored to your goals.
              </p>
            </div>
          </motion.div>
        </div>

        {/* How we do it */}
        <div className="snap-center relative h-[calc(100vh-190px)] flex items-center justify-center">
          {/* <Spotlight
            className="-top-40 left-0 md:left-60 md:-top-10 h-[169%] w-[138%] lg:w-[104%] lg:h-[100%]"
            fill="white"
          /> */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-100px 0px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="ml-2 text-neampurple font-bold">How We Do It</h3>
            <div className="shadow-xl p-2">
              <motion.ul
                className="space-y-4"
                variants={listContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the container is in view
              >
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    className="p-4 rounded-md shadow-md"
                    variants={listItem}
                  >
                    {service}
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          </motion.div>
        </div>
      </div>

      {/* right service title fixed section */}
      <div className="w-2/5 h-[calc(100vh-70px)] right-0 top-[70px] border-l border-gray-800 fixed flex items-center ">
        <h1 className="w-fit text-2xl font-bold bg-black text-white p-2">
          Software Consulting
        </h1>
      </div>
    </div>
  );
}

export default Consulting;
