import React from "react";
import Container from "./Container";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";
import { BiCaretRight } from "react-icons/bi";
import { services } from "@/lib";

function Footer() {
  return (
    <footer id="footer" className="bg-black h-fit text-white relative z-10">
      <Container customStyling={"flex !items-start !justify-start"}>
        <div className="w-full h-full flex flex-col md:pt-8">
          {/* Top section */}
          <div className="w-full h-full flex flex-col items-start justify-center md:flex-row gap-8 mb-10">
            {/* Neam Card */}
            <div className="h-fit flex flex-col items-center border-t-4 w-full md:w-[418.66px] border-neamred bg-neamblack p-8">
              <h1 className="text-4xl font-bold mb-5 text-center">
                NEAM Technologies
              </h1>
              <div className="flex space-x-1">
                <p className="font-bold">Email:</p>
                <p className="font-thin">info@neamtech.com</p>
              </div>
              <div className="flex gap-2 mt-4">
                <Link
                  href={"https://www.instagram.com/neamtech"}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-neamgray hover:bg-neampurple duration-300"
                >
                  <FaInstagram className="" />
                </Link>
                <Link
                  href={
                    "https://www.linkedin.com/company/neam-technology-solutions/"
                  }
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-neamgray hover:bg-neampurple duration-300"
                >
                  <FaLinkedinIn className="" />
                </Link>
                <Link
                  href={
                    "https://x.com/i/flow/login?redirect_after_login=%2FNEAM_Tech"
                  }
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-neamgray hover:bg-neampurple duration-300"
                >
                  <FaTwitter className="" />
                </Link>
              </div>
            </div>

            {/* Useful Links */}
            <div>
              <h1 className="text-3xl mb-2">Useful Links</h1>
              <ul className="flex flex-col gap-4">
                <li className="">
                  <Link href={"/"} className="flex items-center gap-1">
                    <BiCaretRight className="text-neamred" />
                    <p>Home</p>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/services"} scroll={false} className="flex items-center gap-1">
                    <BiCaretRight className="text-neamred" />
                    <p>Services</p>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/about"} scroll={false} className="flex items-center gap-1">
                    <BiCaretRight className="text-neamred" />
                    <p>History</p>
                  </Link>
                </li>
                <li className="">
                  <Link href={"/career"} className="flex items-center gap-1">
                    <BiCaretRight className="text-neamred" />
                    <p>Career</p>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            {
              false &&
              <div className="bg-neamblack flex-1 rounded md:ml-8 lg:ml-16 px-[20px] py-[30px]">
                <h1 className="font-bold text-3xl  text-center">Contact Us</h1>
                <form className="w-full flex flex-col gap-4">
                  {/* name */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-name" className="text-sm">
                      Name/Company Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      className="bg-black p-2 rounded border-2 border-transparent active:border-neamred focus:border-neamred active:outline-none focus:outline-none"
                    />
                  </div>
                  {/* phone */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-phone" className="text-sm">
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      className="bg-black p-2 rounded border-2 border-transparent active:border-neamred focus:border-neamred active:outline-none focus:outline-none"
                    />
                  </div>
                  {/* email */}
                  <div className="flex flex-col">
                    <label htmlFor="contact-email" className="text-sm">
                      Email *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      className="bg-black p-2 rounded border-2 border-transparent active:border-neamred focus:border-neamred active:outline-none focus:outline-none"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="contact-service" className="text-sm">
                      Select a service
                    </label>
                    <select
                      id="contact-service"
                      className="bg-black p-2 rounded border-2 border-transparent active:border-neamred focus:border-neamred active:outline-none focus:outline-none"
                    >
                      {services.map((service, i) => (
                        <option key={i} value={service.title}>
                          {service.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <button className="bg-neamred text-white px-5 py-3 rounded-md">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            }
          </div>

          {/* Bottom Section */}
          <div className="h-20 w-full flex items-center justify-center border-t border-gray-700/60">
            <h1 className="font-bold">NEAM Technology Solutions, L.L.C</h1>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
