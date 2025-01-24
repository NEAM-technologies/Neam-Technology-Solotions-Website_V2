"use client";

import JobDescriptions from "@/components/career/Job";
import Container from "@/components/Container";
import Background from "@/components/ui/Background";
import React from "react";
import { RiNumber1, RiNumber2 } from "react-icons/ri";

function Page() {
  const sections: Section[] = [
    {
      heading: "Why Work With Us?",
      subtext:
        "At NEAM Technology Solutions, we’re more than just a technology company—we’re a team of passionate innovators driven by a shared mission to empower businesses and communities through software. Here’s what makes us different:",
      content: [
        {
          title: "A Culture of Collaboration",
          body: "At NEAM, we thrive on teamwork. You’ll work alongside talented professionals who value your input, challenge your ideas, and celebrate your successes. We believe that the best solutions come from diverse perspectives working together toward a common goal.",
        },
        {
          title: "Ownership of Impactful Work",
          body: "From day one, you’ll have opportunities to work on projects that matter. Whether it’s building software for small businesses or creating systems that transform industries, your contributions will make a tangible difference.",
        },
        {
          title: "Room to Grow",
          body: "We’re committed to your professional development. With access to mentorship, learning resources, and challenging projects, you’ll have everything you need to sharpen your skills and advance your career.",
        },
        {
          title: "Innovation Without Limits",
          body: "Creativity drives everything we do. At NEAM, we encourage bold ideas and embrace out-of-the-box thinking to push the boundaries of what technology can achieve.",
        },
      ],
      aside:
        "We’re not just offering you a job—we’re inviting you to be part of a journey to shape the future of technology and entrepreneurship.",
    },
    {
      heading: "Our Commitment to You",
      subtext:
        "At NEAM Technology Solutions, we are deeply committed to creating an environment where you can thrive. Here’s what you can expect as a valued member of our team:",
      content: [
        {
          title: "Support for Your Success",
          body: "We prioritize your growth and well-being. From mentorship programs to a supportive team culture, we provide the tools and encouragement you need to succeed.",
        },
        {
          title: "Flexibility That Fits Your Life",
          body: "We understand that life is more than work. That’s why we offer flexible schedules and remote work opportunities to help you balance your career with your personal life.",
        },
        {
          title: "Diversity and Inclusion",
          body: "We celebrate individuality and foster an inclusive culture where everyone feels respected, heard, and empowered to contribute. Your unique experiences and perspectives enrich our team and drive our success.",
        },
        {
          title: "A Shared Purpose",
          body: "At NEAM, your work will have meaning. Together, we’re creating software that solves real-world problems and helps businesses achieve their goals. Every project is a chance to make a difference.",
        },
      ],
      aside:
        "We believe that when you invest in people, they invest in the mission. At NEAM, you’re not just joining a company—you’re joining a community of innovators, problem-solvers, and changemakers who are shaping the future, one solution at a time.",
    },
  ];

  const positions = [
    "Software Developer",
    "Project Manager",
    "Sales Representative",
  ];

  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    elem?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen pt-20 pb-40 bg-neamblack text-white">
      <Background />
      <div className="relative">
        <Container>
          <div>
            <h1 className="text-4xl font-bold">Careers at NEAM Tech</h1>
            <div className="mt-20 text-lg lg:text-xl 2xl:text-3xl w-full lg:w-2/3">
              <div className="flex flex-col gap-12">
                {/* Join Our Team */}
                <section>
                  <h2 className="font-bold text-neamred">Join Our Team</h2>
                  <p>
                    At NEAM Technology Solutions, we’re always looking for
                    talented individuals who are passionate about technology and
                    innovation. Whether you’re a problem-solver, a creative
                    thinker, or a tech enthusiast, there’s a place for you here.
                  </p>
                </section>

                {/* Dynamic Sections */}
                {sections.map((section, i) => (
                  <Section key={i} {...section} />
                ))}

                {/* Explore Opportunities */}
                <section>
                  <h2 className="font-bold text-neamred">
                    Explore Opportunities
                  </h2>
                  <ul className="list-disc list-inside my-4">
                    {positions.map((position, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span>{position}</span>
                        <span>
                          {"["}
                          <button
                            onClick={() => scrollToSection(`${position}`)}
                            className="text-lg hover:text-neampurple"
                          >
                            See Full Job Description
                          </button>
                          {"]"}
                        </span>
                      </li>
                    ))}
                  </ul>
                </section>

                {/* How to Apply */}
                <section>
                  <h2 className="font-bold text-neamred">How to Apply</h2>
                  <ul className="my-4 flex flex-col gap-2">
                    <li className="flex flex-row gap-4">
                      <div className="p-2 w-fit h-fit bg-black rounded-full">
                        <RiNumber1 className="text-base" />
                      </div>
                      <p className="">
                        Review the full job description by clicking on a position
                        above.
                      </p>
                    </li>
                    <li className="flex flex-row gap-4">
                      <div className="p-2 w-fit h-fit bg-black rounded-full">
                        <RiNumber2 className="text-base" />
                      </div>
                      <p className="">
                        Submit your resume and cover letter to
                        <a
                          href="mailto:info@neamsoftware.com"
                          className="hover:text-neampurple underline underline-offset-4"
                        >
                          {" "}
                          info@neamsoftware.com
                        </a>
                        , specifying the position in the subject line.
                      </p>
                    </li>
                  </ul>
                </section>

                {/* Jobs */}
                <JobDescriptions />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}

type ListItemProps = {
  title: string;
  body: string;
};

const ListItem = ({ title, body }: ListItemProps) => (
  <li>
    <span className="font-bold">{title}: </span>
    <span>{body}</span>
  </li>
);

type Section = {
  heading: string;
  subtext: string;
  content: ListItemProps[];
  aside: string;
};

const Section = ({ heading, subtext, content, aside }: Section) => (
  <div>
    <h2 className="font-bold text-neamred">{heading}</h2>
    <p>{subtext}</p>
    <ul className="list-disc my-4">
      {content.map((item, i) => (
        <ListItem key={i} {...item} />
      ))}
    </ul>
    <p className="italic text-sm font-bold border-l-2 border-l-emerald-400 pl-2 bg-gradient-to-r from-emerald-300/20 to-transparent">
      {aside}
    </p>
  </div>
);

export default Page;
