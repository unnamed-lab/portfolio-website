import React from "react";
import { cn } from "@/lib/utils";

interface ISectionProp {
  id?: string;
  tab?: React.ReactNode;
  className?: string;
  children: React.ReactNode;
  breakline?: boolean;
}

export default function Section({
  id,
  tab,
  className,
  children,
  breakline = false,
}: ISectionProp) {
  const breakage = breakline
    ? "border-b border-b-neutral-700 border-b-solid mb-8"
    : "";
  return (
    <section
      id={id}
      className={cn(
        "w-full px-5 py-4 md:px-[10%] md:py-12",
        breakage,
        className,
      )}
    >
      {tab && (
        <div className="mb-4 flex h-4 w-max min-w-min cursor-pointer items-center justify-center rounded-xl border-2 border-solid border-[#c8c8c8] px-4 py-3 text-center capitalize md:mb-6 md:-translate-x-[3.75rem]">
          {tab}
        </div>
      )}
      {children}
    </section>
  );
}

interface ISectionTabProp {
  title: string;
  icon: React.ReactNode;
}

export function SectionTab({ title, icon }: ISectionTabProp) {
  return (
    <>
      <span className="mr-2 flex !h-4 !w-4 content-center">{icon}</span>
      <span className="text-xs font-normal">{title}</span>
    </>
  );
}
