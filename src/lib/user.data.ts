import projects, { TProjectData } from "./user.project";
import reviews, { TReviewData } from "./user.review";

const exp = calculateExperience("March 2022")

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
  resumeUrl: "https://docs.google.com/document/d/1XggQbCgMQSK37jgopa_qhByN4yee4JskzUklUHo71wA/edit?usp=drivesdk",
  exp,
  title: "Software Developer & Web3 Engineer",
  country: "Nigeria",
  bio: `A software engineer with over ${exp} years of experience building full-stack applications and Web3 infrastructure. Proficient in TypeScript, React, Next.js, and NestJS on the frontend and backend, with deep expertise in Solana blockchain development using Anchor and Rust. Founded Herald Protocol, a privacy-preserving notification layer for DeFi. Passionate about clean architecture, developer tooling, and shipping production-grade systems.`,
  desc: `A full-stack engineer and founder with expertise across the entire development stack from responsive web interfaces to Solana smart contracts. I build production systems using TypeScript, React, Next.js, NestJS, and PostgreSQL, and I write Solana programs in Rust with Anchor. I have experience leading product development, collaborating across teams, and delivering to deadline in both startup and contract environments.`,
  skill_brief:
    "Proficient in TypeScript, JavaScript, React, Next.js, and NestJS for building full-stack web applications. Experienced with Solana blockchain development using Rust, Anchor, and Web3.js. Comfortable with PostgreSQL, Prisma, Docker, Tailwind CSS, and Framer Motion. Familiar with smart contract development, Web3 integration, and cloud infrastructure (AWS).",
  experience: [
    {
      title: "Founder & CEO - Herald Protocol",
      timespan: "February 2026 - Present",
      desc: "Founded and leading development of privacy-preserving notification infrastructure for Web3. Built the Solana Anchor program, NestJS notification gateway with AWS Nitro Enclave TEE decryption, Next.js user portal and developer dashboard, TypeScript SDK published on npm, and marketing landing page. Coordinated cross-functional team across smart contracts, backend, frontend, and design.",
      location: "Remote",
      type: "Employment",
    },
    {
      title: "Backend Developer - BunchBay",
      timespan: "May 2025 - March 2026",
      desc: "Working with the team on delivering client products backend server using technologies like NestJs, TypeOrm, Prisma etc, which help increased skills by 80% on backend concepts and implementation.",
      location: "Lagos, Nigeria (Remote)",
      type: "Employment",
    },
    {
      title: "Frontend Developer - Petit",
      timespan: "August 2024 - February 2025",
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
      title:
        "Bachelor of Technology, Computer Science - Federal University of Technology Owerri",
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
  resumeUrl: string;
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
