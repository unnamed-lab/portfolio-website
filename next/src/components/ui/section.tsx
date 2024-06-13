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
        "w-full px-5 md:px-[10%] py-4 md:py-12",
        breakage,
        className
      )}
    >
      {tab && (
        <div className="cursor-pointer min-w-min w-max h-4 rounded-xl border-2 border-solid border-[#c8c8c8] mb-4 md:mb-6 px-4 py-3 capitalize text-center flex justify-center items-center md:-translate-x-[3.75rem]">
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
      <span className="!w-4 !h-4 flex content-center mr-2">{icon}</span>
      <span className="font-normal text-xs">{title}</span>
    </>
  );
}
