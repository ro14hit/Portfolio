import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  markspace,
  tcs,
  aws,
  carrent,
  sumz,
  bits,
  nds,
  jiit,
  clothai,
  threejs,
  cognizant,
  edureka,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "certificates",
    title: "Certificates",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ReactJS Developer",
    icon: mobile,
  },
  {
    title: "NodeJS Developer",
    icon: backend,
  },
  {
    title: "NextJS Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Cloud Migration Intern ",
    company_name: "Mark and Space",
    icon: markspace,
    iconBg: "#383E56",
    date: "June 2021 - July 2021",
    points: [
      "Contributed to cloud migration initiative",
      "Utilized AWS services (EC2, S3, RDS) for infrastructure development",
      "Conducted application compatibility assessments",
      "Developed and executed migration plans",
      "Employed scripting for automation",
    ],
  },
  {
    title: "Software Analyst Intern",
    company_name: "Cognizant",
    icon: cognizant,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Jul 2022",
    points: [
      "Developed web applications using JavaScript, React, and Python frameworks.",
      "Implemented front-end and back-end logic to create interactive user interfaces.",
      "Managed cloud infrastructure on AWS, including deployment and scaling.",
      "Utilized SQL for data management and manipulation in database systems.",
      "Collaborated with teams to design, develop, and deploy applications.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Tata Consultancy Services",
    icon: tcs,
    iconBg: "#383E56",
    date: "Jul 2022 - Present",
    points: [
      "Developed complex web applications in the life sciences industry using React, Node.js, and MongoDB to address specific domain challenges.",
      "Implemented data-driven solutions leveraging MongoDB to store, manage, and analyze life science data, ensuring data integrity and privacy.",
      "Deployed and managed scalable applications on AWS cloud infrastructure, optimizing performance and cost-efficiency for life science workloads.",
      "Collaborated with life science domain experts to translate complex scientific requirements into robust software solutions.",
      "Adhered to industry regulations and compliance standards (e.g., HIPAA, GDPR) in handling sensitive patient data and research information.",
    ],
  },
];

const educations = [
  {
    title: "12th - PCM",
    organization_name: "Notre Dame School",
    icon: nds,
    iconBg: "#383E56",
    date: "2018",
  },
  {
    title: "B.Tech (Electronics and Communication Engineering)",
    organization_name: "JayPee Institute of Information Technology",
    icon: jiit,
    iconBg: "#E6DEDD",
    date: "2022",
  },
  {
    title: "M.Tech (Software Engineering)",
    organization_name: "Birla Institute Of Technology and Science",
    icon: bits,
    iconBg: "#383E56",
    date: "2025",
  },
];

const certificates = [
  {
    title: "AWS Solution Architech - Associate",
    certification_authority: "Amazon Web Services",
    icon: aws,
    iconBg: "#E6DEDD",
    link: "https://www.credly.com/badges/4b835478-a9bd-407f-b6f2-0fc613747f97/public_url",
    date: "10 Sep 2023",
  },
  {
    title: "AWS Developer - Associate",
    certification_authority: "Amazon Web Services",
    icon: aws,
    iconBg: "#E6DEDD",
    link: "https://www.credly.com/badges/72357674-273a-4fb5-8732-07db40df301a",
    date: "29 Sep 2024",
  },
  {
    title: "AWS Cloud Practioner ",
    certification_authority: "Amazon Web Services",
    icon: aws,
    iconBg: "#383E56",
    link: "https://www.credly.com/badges/272ea6a5-7510-445e-bdf0-5634eb470f0c/public_url",
    date: "13 May 2023",
  },

  {
    title: "NodeJS Certified Developer",
    certification_authority: "Edureka",
    icon: edureka,
    iconBg: "#383E56",
    date: "20 Nov 2023",
    link: "https://www.edureka.co/my-certificate/2e94220b2fbcd032e0c25b871a3cdc61",
  },
];

const projects = [
  {
    name: "Blogging App",
    description:
      "BlogZee is a blogging platform I created using React, Node.js, and Tailwind CSS. It's designed to help tech enthusiasts share their knowledge and experiences with others.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "nodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://blogzee.onrender.com/",
  },
  {
    name: "CLOTH AI",
    description:
      "I built a web tool that lets users create custom t-shirt designs using AI and 3D visualization. It combines React, Tailwind CSS, and Three.js for a user-friendly experience.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "threeJS",
        color: "blue-text-gradient",
      },
    ],
    image: clothai,
    source_code_link:
      "https://65f30e3104fec77991840c7a--thunderous-taffy-c74bf5.netlify.app/",
  },
  {
    name: "SumZee",
    description:
      "I created a tool that summarizes website content using NLP. It extracts key points and details from any URL.",
    tags: [
      {
        name: "reactJS",
        color: "blue-text-gradient",
      },
      {
        name: "tailWindCSS",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: sumz,
    source_code_link:
      "https://65c2fa87bf32622a0802bfbc--chic-lolly-5e2aa6.netlify.app/",
  },
];

export {
  services,
  technologies,
  experiences,
  projects,
  certificates,
  educations,
};
