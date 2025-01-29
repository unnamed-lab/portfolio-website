"use client";

import { IUser } from "@/lib/user.data";
import React from "react";

export default function ResumeBtn({ data }: Readonly<{ data: IUser }>) {
  const handleDownloadResume = () => {
    const { resumeUrl } = data;
    if (resumeUrl) {
      window.open(resumeUrl, "_blank");
    } else {
      console.error("Resume URL not found.");
    }
  };
  return (
    <button
      onClick={handleDownloadResume}
      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-r from-[#1ca7ec] to-blue-950 px-6 py-3 font-medium text-white shadow-lg transition-all duration-300 hover:from-blue-700 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
    >
      <span className="relative z-10">Download Resume</span>
      <span className="absolute inset-0 z-0 h-full w-full bg-white opacity-0 transition-all duration-300 group-hover:opacity-10"></span>
      <span className="absolute -inset-2 z-0 rounded-lg bg-gradient-to-r from-[#1ca7ec] to-blue-950 opacity-0 blur-lg transition-all duration-300 group-hover:inset-0 group-hover:opacity-100"></span>
    </button>
  );
}
