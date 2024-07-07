export interface IProjectData {
  title: string;
  desc: string;
  stack: string[];
  github: string;
  preview: string;
  role: "author" | "contributor" | "maintainer";
  status: "done" | "ongoing" | "closed";
}

export type TProjectData = Array<IProjectData>;

const projects: TProjectData = [
  {
    title: "One-Time Passcode Generator Server",
    desc: "The project is a One-Time Passcode (OTP) generator that uses a time-based authentication protocol. When a user requests an OTP using an API key, a unique passkey is generated server-side. This passkey is immediately emailed to the user and a hashed version is stored in the database for security. The OTP is only valid for a specific duration, enhancing the system’s security.",
    stack: ["typescript", "nodejs", "mongodb", "express", "mongoose"],
    github: "https://github.com/unnamed-lab/cypheir-otp-server",
    preview: "https://github.com/unnamed-lab/cypheir-otp-server",
    role: "author",
    status: "ongoing",
  },
  {
    title: "MagicUI",
    desc: "Magic UI is a versatile library of reusable components designed to be easily integrated into web applications. The library primarily focuses on elements, blocks, and templates that are ideal for crafting landing pages and marketing materials aimed at end-users. The philosophy behind Magic UI is rooted in the belief that high-quality design significantly enhances the value of software. Inspiration for this library comes heavily from UI Shadcn, another well-designed component library.",
    stack: ["typescript", "nextjs", "tailwind", "docker"],
    github: "https://github.com/magicuidesign/magicui",
    preview: "https://magicui.design/",
    role: "contributor",
    status: "ongoing",
  },

  {
    title: "Cypheir Mock",
    desc: `Cypheir Mock API is a powerful tool for developers, enabling quick creation of mock APIs. Whether you’re building new applications, testing integrations, or simulating responses during development, this service has you covered. Easily create API endpoints with customizable routes, request parameters, and response data. Generate mock data based on your API specifications, ensuring accurate testing of input validation and edge cases.`,
    stack: ["typescript", "nextjs", "tailwind", "prisma", "jest", "mongodb"],
    github: "https://github.com/unnamed-lab/cypheir-mock",
    preview: "https://mock.cypheir.xyz/",
    role: "author",
    status: "ongoing",
  },
];

export default projects;
