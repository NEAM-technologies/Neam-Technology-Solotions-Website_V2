"use client";

import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { FaCaretDown } from "react-icons/fa6";
import { AnimatePresence, motion } from "motion/react";
import { usePathname } from "next/navigation";
import { services } from "@/lib";
import { IoCloseOutline } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import Link from "next/link";

function Header() {
  const [servicesDropdownOpen, setServicesDropdownOpen] =
    useState<boolean>(false);
  const [smallNavOpen, setSmallNavOpen] = useState<boolean>(false);

  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    document.body.style.overflow = smallNavOpen ? 'hidden' : '' // prevent scrolling when small navbar open
  }, [smallNavOpen])

  useEffect(() => {
    const animateWhenStick = () => {
      const pos = window.scrollY;
      if (pos > 40) {
        headerRef.current?.classList.add('bg-neamblack');
      } else {
        headerRef.current?.classList.remove('bg-neamblack');
      }
    }

    document.addEventListener('scroll', animateWhenStick);
    return () => document.removeEventListener('scroll', animateWhenStick);
  }, [headerRef])

  const closeSmallNav = () => {
    setSmallNavOpen(false);
  }

  return (
    <header
      ref={headerRef}
      id="header"
      className="sticky top-0 text-white flex items-center bg-[rgba(25,25,25,0.95)] transition-all duration-[0.5s] z-[997] h-[70px]"
    >
      <Container customStyling="">
        <div className="h-full w-full flex items-center justify-between">
          <div className="w-full flex items-center justify-between">
            <h1 className="flex items-center text-[1.875rem] font-bold tracking-[2px] uppercase m-0 p-0 leading-none">
              <Link onClick={closeSmallNav}  href="/" className="">
                NEAM TECH
              </Link>
            </h1>
            <button onClick={() => setSmallNavOpen(true)} className="md:hidden">
              <RxHamburgerMenu className="text-[1.875rem]" />
            </button>
          </div>

          {smallNavOpen ? (
            <nav className="block md:hidden fixed left-0 top-0 z-100 h-screen w-full p-4 pt-12 bg-black">
              <button
                onClick={() => setSmallNavOpen(false)}
                className="absolute top-3 right-3 text-2xl text-neamred"
              >
                <IoCloseOutline />
              </button>
              <div className="bg-white h-full w-full p-8">
                <ul className="h-full flex flex-col gap-6 md:gap-1 text-black">
                  <li
                    className={`w-full md:w-auto flex hover:cursor-pointer duration-500 ${
                      pathname === "/" && "text-neamred"
                    }`}
                  >
                    <Link onClick={closeSmallNav}  href="/" className="w-full">
                      Home
                    </Link>
                  </li>
                  <li
                    className={`w-full relative hover:cursor-pointer hover:text-neamred duration-500 ${
                      (pathname === "/services" || servicesDropdownOpen) && "text-neamred"
                    }`}
                  >
                    <button onClick={() => setServicesDropdownOpen(state => !state)} className={`w-full flex items-center gap-1`}>
                      <span>Services</span>

                      <FaCaretDown
                        className={`${
                          servicesDropdownOpen && "rotate-180 duration-300"
                        } duration-300`}
                      />
                    </button>
                    <AnimatePresence>
                      {servicesDropdownOpen && (
                        <motion.div
                          initial={{
                            y: -20,
                            opacity: 0,
                          }}
                          animate={{
                            y: 0,
                            opacity: 1
                          }}
                          exit={{
                            y: -20,
                            opacity: 0
                          }}
                          transition={{
                            duration: 0.3,
                            type: 'spring'
                          }}
                          className="relative -z-0 w-fit text-black"
                        >
                          <ul className="w-[200px] h-full py-2">
                            {services.map((service, i) => (
                              <li
                                key={i}
                                className="hover:bg-neamred hover:text-white px-4 py-4 duration-300"
                              >
                                <Link onClick={closeSmallNav}  href={service.link === '/services#consulting' ? '/services' : service.link} className="">
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                  <li
                    className={`w-full flex hover:text-neamred duration-500 ${
                      pathname === "/contact" && "text-neamred"
                    }`}
                  >
                    <Link onClick={closeSmallNav}  href="/contact" className="w-full">Contact</Link>
                  </li>
                  <li
                    className={`w-full flex hover:text-neamred duration-500 ${
                      pathname === "/about" && "text-neamred"
                    }`}
                  >
                    <Link onClick={closeSmallNav}  href="/about" className="w-full">History</Link>
                  </li>
                  <li
                    className={`w-full flex hover:text-neamred duration-500 ${
                      pathname === "/career" && "text-neamred"
                    }`}
                  >
                    <Link onClick={closeSmallNav}  href="/career" className="w-full">Career</Link>
                  </li>
                </ul>
              </div>
            </nav>
          ) : (
            <nav
              id="navbar"
              className="hidden md:flex h-full font-normal font-[family-name:arial] text-sm"
            >
              <ul className="h-full flex flex-col md:flex-row items-center space-x-1">
                <li
                  className={`h-full flex items-center hover:cursor-pointer hover:bg-neamred duration-500 ${
                    pathname === "/" && "bg-neamred"
                  }`}
                >
                  <Link onClick={closeSmallNav}  href="/" className="px-4 py-6">
                    Home
                  </Link>
                </li>
                <li
                  className={`relative h-full flex items-center hover:cursor-pointer hover:bg-neamred duration-500 ${pathname === "/services" && "bg-neamred"}`}

                  onMouseEnter={() =>
                    setServicesDropdownOpen(true)
                  }
                  onMouseLeave={() =>
                    setServicesDropdownOpen(false)
                  }
                >
                  <Link onClick={closeSmallNav}  href="/services" className="flex items-center gap-1 px-4 py-6">
                    <span>Services</span>

                    <FaCaretDown
                      className={`${
                        servicesDropdownOpen && "rotate-180 duration-300"
                      } duration-300`}
                    />
                  </Link>
                  <AnimatePresence>
                    {servicesDropdownOpen && (
                      <motion.div
                        animate={{
                          top: "100%",
                        }}
                        exit={{
                          y: 20,
                          opacity: 0,
                        }}
                        transition={{
                          duration: 0.3,
                        }}
                        className="absolute w-fit top-[120%] left-0 text-black"
                      >
                        <ul className="flex flex-col bg-white w-[200px] h-full py-2">
                          {services.map((service, i) => (
                            <li
                              key={i}
                              className="w-full h-full hover:cursor-pointer"
                            >
                              <Link onClick={closeSmallNav}  href={service.link === '/services#consulting' ? '/services' : service.link} className="block hover:cursor-pointer hover:bg-neamred hover:text-white w-full h-full duration-300 px-4 py-4">
                                {service.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
                <li
                  className={`h-full flex items-center hover:cursor-pointer hover:bg-neamred duration-500 ${
                    pathname === "/contact" && "bg-neamred"
                  }`}
                >
                  <Link onClick={closeSmallNav}  href="/contact" className="px-4 py-6">Contact</Link>
                </li>
                <li
                  className={`h-full flex items-center hover:cursor-pointer hover:bg-neamred duration-500 ${
                    pathname === "/about" && "bg-neamred"
                  }`}
                >
                  <Link onClick={closeSmallNav}  href="/about" className="px-4 py-6">History</Link>
                </li>
                <li
                  className={`h-full flex items-center hover:cursor-pointer hover:bg-neamred duration-500 ${
                    pathname === "/career" && "bg-neamred"
                  }`}
                >
                  <Link onClick={closeSmallNav}  href="/career"  className="px-4 py-6">Career</Link>
                </li>
              </ul>
            </nav>
          )}
        </div>
      </Container>
    </header>
  );
}

export default Header;
