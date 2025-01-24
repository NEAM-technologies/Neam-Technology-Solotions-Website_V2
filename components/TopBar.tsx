import React from "react";
import { FaEnvelope, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Container from "./Container";

function TopBar() {
  return (
    <section className="flex items-center bg-neamblack text-[15px] h-[40px] px-3 text-white/60 font-[family-name:arial]">
      <Container>
        <div className="w-full flex justify-center md:justify-between">
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-neamred" />
            <a
              href="mailto:info@neamsoftware.com"
              className="hover:text-white transition duration-300 font-[500]"
            >
              info@neamtech.com
            </a>
          </div>
          <div className="hidden md:flex md:items-center">
            <a
              href="https://twitter.com/NEAM_Tech"
              className="twitter px-3 py-1 inline-block text-neampurple hover:text-white transition duration-300"
            >
              <FaTwitter className="text-neampurple" />
            </a>
            <a
              href="https://www.instagram.com/neamtech"
              className="instagram px-3 py-1 inline-block text-neampurple hover:text-white transition duration-300"
            >
              <FaInstagram className="text-neampurple" />
            </a>
            <a
              href="https://www.linkedin.com/company/neam-technology-solutions/"
              className="linkedin px-3 py-1 inline-block text-neampurple hover:text-white transition duration-300"
            >
              <FaLinkedin className="text-neampurple" />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default TopBar;
