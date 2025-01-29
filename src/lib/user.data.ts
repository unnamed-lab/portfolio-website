import projects, { TProjectData } from "./user.project";
import reviews, { TReviewData } from "./user.review";

const user: IUser = {
  firstname: "Anuoluwa",
  lastname: "Adebayo",
  middlename: "Success",
  nickname: "Unnamed",
  mascot: "/profile.png",
  social: {
    facebook: "https://facebook.com/mradebayo2018",
    linkedin: "https://linkedin.com/in/mradebayo2018",
    twitter: "https://twitter.com/unnamedcodes",
    github: "https://github.com/unnamed-lab/",
  },
  exp: calculateExperience("March 2023"),
  title: "Software Developer",
  country: "Nigeria",
  bio: "An experienced software developer with over 3 years of experience in designing and implementing software solutions. Skilled in developing responsive web applications using React and Next.js, and mobile applications for Android and iOS platforms with React Native.",
  desc: `As a software developer with 3 years of experience, I specialize in creating responsive web and mobile applications. My expertise lies in using modern frameworks like React, Next.js, and React Native to build scalable and user-friendly solutions. I am passionate about writing clean, maintainable code and continuously improving my skills in design patterns, data structures, and algorithms.`,
  skill_brief:
    "I have a solid understanding of HTML5 and CSS3 (with CSS frameworks like Tailwind CSS and SCSS), including responsive design principles and cross-browser compatibility with experience in creating visually appealing and accessible web interfaces. With proficiency in intermediate-level JavaScript, including DOM manipulation, event handling, and familiarity with popular libraries and frameworks like React, Next.js, Express.js, and more.",
  experience: [
    {
      title: "Frontend Developer - Petit",
      timespan: "August 2024 - Present",
      desc: "Led the design of the UI for the mobile app using React Native and the website using Next.js, which enhanced skills by 70%. Designed 30+ pages and screens while using efficient architectural and design patterns, maintaining 100% best coding practices. Worked side-by-side with 2 other React developers in developing the Petit application and website. Improved proficiency in design patterns, data structures, algorithms, and object-oriented design by 60%.",
      location: "Budapest, Hungary (Remote)",
      type: "Employment",
    },
    {
      title: "Frontend Developer Intern - Agumwami Enterprise",
      timespan: "January 2024 - March 2024",
      desc: "Engaged in 90% of AGILE SCRUM meetings and submitted 95% of daily reports. Employed 100% effective DRY principle of software development, adhering to separation of UI from logic to ensure code reusability. Composed and effected 60% of the UI for an educational-based web application using React.js. Partnered with 3 other developers (1 Laravel and 2 React.js developers) in developing websites for the company.",
      location: "Lagos, Nigeria (Remote)",
      type: "Employment",
    },
    {
      title: "Community Manager - Blocksultancy",
      timespan: "March 2023 - October 2023",
      desc: "Oversaw the crypto Telegram groups of 3 clients and was present in 100% of meetings with the company and their clients. Coordinated in-house community events (giveaways, promotions, etc.) for 3 communities.",
      location: "London, United Kingdom (Remote)",
      type: "Employment",
    },
    {
      title: "Bachelor of Technology, Computer Science - Federal University of Technology Owerri",
      timespan: "December 2022 - December 2026",
      desc: "Pursuing a comprehensive curriculum that combines theoretical foundations and practical applications of computer science, preparing for a career in software development.",
      location: "Owerri, Nigeria",
      type: "Education",
    },
  ],
  review: reviews,
  catalog: projects,
};

export interface IUser {
  firstname: string;
  lastname: string;
  middlename: string;
  nickname: string;
  mascot: string;
  social: {
    facebook: string;
    linkedin: string;
    twitter: string;
    github: string;
  };
  exp: number;
  title: string;
  country: string;
  bio: string;
  desc: string;
  skill_brief: string;
  experience: {
    title: string;
    timespan: string;
    desc: string;
    location: string;
    type: "Education" | "Employment";
  }[];
  review: TReviewData;
  catalog: TProjectData;
}

function calculateExperience(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();
  const diffInMilliseconds = now.getTime() - start.getTime();
  const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25); // Account for leap years
  return Math.floor(diffInYears); // Round down to the nearest whole number
}

export default user;
