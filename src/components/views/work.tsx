import React from "react";
import { IUser } from "@/lib/user.data";
import { Icons, Section } from "../ui";
import { SectionTab } from "../ui/section";
import { cn } from "@/lib/utils";
import { Badge } from "../shadcn-ui/badge";

export default function Work({ data }: Readonly<{ data: IUser }>) {
  return (
    <Section
      id="work"
      tab={<SectionTab title="Work Experience" icon={Icons.work} />}
      breakline
    >
      <h1 className="section-heading">Employment & Education Experience.</h1>
      <ExpTree>
        {data.experience.map((el, index) => {
          const itemId = "item-" + index;

          return (
            <ExpBranch
              key={itemId}
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

function ExpTree({ className, children }: Readonly<IExpTreeProp>) {
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
}: Readonly<IExpBranchProp>) {
  return (
    <div className={cn("relative mb-4 w-full md:mb-0 md:flex", className)}>
      <div className="mr-auto w-full flex-wrap items-center text-base font-semibold capitalize md:flex md:w-[25%]">
        {timespan}
      </div>
      <div className="md:branch-pointer relative ml-3 mt-0 w-full pb-8 pl-3 pt-2 md:w-3/4 md:border-l-4 md:border-solid md:border-l-[#3c3c3c] md:pl-8 md:pt-0">
        <h4 className="mb-1 mt-0 text-xl font-bold md:text-2xl">{title}</h4>
        <div className="my-2 flex gap-3">
          {type && (
            <Badge
              variant="outline"
              className="pointer-events-none font-medium uppercase"
            >
              {type}
            </Badge>
          )}
          {location && (
            <Badge
              variant="default"
              className="pointer-events-none bg-[#1ca7ec] font-medium uppercase"
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
