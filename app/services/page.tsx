"use client";

import Container from "@/components/Container";
import { Timeline } from "@/components/ui/Timeline";
import React, { useEffect } from "react";
import { motion } from "motion/react";
import { FaCheckCircle } from "react-icons/fa";
import Divider from "@/components/ui/Divider";
import { usePathname } from "next/navigation";
import Background from "@/components/ui/Background";
import Link from "next/link";

type Service = {
  id: string;
  title: string;
  what: string;
  how: string[];
  why: string;
  takeaways: string[];
  callToAction: React.JSX.Element;
};

const services: Service[] = [
  {
    id: "consulting",
    title: "Software Consulting",
    what: `At NEAM Technology Solutions, we bridge the gap between your business challenges and the right technological solutions. Our consulting services are designed to optimize workflows, enhance decision-making, and future-proof your operations with innovative strategies tailored to your goals.`,
    how: [
      "Assess Your Needs: We dive deep into understanding your operations, challenges, and goals.",
      "Strategic Planning: We develop actionable roadmaps that align with your short- and long-term objectives.",
      "Customized Solutions: We help you implement cutting-edge tools and software, ensuring a seamless transition.",
      "Ongoing Optimization: Our support doesn’t stop after implementation; we fine-tune solutions to adapt to your evolving needs.",
    ],
    why: "Partnering with us ensures you’re not just investing in technology but in solutions that drive measurable impact. By aligning the right tools with your goals, you can improve efficiency, reduce costs, and stay ahead of competitors in a rapidly changing market.",
    takeaways: [
      "Avoid costly mistakes with expert insights.",
      "Simplify technology decisions with actionable strategies.",
      "Enhance productivity with smarter workflows.",
    ],
    callToAction: (
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="bg-neamred hover:bg-neampurple text-white border-neampurple font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Get Started Now
        </Link>
      </div>
    ),
  },
  {
    id: "softwaredevelopment",
    title: "Software Development",
    what: `We turn your vision into reality through custom-built software that’s secure, scalable, and tailored to meet your unique challenges. Whether you’re modernizing legacy systems or developing entirely new applications, we deliver high-quality solutions that set you apart.`,
    how: [
      "Understanding Your Goals: We start with an in-depth consultation to define your needs and identify opportunities.",
      "Agile Development Process: Our team works iteratively, delivering functional prototypes for your feedback at every stage.",
      "Quality Assurance: Rigorous testing ensures your software performs seamlessly in real-world conditions.",
      "Deployment & Beyond: We oversee a smooth launch and provide ongoing support for updates and improvements.",
    ],
    why: "Custom software empowers your business with tools that fit perfectly into your workflow, unlike generic solutions. It boosts productivity, reduces operational friction, and gives you the flexibility to innovate and grow.",
    takeaways: [
      "Drive growth with tools designed specifically for your needs.",
      "Stay secure with software built to protect sensitive data.",
      "Scale confidently as your business evolves.",
    ],
    callToAction: (
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="bg-neamred hover:bg-neampurple text-white border-neampurple font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Get Started Now
        </Link>
      </div>
    ),
  },
  {
    id: "webdevelopment",
    title: "Website Development",
    what: `Your website is more than a digital storefront—it’s your brand’s first impression. We create stunning, functional websites designed to engage your audience, improve user experience, and drive measurable results for your business.`,
    how: [
      "Discovery Session: We get to know your brand, audience, and goals.",
      "Design with Purpose: Every element is crafted to reflect your vision and ensure a seamless user experience.",
      "Technical Excellence: Using the latest tools and technologies, we build responsive, secure, and fast websites.",
      "Ongoing Optimization: From SEO to performance improvements, we ensure your site continues to deliver value.",
    ],
    why: "A great website increases your credibility, attracts more customers, and serves as a foundation for digital growth. Whether it’s driving sales or generating leads, we make sure your site works hard for you.",
    takeaways: [
      "Stand out with a modern, professional design.",
      "Convert visitors into customers with an optimized experience.",
      "Build trust and authority with a website that reflects your brand.",
    ],
    callToAction: (
      <div className="flex justify-center">
        <Link
          href="/contact"
          className="bg-neamred hover:bg-neampurple text-white border-neampurple font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-blue-100 transition"
        >
          Get Started Now
        </Link>
      </div>
    ),
  },
];

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

