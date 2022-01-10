import ComputerOutlinedIcon from "@material-ui/icons/ComputerOutlined";
import SupervisedUserCircleOutlinedIcon from "@material-ui/icons/SupervisedUserCircleOutlined";
import SchoolOutlinedIcon from "@material-ui/icons/SchoolOutlined";

export const TECH_STACK_MAP = [
  {
    title: "FRONT-END",
    description: [
      {
        name: "ReactJS",
        logo_src: `${process.env.PUBLIC_URL}/images/reactjs.png`,
      },
      {
        name: "NextJS",
        logo_src: `${process.env.PUBLIC_URL}/images/nextjs.png`,
      },
      {
        name: "Gatsby",
        logo_src: `${process.env.PUBLIC_URL}/images/gatsby.png`,
      },
      {
        name: "TypeScript",
        logo_src: `${process.env.PUBLIC_URL}/images/ts.png`,
      },
      {
        name: "ES6",
        logo_src: `${process.env.PUBLIC_URL}/images/es6.jpeg`,
      },
      {
        name: "MaterialUI",
        logo_src: `${process.env.PUBLIC_URL}/images/mui.png`,
      },
      {
        name: "Bootstrap CSS",
        logo_src: `${process.env.PUBLIC_URL}/images/bootstrap.png`,
      },

      {
        name: "IndexedDB",
        logo_src: `${process.env.PUBLIC_URL}/images/indexeddb.png`,
      },
      { name: "Figma", logo_src: `${process.env.PUBLIC_URL}/images/figma.png` },
      {
        name: "HTML5",
        logo_src: `${process.env.PUBLIC_URL}/images/html-5.png`,
      },
      { name: "CSS", logo_src: `${process.env.PUBLIC_URL}/images/css.png` },
    ],
  },

  {
    title: "SOURCE CONTROL & CI",
    description: [
      {
        name: "Git & GitHub",
        logo_src: `${process.env.PUBLIC_URL}/images/github.png`,
      },
     
      {
        name: "Netlify",
        logo_src: `${process.env.PUBLIC_URL}/images/netlify.png`,
      },
     
    ],
  },

  
];

export const WORK_EXPERIENCE_MAP = [
  {
    title: "React Development Intern",
    company: "Workplace Incubation, Project Codex, Cape Town",
    date: "March 2021 to present",
    description1: `Working with a team of 3 other interns on a ReactJS `,
    description2: `project.
    Collaborating on a progressive ReactJS web application, starting with competition analysis, 
    generating personas and user stories, creating click through prototypes on Figma,  
    version control with GitHub and Git, using GraphCMS as our API which relies on GraphQL as its API query language and runtime.
     We fetched our API data and stored it locally on Indexed DB and we used Fuana DB as our remote database. 
     We implemented a service worker and precached assets to allow
    for user friendly offline user experience.`,
  },
  {
    title: "Java Web Developer",
    company: "Project Codex, Cape Town",
    date: "January to February 2021",
    description1: `Working towards OCA Exam
    NQF Level 5 Systems Development (Certificate Pending)`,
    description2: `I learned Java concepts such as OOP( which includes - Inheritance,
    Polymorphism, Abstraction, and Encapsulation)which I then applied those concepts to a project, so
    that I can then see how each concept is applied in a code, working towards my OCA certification.`,
  },


  {
    title: "Customer Service Agent",
    company: "Datacentrix | Cape Town ",
    date: "2013 - 2017",
    description1: `Providing application support for all Virgin Active in SA and Africa.`,
    description2: `2015 moved to Johannersburg to a new client. Was based at Pearson as a Printer Support Technician. Setting up Authentication access to staff and
    students. Fix printers, replace cartridges, install and update printer software.`,
  },

  {
    title: "Technical Support Agent",
    company: " MWEB | Cape Town ",
    date: "2012 - 2013",
    description1: `Inbound call center - Install ADSL and set up emails, wi-fi connection
    telephonically.`,
    
  },
];

export const EDUCATION_MAP = [
  {
    name: "ReactJS Developer",
    description: "Google Workplace Incubation ",
    location: "Cape Town South Africa",
    year: "2021",
  },
  {
    name: " Agile Web Development",
    description: "Project Codex",
    location: "Cape Town South Africa",
    year: "2020",
  },
  {
    name: "National Certificate in Information Technology",
    description: "Learnership with certification after completion",
    
    location: "TorquiIT, Cape Town",
    year: "January 2012-2013",
  },
 
];

export const SERVICES_MAP = [
  {
    title: "Web Development",
    description: "Front and backend web development",
    icon: <ComputerOutlinedIcon />,
  },
  {
    title: "Mentoring",
    description:
      "Online and onsite code mentoring, guidance and technical support",
    icon: <SupervisedUserCircleOutlinedIcon />,
  },
  
];
