"use client";

import Container from "@/components/Container";
import { services } from "@/lib";
import { motion } from "motion/react";
import Link from "next/link";
import { useRef } from "react";


export default function Home() {

  const missionRef = useRef<HTMLDivElement>(null);

  return (
    <div className="">
      <main className="font-[family-name:var(--font-raleway)]">
        {/* Hero section */}
        <section id="hero" className="w-full h-[calc(100vh-110px)] relative">
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white z-10">
            <Container>
              <motion.div
                initial={{
                  y: 80,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  duration: 1,
                  type: "tween",
                }}
                className="flex flex-col items-center md:items-start"
              >
                <h1 className="text-center md:text-left text-3xl md:text-[48px] font-bold uppercase md:leading-[56px] mb-2">
                  Welcome to NEAM Technologies
                </h1>
                <h2 className="text-center md:text-left text-lg md:text-[24px] text-gray-200 mb-8 font-[500]">
                  Empower your business with cutting-edge software tailored to
                  your unique needs.
                </h2>
                <div>
                  <a
                    href="#about"
                    className="font-raleway text-sm uppercase font-medium tracking-[0.5px] inline-block px-7 py-3 border-2 border-white text-white transition duration-500 hover:bg-[#cc1616] hover:border-black"
                  >
                    Get Started
                  </a>
                </div>
              </motion.div>
            </Container>
          </div>
        </section>

        {/* Mission */}
        <section ref={missionRef} id="cta" className="cta h-[336px]">
          <Container customStyling="justify-center">
              <motion.div 
                initial={{
                  y: -80,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}

                transition={{
                  duration: 0.7
                }}
                viewport={{ once: true, amount: 0.5 }} // Trigger once when 50% of the element is in view


                className="text-center">
                <h1>Our Mission</h1>
                <p className="font-bold">
                  To deliver outstanding value through innovative and reliable
                  technology solutions.
                </p>
              </motion.div>
          </Container>
        </section>

        {/* Services */}
        <section id="services" className="py-16 bg-gray-50 pb-40">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">SERVICES</h2>
            </div>

            <Container>
              <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {services.map((service, i) => (
                  <Link
                    href={service.link}
                    key={i}
                    className="group hover:bg-neamred duration-[400ms] hover:text-white py-20 px-5 bg-white shadow-md flex flex-col items-center text-center font-[family-name:Arial]"
                  >
                    <div
  
                      className="group-hover:-translate-y-2 transition-transform duration-[400ms] flex flex-col items-center justify-center gap-4 "
                    >
                      <div className="relative w-[64px]">
                        <div className="absolute group-hover:bg-[#E82D2D] w-full h-full -top-2 -left-2 bg-[#FCE5E5] z-0" />
                        <div className="group-hover:bg-white group-hover:text-neamred relative p-4 w-full h-full z-100 bg-neamred text-white text-3xl ">
                          {service.icon}
                        </div>
                      </div>
                      <h4 className="text-2xl font-semibold">
                        {service.title}
                      </h4>
                      <p className="text-sm">{service.body}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </Container>
          </div>
        </section>
      </main>
    </div>
  );
}
