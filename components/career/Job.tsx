import React from "react";
import Divider from "../ui/Divider";
import { motion } from "motion/react";

type Job = {
  title: string;
  about: string;
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
  applyInstructions: React.JSX.Element;
};
const JobDescription = ({
  title,
  about,
  responsibilities,
  qualifications,
  benefits,
  applyInstructions,
}: Job) => {
  const scrollToSection = (sectionId: string) => {
    const elem = document.getElementById(sectionId);
    elem?.scrollIntoView({behavior: 'smooth', block: 'center'});
  }

  return (
    <>
      <div id={title} className="h-16 w-full" />
      <Divider />
      <div className="p-6 rounded-lg bg-black">
        <div className="mb-4 flex justify-between">
          <h2 className="font-bold text-neamred">{title}</h2>
          <button onClick={() => scrollToSection(`${title}-how-to-apply`)} className="text-sm text-white bg-neampurple px-4 py-2 rounded-full">
            Apply
          </button>
        </div>
        <div className="flex flex-col gap-8 mt-8">
          <section className="">
            <h3 className="text-lg font-bold mb-2">
              About NEAM Technology Solutions
            </h3>
            <p className="">{about}</p>
          </section>

          <section className="">
            <h3 className="text-lg font-bold  mb-2">Key Responsibilities</h3>
            <ul className="space-y-6">
              {responsibilities.map((responsibility, index) => (
                <li key={index} className="flex gap-2">
                  <Bullet />
                  <p>{responsibility}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="">
            <h3 className="text-lg font-bold  mb-2">Qualifications</h3>
            <ul className="space-y-6">
              {qualifications.map((qualification, index) => (
                <li key={index} className="flex gap-2">
                  <Bullet />
                  <p>{qualification}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="">
            <h3 className="text-lg font-bold  mb-2">What We Offer</h3>
            <ul className="list-disc list-inside  space-y-2">
              {benefits.map((benefit, index) => (
                <li key={index} className="flex gap-2">
                  <Bullet />
                  <p>{benefit}</p>
                </li>
              ))}
            </ul>
          </section>

          <section className="">
            <h3 id={`${title}-how-to-apply`} className="text-lg font-bold  mb-2 text-neamred">How to Apply</h3>
            {applyInstructions}
          </section>
        </div>
      </div>
    </>
  );
};

const JobDescriptions = () => {
  const jobs = [
    {
      title: "Software Developer",
      about:
        "At NEAM Technology Solutions, we empower businesses and communities through cutting-edge software solutions. As a Software Developer, you’ll have the opportunity to work on innovative projects that tackle real-world challenges while advancing your skills in a collaborative, fast-paced environment. Your contributions will directly impact our clients and drive the development of scalable, robust applications.",
      responsibilities: [
        "Design and Develop: Create, deploy, and maintain high-quality, scalable web and software solutions that align with client requirements and business objectives, utilizing technologies like React, Next.js, and Firebase.",
        "Collaborate: Work with cross-functional teams, including designers, product managers, and other developers, to ensure seamless integration of software components and a cohesive user experience.",
        "Code with Excellence: Write clean, efficient, and maintainable code using modern web development frameworks and libraries, such as React, Next.js, and Firebase, ensuring responsiveness and performance optimization.",
        "Test and Debug: Conduct thorough testing and debugging to ensure software reliability and optimal performance across browsers and devices.",
        "Research and Innovate: Stay updated on emerging web technologies and frameworks, integrating new tools and techniques to enhance the quality and efficiency of current and future projects.",
        "Document and Communicate: Maintain clear and comprehensive documentation of development processes, technical specifications, and project updates, ensuring transparency and knowledge sharing.",
        "Code Reviews: Participate actively in code reviews to uphold best practices and foster a culture of continuous learning and improvement within the team.",
      ],
      qualifications: [
        "Educational Background: Bachelor’s degree in Computer Science, Software Engineering, or a related field, or equivalent hands-on experience in web development.",
        "Proficiency in Web Development: Experience with modern JavaScript frameworks and libraries, including React and Next.js. Strong knowledge of Firebase for backend integration, real-time databases, and authentication workflows.",
        "Expertise in Programming: Solid understanding of programming languages such as Python for backend logic and API development.",
        "Database Knowledge: Familiarity with database systems, including both SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., Firebase Realtime Database, MongoDB).",
        "Cloud Platform Experience: Knowledge of cloud platforms, such as AWS, Azure, or Google Cloud, to deploy and scale applications.",
        "Problem-Solving Skills: Demonstrated ability to analyze complex requirements and implement effective solutions.",
        "Team Collaboration: Excellent communication and collaboration abilities, with a proactive approach to challenges and team goals.",
        "Agile Methodologies: Familiarity with Agile/Scrum practices to ensure efficient project management and delivery.",
        "Additional Tools and Libraries: Experience with libraries and tools for modern web development, such as Tailwind CSS, Zustand, Framer Motion, and emailjs, is a plus.",
      ],
      benefits: [
        "Competitive salary and performance-based bonuses.",
        "Opportunities for ongoing professional development and certifications.",
        "Flexible work arrangements, including remote options.",
        "A supportive, inclusive workplace culture that values innovation and teamwork.",
      ],
      applyInstructions:
      <p>
        Send your resume and cover letter to <a href="mailto:info@neamsoftware.com" className="underline underline-offset-4 hover:text-neampurple duration-300"> info@neamsoftware.com</a>, with &apos;Software Developer&apos; in the subject line. Let&apos;s build the future of technology together!
      </p>
    },
    {
      title: "Project Manager",
      about:
        "NEAM Technology Solutions delivers custom software solutions that empower businesses to achieve their goals. As a Project Manager, you’ll lead teams through the entire project lifecycle, ensuring success for both our clients and our internal teams.",
      responsibilities: [
        "Manage project timelines, budgets, and deliverables to ensure successful outcomes for clients and stakeholders.",
        "Work closely with clients to gather requirements, define project goals, and maintain clear communication throughout the project.",
        "Lead and motivate cross-functional teams, ensuring collaboration and accountability across all project stages.",
        "Identify potential risks and proactively develop strategies to mitigate them.",
        "Monitor and report project progress, including milestones, KPIs, and outcomes, to stakeholders.",
        "Implement best practices in project management, using tools like JIRA, Trello, or Asana.",
        "Foster a positive and results-oriented team culture that aligns with NEAM’s values.",
      ],
      qualifications: [
        "Bachelor’s degree in Business, Computer Science, or a related field (or equivalent experience).",
        "Proven experience managing software development projects, preferably using Agile methodologies.",
        "Exceptional organizational, leadership, and problem-solving skills.",
        "Ability to build strong client relationships and communicate technical concepts effectively.",
        "PMP, Scrum Master, or similar certification is a plus.",
      ],
      benefits: [
        "Competitive salary and incentives for successful project delivery.",
        "Opportunities for career growth within a supportive and dynamic company.",
        "Flexible work options to support work-life balance.",
        "A collaborative culture where your leadership skills are valued.",
      ],
      applyInstructions:
      <p>
        Email your resume and cover letter to <a href="mailto:info@neamsoftware.com" className="underline underline-offset-4 hover:text-neampurple duration-300"> info@neamsoftware.com</a>, with &apos;Project Manager&apos; in the subject line. Let&apos;s deliver exceptional results together!
      </p>
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {jobs.map((job, index) => (
        <JobDescription key={index} {...job} />
      ))}
    </div>
  );
};

const Bullet = () => {
  return (
    <motion.div 
    initial={{
      height: 0,
    }}
    whileInView={{
      height: '1rem'
    }}
    transition={{
      duration: 0.3
    }}
    className="rounded-full bg-emerald-400 p-1 w-fit mt-2" />
  );
};

export default JobDescriptions;
