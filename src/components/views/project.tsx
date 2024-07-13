import React from "react";
import { IUser } from "@/lib/user.data";
import { Icons, ProjectCard, Section } from "../ui";
import { SectionTab } from "../ui/section";

export default function Project({ data }: Readonly<{ data: IUser }>) {
  const { catalog } = data;
  if (catalog.length >= 1)
    return (
      <Section
        id="project"
        tab={<SectionTab title="Projects" icon={Icons.project} />}
      >
        <h1 className="section-heading">Project Portfolio</h1>
        <div className="grid w-full grid-cols-1 justify-stretch gap-4 py-4 md:grid-cols-2 md:px-7 lg:grid-cols-3">
          {catalog &&
            catalog.map((el, i) => {
              const itemId = "item-" + i;
              return <ProjectCard key={itemId} data={el} />;
            })}
        </div>
      </Section>
    );
  else return;
}
