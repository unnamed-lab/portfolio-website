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
        <div className="grid w-full justify-stretch grid-cols-1 gap-4 py-4 md:grid-cols-2 md:px-7 lg:grid-cols-3">
          {catalog &&
            catalog.map((el, i) => {
              return <ProjectCard key={i} data={el} />;
            })}
        </div>
      </Section>
    );
  else return;
}
