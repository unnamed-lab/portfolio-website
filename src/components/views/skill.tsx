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
    "expo",
    "yarn",
    "pnpm",
    "npm",
    "solidity",
    "mongodb",
    "mysql",
    "django",
    "graphql",
    "postman",
    "babel",
    "materialdesign",
    "bootstrap",
    "figma",
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
              title="Programming Languages"
              icon={Icons.skill}
              list={[
                "JavaScript",
                "TypeScript",
                "Python",
                "Java",
                "HTML5",
                "CSS3",
                "Node.js",
                "Solidity",
              ]}
            />
            <AboutItem
              key={"about-item-2"}
              className="min-w-[100%] gap-2"
              title="Frameworks & Libraries"
              icon={Icons.skill}
              list={[
                "React.js",
                "Next.js",
                "React Native",
                "Expo",
                "Express.js",
                "Django",
                "Prisma",
                "Jest",
                "Mocha",
                "React Testing Library",
              ]}
            />
            <AboutItem
              key={"about-item-3"}
              className="min-w-[100%] gap-2"
              title="Databases"
              icon={Icons.skill}
              list={["MongoDB", "MySQL"]}
            />
            <AboutItem
              key={"about-item-4"}
              className="min-w-[100%] gap-2"
              title="Tools & Technologies"
              icon={Icons.skill}
              list={[
                "Git",
                "GitHub",
                "Docker",
                "Vercel",
                "Postman",
                "YAML",
                "Babel",
                "NPM",
                "Yarn",
                "PNPM",
              ]}
            />
            <AboutItem
              key={"about-item-5"}
              className="min-w-[100%] gap-2"
              title="Styling"
              icon={Icons.skill}
              list={[
                "Tailwind CSS",
                "SCSS",
                "Bootstrap",
                "Material Design",
              ]}
            />
            <AboutItem
              key={"about-item-6"}
              className="min-w-[100%] gap-2"
              title="Additional Skills"
              icon={Icons.skill}
              list={[
                "Agile Methodologies",
                "Figma (Design Tools)",
                "Authentication/Authorization (OAuth, JWT)",
              ]}
            />
          </AboutMenu>
        </div>
      </div>
    </Section>
  );
}
