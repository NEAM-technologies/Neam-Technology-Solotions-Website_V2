"use client";

import Container from "@/components/Container";
import React, { useEffect, useState } from "react";
import { Timeline, TimelineEntry } from "@/components/ui/Timeline";
import { usePathname } from "next/navigation";
import Background from "@/components/ui/Background";

function Page() {
  const content = [
    {
      title: "The Vision That Sparked NEAM Technology Solutions",
      content: (
        <div className="mb-40 z-10">
          <p className="text-lg lg:text-xl 2xl:text-3xl text-center">
            NEAM Technology Solutions was founded in November 2022 by a team of
            Shaw University students and alumni with a shared dream: to leverage
            technology for positive change. Our journey began with the
            development of University Hub, a mobile app aimed at enhancing
            student life at Shaw University. The app was designed to centralize
            resources, improve communication, and streamline the campus
            experience, setting a new standard for how students connect with
            their academic community.
          </p>
        </div>
      ),
    },
    {
      title: "A Groundbreaking Achievement",
      content: (
        <div className="mb-40 relative z-10">
          <p className="text-lg lg:text-xl 2xl:text-3xl text-center">
            Our defining moment came through the{" "}
            <Highlight textContent="Main Street Entrepreneurship Accelerator Program" />
            , offered in partnership with Wake Tech Community College and Shaw
            University’s Innovation and Entrepreneurship Center. On{" "}
            <Highlight textContent="May 3, 2023" />, we became the{" "}
            <Highlight textContent="first Shaw University students to ever win" />{" "}
            the program’s prestigious business pitch competition, taking home
            the <Highlight textContent="first-place prize of $25,000" />. This
            historic win was more than just a financial milestone; it was a
            breakthrough for student entrepreneurship at Shaw University. With
            the collaboration and mentorship provided by Shaw’s{" "}
            <Highlight textContent="Innovation and Entrepreneurship Center" />,
            we demonstrated that students can transform bold ideas into viable
            businesses. Our success has inspired a new wave of entrepreneurial
            ambition within the Shaw community.
          </p>
        </div>
      ),
    },
    {
      title: "Pioneering a Legacy of Entrepreneurship",
      content: (
        <div className="mb-40">
          <p className="text-lg lg:text-xl 2xl:text-3xl text-center">
            Our journey has been about more than just building a company—it’s
            been about{" "}
            <Highlight textContent="shaping the future of entrepreneurship at Shaw University" />
            . By becoming the first students to win the pitch competition, we
            showed our peers that entrepreneurship is not just a distant dream
            but an achievable reality. Through collaboration with Shaw’s
            entrepreneurial programs, we’ve set a precedent for what’s possible
            when innovation meets determination.
            <span className="block pt-2">
              We are proud to have played a pioneering role in{" "}
              <Highlight textContent="fostering a culture of entrepreneurship" />{" "}
              at Shaw, paving the way for future student entrepreneurs to pursue
              their dreams.
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "Beyond the Competition",
      content: (
        <div className="mb-40">
          <p className="text-lg lg:text-xl 2xl:text-3xl text-center">
            Winning the competition provided the resources to establish NEAM
            Technology Solutions as a professional software development company.
            Since then, we’ve expanded our offerings to include{" "}
            <Highlight textContent="Software Consulting, Software Development, and Website Development" />
            , delivering innovative solutions to businesses across industries.
            While our roots are in academia, our vision is global—empowering
            businesses and communities through technology.
          </p>
        </div>
      ),
    },
    {
      title: "Why Our Story Matters",
      content: (
        <div className="mb-40 ">
          <p className="text-lg lg:text-xl 2xl:text-3xl text-center">
            Our history is a testament to the power of collaboration, community,
            and determination. With the support of Shaw University, we’ve proven
            that{" "}
            <Highlight textContent="innovation and entrepreneurship can thrive anywhere" />{" "}
            when given the right opportunities. Our story is not just about
            building a company; it’s about inspiring others to take risks, think
            big, and create solutions that make a difference.
          </p>
        </div>
      ),
    },
    {
      title: "Looking Ahead",
      content: (
        <div className="mb-40">
          <p className="text-lg lg:text-xl 2xl:text-3xl text-center">
            As we grow, we remain deeply connected to our Shaw University roots
            and committed to the values that inspired our start: innovation,
            collaboration, and excellence. Our journey continues with a mission
            to empower the next generation of entrepreneurs and to use
            technology to make the world a better place.
          </p>
        </div>
      ),
    },
  ];
  const pathname = usePathname();


  const data: TimelineEntry[] = content.map((con, i) => {
    return {
      title: con.title,
      content: (
       <div
          key={pathname + i}
          // variants={animationVariants}
          // initial="hidden"
          // whileInView="visible"
          // viewport={{ once: false, amount: 0.2 }}
          // transition={{
          //   duration: 0.5,
          // }}
          // className=""
        >
          {con.content}
        </div>
      ),
    };
  });

  return (
    <div className="bg-neutral-950 pb-40 text-white">
      <Background />
      {/* <div className="bg-[url(../public/galaxy2.svg)] bg-fixed bg-cover absolute left-0 top-[108.5vh] z-0 w-screen h-[50vh] opacity-30"  />
      <div className="bg-[url(../public/galaxy.svg)] bg-fixed bg-cover absolute left-0 top-[108.5vh] z-0 w-screen h-[50vh] opacity-70"  />
      <div className="bg-[url(../public/background2.png)] bg-fixed bg-cover absolute left-0 top-[158.5vh] z-0 w-screen h-[50vh] opacity-70"  />
      <div className="bg-[url(../public/touch.svg)] bg-fixed bg-cover absolute left-0 top-[208.5vh] z-0 w-screen h-[50vh] opacity-70"  /> */}

      {/* <Container>
        <h1 className="text-4xl font-bold z-10 w-1/2">
          Our History: Pioneering Entrepreneurship and Innovation
        </h1>
      </Container> */}
      <Container>
        <Timeline data={data} />
      </Container>
    </div>
  );
}

const Highlight = ({ textContent }: { textContent: string }) => {
  const [, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(textContent.split(" "));
  }, [textContent]);

  return <span className="text-neamred font-bold">{textContent}</span>;
};

export default Page;
