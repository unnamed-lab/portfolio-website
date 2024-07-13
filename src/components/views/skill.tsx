import React from "react";
import { IUser } from "@/lib/user.data";
import { AboutItem, AboutMenu, Icons } from "../ui";
import Section, { SectionTab } from "../ui/section";
import IconCloud from "@/components/magicui/icon-cloud";

export default function Skill({ data }: Readonly<{ data: IUser }>) {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "prisma",
    "nextdotjs",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "tailwindcss",
    "sass",
    "python",
  ];
  return (
    <Section
      id="skill"
      tab={<SectionTab title="Talents" icon={Icons.skill} />}
      breakline
    >
      <h1 className="section-heading">Technical Experience/Skills</h1>
      <p className="info">{data.skill_brief}</p>

      <div className="my-4 flex w-full flex-wrap gap-8 md:flex-nowrap">
        <div className="w-full md:w-6/12">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="w-full md:w-6/12">
          <AboutMenu>
            <AboutItem
              key={"about-item-1"}
              className="min-w-[100%] gap-2"
              title="Programming/Coding"
              icon={Icons.skill}
              list={[
                "HTML",
                "CSS",
                "JavaScript",
                "TypeScript",
                "Python",
                "MongoDB",
              ]}
            />
            <AboutItem
              key={"about-item-2"}
              className="min-w-[100%] gap-2"
              title="Frameworks & Libraries."
              icon={Icons.skill}
              list={[
                "React",
                "SASS",
                "Tailwind",
                "NextJs",
                "Express",
                "Prisma",
                "Jest",
                "Testing Library",
              ]}
            />
            <AboutItem
              key={"about-item-3"}
              className="min-w-[100%] gap-2"
              title="DevOps"
              icon={Icons.skill}
              list={[
                "GitHub",
                "NPM",
                "PNPM",
                "Git",
                "YAML",
                "Vercel",
                "Docker",
              ]}
            />
          </AboutMenu>
        </div>
      </div>
    </Section>
  );
}
