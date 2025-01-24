import { VscCode, VscComment, VscEmptyWindow } from "react-icons/vsc";

export const services: {
  title: string;
  icon: React.JSX.Element;
  body: string;
  link: string,
}[] = [
  {
    title: "Software Consulting",
    body: `
        We provide expert guidance to help businesses navigate their 
        technology challenges and opportunities. Our tailored solutions 
        and strategic roadmaps ensure you’re equipped to achieve your goals
        efficiently. Let us be your trusted partner in digital transformation.
      `,
    icon: <VscComment />,
    link: '/services#consulting'
  },

  {
    title: "Software Development",
    body: `
        Bring your vision to life with custom software solutions designed to streamline
        operations and drive innovation. From initial concept to final deployment,
        we deliver secure, scalable, and user-friendly applications. Our team ensures
        every solution is tailored to your unique needs.

      `,
    icon: <VscCode />,
    link: '/services#softwaredevelopment'

  },

  {
    title: "Website Development",
    body: `
      Elevate your online presence with responsive, engaging, and visually stunning websites.
      We focus on user experience and functionality to help you connect with your audience and
      achieve your goals. Whether it’s a corporate site or an e-commerce platform, we deliver
      results.
      `,
    icon: <VscEmptyWindow />,
    link: '/services#webdevelopment'
  },
];