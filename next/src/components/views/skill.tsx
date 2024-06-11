import { IUser } from "@/lib/user.data";
import { AboutItem, AboutMenu, Icons } from "../ui";
import Section, { SectionTab } from "../ui/section";
import IconCloud from "@/components/magicui/icon-cloud";

export default function Skill({ data }: { data: IUser }) {
  const slugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "vercel",
    "testinglibrary",
    "jest",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "tailwindcss", 
    "sass",
    "python"
  ];
  return (
    <Section tab={<SectionTab title="Talents" icon={Icons.skill} />} breakline>
      <h1 className="section-heading">Technical Experience/Skills</h1>
      <p className="info">{data.skill_brief}</p>

      <div className="w-full my-4 flex flex-wrap md:flex-nowrap gap-8">
        <div className="w-full md:w-6/12">
          <IconCloud iconSlugs={slugs} />
        </div>

        <div className="w-full md:w-6/12">
          <AboutMenu>
            <AboutItem
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
              className="min-w-[100%] gap-2"
              title="Frameworks & Libraries."
              icon={Icons.skill}
              list={["React", "SASS", "Tailwind", "NextJs", "Express"]}
            />
            <AboutItem
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
                "Prisma",
                "Docker",
              ]}
            />
          </AboutMenu>
        </div>
      </div>
    </Section>
  );
}
