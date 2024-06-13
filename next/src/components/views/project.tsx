import { IUser } from "@/lib/user.data";
import { Icons, ProjectCard, Section } from "../ui";
import { SectionTab } from "../ui/section";

export default function Project({ data }: { data: IUser }) {
  const { catalog } = data;
  if (catalog.length >= 1)
    return (
      <Section
        id="project"
        tab={<SectionTab title="Projects" icon={Icons.project} />}
      >
        <h1 className="section-heading">Project Portfolio</h1>
        <div className="w-full py-4 md:px-7 gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {catalog &&
            catalog.map((el, i) => {
              return <ProjectCard key={i} data={el} />;
            })}
        </div>
      </Section>
    );
  else return;
}