function Page() {
  const data: {
    title: string;
    content: React.JSX.Element;
  }[] = services.map((service) => ({
    title: service.title,
    content: <Service service={service} />,
  }));

  useEffect(() => {
    document.getElementById('anchor')?.scrollIntoView({behavior: "smooth"})
  }, [])

  return (
    <div className="bg-neutral-950 text-white">
      <Background />

      <Container>
        <Timeline data={data} />
      </Container>
    </div>
  );
}

type ServiceProps = {
  service: Service;
};

const Service = ({
  service: { id, what, how, why, takeaways, callToAction },
}: ServiceProps) => {
  const pathname = usePathname();

  return (
    <div id={id} className={`flex flex-col gap-8 ${id !== 'consulting' && 'pt-40'}`}>
      <Divider />
      {/* What we do */}
      <div className="mb-40 text-lg lg:text-xl 2xl:text-3xl">
        <motion.div
          key={pathname + "what"}
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <h3 className="ml-2 text-neamred font-bold">What we do</h3>
          <motion.div
            key={pathname + "what2"}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={listItem}
            className="p-2 relative"
          >
            <p className="">{what}</p>
          </motion.div>
        </motion.div>
      </div>
      {/* How we do it */}
      <div className="mb-40 text-lg lg:text-xl 2xl:text-3xl">
        <motion.div
          key={pathname + "how"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="ml-2 text-neamred font-bold">How We Do It</h3>
          <div className="p-2 pl-0">
            <motion.ul
              key={pathname + "how2"}
              className="space-y-4"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the container is in view
            >
              {how.map((howwedoit, index) => (
                <motion.li
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    duration: 0.3,
                  }}
                  key={index}
                  className="p-4 shadow-xl bg-gradient-to-r from-transparent to-neamblack to-90% hover:to-0% text-white rounded-xl transition-colors duration-300"
                  variants={listItem}
                >
                  {howwedoit}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
      {/* Why we do it */}
      <div className="mb-40 text-lg lg:text-xl 2xl:text-3xl">
        <motion.div
          key={pathname + "why"}
          variants={listContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
        >
          <h3 className="ml-2 text-neamred font-bold">
            Why It’s Important for Your Business
          </h3>
          <motion.div
            key={pathname + "why2"}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.2 }}
            variants={listItem}
            className="p-2"
          >
            <p className="">{why}</p>
          </motion.div>
        </motion.div>
      </div>
      {/* Takeaways */}
      <div className="mb-40 text-lg lg:text-xl 2xl:text-3xl">
        <motion.div
          key={pathname + "take"}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px 0px" }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="ml-2 text-neamred font-bold">Key Takeaways</h3>
          <div className="p-2">
            <motion.ul
              key={pathname + "take2"}
              className="space-y-4"
              variants={listContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.2 }} // Trigger when 20% of the container is in view
            >
              {takeaways.map((takeaway, index) => (
                <motion.li
                  key={takeaway + index}
                  className="p-4 rounded-md shadow-md flex gap-2 items-center"
                  variants={listItem}
                >
                  <motion.span
                    key={pathname + "take3"}
                    variants={{
                      hidden: { opacity: 0 },
                      show: { opacity: 1, transition: { duration: 2 } },
                    }}
                  >
                    <FaCheckCircle className="text-emerald-500" />
                  </motion.span>
                  <span>{takeaway}</span>
                </motion.li>
              ))}

              <motion.li
                key={"takeawaycta"}
                variants={listItem}
                className="font-bold pt-10"
              >
                {callToAction}
              </motion.li>
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
