import { twMerge } from "tailwind-merge";

interface ISectionProp {
  id?: string;
  tab: React.ReactNode;
  className?: string;
  children: React.ReactNode;
}

export default function Section({
  id,
  tab,
  className,
  children,
}: ISectionProp) {
  return (
    <section id={id} className={twMerge("", className)}>
      {tab && (
        <div className="cursor-pointer min-w-min w-max h-4 rounded-xl border-2 border-solid border-[#c8c8c8] mx-4 px-4 py-1 capitalize text-center flex justify-center items-center">
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
      <span className="!w-4 flex content-center mr-2">{icon}</span>
      <span className="font-normal text-xs">{title}</span>
    </>
  );
}
