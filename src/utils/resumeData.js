import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";


export const RESUME_DATA = {
  name: "Yonela Futho",
  title: "Entry-level Full Stack Web Developer",
  emailAdress: "loreenmuusha@gmail.com",
  cellphoneNumber: "+27 613 340 397",
  DateOfBirth: "13-12-1990",
  Address: "9 Illovo Street, Leiden Delft South, 7100",

  AboutMe1: `As a young black female, I realized there was a gap in knowledge and experience for women in the IT and developer industry, this is something I wanted to rectify.
    I am a hard worker whose biggest strength lies in the ability to solve problems both strategically and creatively. I instill positivity
  My biggest strengths lie in project management, building positive client relationships, and the ability to instill positivity and camaraderie within any team I am placed into and have the ability to remain calm during stressful situations..
`,
  AboutMe2: `I enjoy coding because I love the process of conceptualising new solutions that make life easier for people. I enjoy the challenge of problem solving, transforming data and using my research and 
  development skills to solve daily challenges that come my way. My career goal is to gain a role which allows me to further my knowledge and skills, granting me new 
  opportunities and broadening my horizon. .`,
  socials: {
    LinkedIn: {
      link: "https://www.linkedin.com/in/yonela-futho-60072240/",
      text: "LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/Yonela986",
      text: "GitHub",
      icon: <GitHubIcon />,
    },
  },

 
};


export const Projects = [
  
  {
    tag: "React",
    logo_src: `${process.env.PUBLIC_URL}/images/dinner.png`,
    title: "Eazy-meals PWA",
    caption: `Get meal ideas for any day or occasion`,
    description: ` I collaborated with a team of 3 other interns on this ReactJS project.
We did competition analysis, generating personas and user stories, creating click through prototypes on
Figma, version control with GitHub and Git, using GraphCMS as our API which relies on GraphQL as its API query 
language and runtime. We used Material UI for styling and implemented react hooks and components in our code. We 
fetched our API data and stored it locally on Indexed DB and we used Fuana DB as our remote database. We implemented
 a service worker and precached assets to allow for user friendly
 offline user experience. We deployed our app to Netlify.`,
    links: [
      {
        link: "https://github.com/TeamEazyMeals/eazy-meals",
        icon: <GitHubIcon />,
      },
    ],
  },
  {
    tag: "React",
    logo_src: `${process.env.PUBLIC_URL}/images/to-do-list.png`,
    title: "To Do List PWA",
    caption: `Plan your daily tasks, check when complete`,
    description: `The goal of this app was to learn how create a react project and deploy it to netlify.
    I learnt how to set up a react project, used material UI for my CSS and storybook for for building UI components 
    and pages in isolation. `,
    links: [
      {
        link: "https://github.com/Yonela986/to-do-list",
        icon: <GitHubIcon />,
      },
    ],
  },

  

  

  
];
