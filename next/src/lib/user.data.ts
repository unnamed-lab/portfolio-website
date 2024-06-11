import reviews, { IReviewData } from "./user.review";

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
  },
  exp: 3,
  title: "Software Engineer And Web Developer",
  country: "Nigeria",
  bio: "I am a full stack web developer with experience using the MERN stack for creating cool and responsive web apps.",
  desc: `As a Front-end Developer with 3 year of experience, I bring vibrant energy and a passion for crafting visually stunning web experiences. My biggest achievement lies in my mastery of CSS styling, ensuring pixel-perfect designs that captivate users. With a keen eye for detail and a commitment to delivery speed, I excel at creating seamless and responsive interfaces that leave a lasting impression.`,
  skill_brief:
    "I have a solid understand of HTML5 and CSS3 (with CSS framework like Tailwind CSS and SCSS), including responsive design principles and cross-broswer compatibility with an experience in creating visually appealing and accessible web interfaces. With quite some proficiency in intermediate-level JavaScript, including DOM manipulation, event handling and familiarity with popular libraries and frameworks like React, NextJs, ExpressJs and so on",
  experience: [
    {
      title: "Bachelor of Technology, Federal University of Technology Owerri",
      timespan: "Jan 2023 - Present",
      desc: "I am currently studying Computer Science at the Federal University of Technology Owerri FUTO, pursuing a Bachelor of Technology degree. The program has provided me with a well-rounded education, covering both theoretical foundations and practical applications of computer science.",
      location: "Owerri, NG",
      type: "Education",
    },
  ],
  review: reviews,
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
  review: IReviewData[];
}

export default user;
