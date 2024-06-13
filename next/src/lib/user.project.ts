export interface IProjectData {
  title: string;
  desc: string;
  stack: string[];
  github: string;
  preview: string;
}

export type TProjectData = Array<IProjectData>;

const projects: TProjectData = [
  {
    title: "One-Time Passcode Generator Server",
    desc: "The project is a One-Time Passcode (OTP) generator that uses a time-based authentication protocol. When a user requests an OTP using an API key, a unique passkey is generated server-side. This passkey is immediately emailed to the user and a hashed version is stored in the database for security. The OTP is only valid for a specific duration, enhancing the system’s security.",
    stack: ["typescript", "nodejs", "mongodb", "express", "mongoose"],
    github: "https://github.com/unnamed-lab/cypheir-otp-server",
    preview: "https://github.com/unnamed-lab/cypheir-otp-server",
  },
];

export default projects;
