import React from "react";
import { cn } from "@/lib/utils";

interface IAboutMenu {
  className?: string;
  children: React.ReactNode;
}

function AboutMenu({ className, children }: IAboutMenu) {
  return (
    <div
      className={cn(
        "my-4 md:gap-2 lg:flex lg:flex-wrap lg:content-evenly",
        className,
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
    const itemId = "item-" + index;
    return (
      <li key={itemId} className="mb-6 font-medium capitalize">
        {el}
      </li>
    );
  });

  return (
    <div
      className={cn(
        "my-2 mr-auto flex min-w-[30%] flex-1 flex-wrap",
        className,
      )}
    >
      <h3 className="relative mb-3 flex w-full items-center text-lg font-semibold">
        <span className="about-icon">{icon}</span>
        {title}
      </h3>
      <ul className="ml-9 mt-3 flex list-[circle] flex-wrap content-evenly gap-x-8 gap-y-2 text-base lg:gap-x-8">
        {listing}
      </ul>
    </div>
  );
}

export { AboutMenu, AboutItem };
