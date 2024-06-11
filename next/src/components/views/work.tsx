import { IUser } from "@/lib/user.data";
import { Icons, Section } from "../ui";
import { SectionTab } from "../ui/section";
import { cn } from "@/lib/utils";
import { Badge } from "../shadcn-ui/badge";

export default function Work({ data }: { data: IUser }) {
  return (
    <Section id="work"
      tab={<SectionTab title="Work Experience" icon={Icons.work} />}
      breakline
    >
      <h1 className="section-heading">Employment & Education Experience.</h1>
      <ExpTree>
        {data.experience.map((el, index) => {
          return (
            <ExpBranch
              key={index}
              timespan={el.timespan}
              title={el.title}
              desc={el.desc}
              type={el.type}
              location={el.location}
            />
          );
        })}
      </ExpTree>
    </Section>
  );
}

interface IExpTreeProp {
  className?: string;
  children: React.ReactNode;
}

function ExpTree({ className, children }: IExpTreeProp) {
  return (
    <div className={cn("ml-auto mr-[10%] lg:px-7", className)}>{children}</div>
  );
}

interface IExpBranchProp {
  timespan: string;
  title: string;
  location?: string;
  type: string;
  desc: string;
  className?: string;
}

function ExpBranch({
  className,
  timespan,
  title,
  desc,
  type,
  location,
}: IExpBranchProp) {
  return (
    <div className={cn("relative md:flex w-full mb-4 md:mb-0", className)}>
      <div className="w-full md:w-[25%] mr-auto md:flex flex-wrap items-center font-semibold text-base capitalize">
        {timespan}
      </div>
      <div className="md:branch-pointer relative w-full md:w-3/4 mt-0 pt-2 md:pt-0 pl-3 md:pl-8 ml-3 pb-8 md:border-l-4 md:border-l-[#3c3c3c] md:border-solid">
        <h4 className="font-bold text-xl md:text-2xl mb-1 mt-0">{title}</h4>
        <div className="flex gap-3 my-2">
          {type && (
            <Badge
              variant="outline"
              className="uppercase font-medium pointer-events-none"
            >
              {type}
            </Badge>
          )}
          {location && (
            <Badge
              variant="default"
              className="uppercase font-medium pointer-events-none bg-[#1ca7ec]"
            >
              {location}
            </Badge>
          )}
        </div>
        <p className="text-xs font-light leading-relaxed">{desc}</p>
      </div>
    </div>
  );
}
