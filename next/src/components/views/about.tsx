import { IUser } from "@/lib/user.data";
import { Section, Icons, AboutMenu, AboutItem } from "../ui";
import { SectionTab } from "../ui/section";
import { cn } from "@/lib/utils";

export default function About({ data }: { data: IUser }) {
  return (
    <Section tab={<SectionTab title="About" icon={Icons.about} />} breakline>
      <h1 className="section-heading">
        {data.title}, based in {data.country}
      </h1>
      <p className="info">{data.desc}</p>
      <AboutMenu>
        <AboutItem title="Languages" icon={Icons.language} list={["English"]} />
        <AboutItem title="Nationality" icon={Icons.globe} list={["Nigeria"]} />
        <AboutItem title="Gender" icon={Icons.gender} list={["Male"]} />
        <AboutItem
          title="Hobbies"
          icon={Icons.hobby}
          list={[
            "Coding",
            "Building Cool Things",
            "Cooking",
            "Listening To Music",
            "Watching Anime Shows",
          ]}
        />
      </AboutMenu>
    </Section>
  );
}
