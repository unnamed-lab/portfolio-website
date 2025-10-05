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
    title: "Cypheir Colour Scheme Generator",
    desc: "The Cypheir Colour Scheme is a crafted colour palette designed for use in projects involving colour mixing, combination, and psychology. It is ideal for creating 1-3 palettes for various design projects.",
    stack: ["typescript"],
    github: "https://github.com/unnamed-lab/cypheir-colour-scheme",
    preview: "https://github.com/unnamed-lab/cypheir-colour-scheme",
    role: "author",
    status: "done",
  },
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
    title: "Harbor",
    desc: "Harbor is a web3 NFT betting platform similar to Polymarket where users can place bets on their favourite NFT market on the Monad ecosystem with the aim of winning rewards.",
    stack: ["typescript", "nextjs", "tailwind"],
    github: "#",
    preview: "https://testnet.harbr.xyz/",
    role: "contributor",
    status: "ongoing",
  },
  {
    title: "Paragon",
    desc: "Paragon is a digital marketplace where users are able to trade their digital assets e.g cryptocurrencies and giftcards, without the stress of P2P interruption.",
    stack: ["typescript", "nestjs", "express", "typeorm"],
    github: "#",
    preview: "https://play.google.com/store/apps/details?id=com.paragon.app",
    role: "contributor",
    status: "ongoing",
  },
  {
    title: "Cypheir Mock API",
    desc: "Cypheir Mock API is a powerful tool for developers, enabling quick creation of mock APIs. Whether you’re building new applications, testing integrations, or simulating responses during development, this service has you covered. Easily create API endpoints with customizable routes, request parameters, and response data. Generate mock data based on your API specifications, ensuring accurate testing of input validation and edge cases.",
    stack: ["typescript", "nextjs", "tailwind", "prisma", "jest", "mongodb"],
    github: "https://github.com/unnamed-lab/cypheir-mock",
    preview: "https://mock.cypheir.xyz/",
    role: "author",
    status: "ongoing",
  },
  {
    title: "Solidity Smart Contracts",
    desc: "A collection of 10 Solidity smart contracts built with real-life implementation. These contracts are designed to be used in various blockchain applications, providing secure and efficient solutions for decentralized systems.",
    stack: ["solidity", "ethereum", "web3"],
    github: "https://github.com/unnamed-lab/solidity-smart-contracts",
    preview: "https://github.com/unnamed-lab/solidity-smart-contracts",
    role: "author",
    status: "done",
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
];

export default projects;
