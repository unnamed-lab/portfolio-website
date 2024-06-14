import { cn } from "@/lib/utils";

interface IAboutMenu {
  className?: string;
  children: React.ReactNode;
}

function AboutMenu({ className, children }: IAboutMenu) {
  return (
    <div
      className={cn(
        "lg:flex lg:flex-wrap lg:content-evenly my-4 md:gap-2",
        className
      )}
    >
      {children}
    </div>
  );
}

interface IAboutItem {
  className?: string;
  title: string;
  icon: React.ReactNode;
  list: string[];
}

function AboutItem({ className, title, icon, list }: IAboutItem) {
  const listing = list.map((el, index) => {
    return (
      <li key={index} className="font-medium capitalize mb-6">
        {el}
      </li>
    );
  });
  
  return (
    <div
      className={cn(
        "flex flex-wrap flex-1 min-w-[30%] my-2 mr-auto",
        className
      )}
    >
      <h3 className="relative w-full flex items-center font-semibold text-lg mb-3">
        <span className="about-icon">{icon}</span>
        {title}
      </h3>
      <ul className="mt-3 ml-9 list-[circle] flex gap-y-2 gap-x-8 lg:gap-x-8 flex-wrap content-evenly text-base">
        {listing}
      </ul>
    </div>
  );
}

export { AboutMenu, AboutItem };
