"use client";

import { cn } from "@/lib/utils";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../shadcn-ui/card";
import { useEffect, useState } from "react";
import Link from "next/link";
import Icons, { GitHubIcon } from "./icons";
import { IUser } from "@/lib/user.data";
import { IProjectData } from "@/lib/user.project";
import { Badge } from "../shadcn-ui/badge";

export default function ProjectCard({ data }: { data: IProjectData }) {
  const { title, desc, stack, github, preview, role, status } = data;
  const [stacks, setstacks] = useState<string[]>(stack || [""]);

  let statusColor;

  switch (status) {
    case "done":
      statusColor = "#22bb33";
      break;
    case "ongoing":
      statusColor = "#ff8f00";
      break;
    case "closed":
      statusColor = "#bb2124";
      break;
    default:
      statusColor = "#aaaaaa";
      break;
  }

  return (
    <Card>
      <CardHeader className="relative pb-3">
        <div className="absolute top-[8px] left-[8px] w-3 h-3 rounded-xl bg-slate-200 animate-pulse"></div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="flex gap-3 my-2">
          {role && (
            <Badge
              variant="outline"
              className="uppercase font-medium pointer-events-none rounded"
            >
              {role}
            </Badge>
          )}
          {status && (
            <Badge
              variant="default"
              style={
                {
                  "--status-badge-colour": `${statusColor}`,
                } as React.CSSProperties
              }
              className="uppercase font-medium pointer-events-none rounded border-[--status-badge-colour] text-[--status-badge-colour]"
            >
              {status}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="pb-3">
        <CardDescription className="text-xs font-light mb-2">
          {desc}
        </CardDescription>
        <div className="flex flex-wrap py-2 gap-2">
          {stacks.map((el, i, arr) => {
            if (i < 3) return <ProjectStack key={i} value={el} />;
            else if (i === 3)
              return (
                <ProjectStack
                  className="bg-gray-900 animate-beep-light px-2"
                  key={i}
                  value={`${arr.length - 3}+`}
                />
              );
            else return;
          })}
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        {github && (
          <Link
            href={github}
            className="grid w-8 h-8 rounded-2xl p-0 place-items-center bg-neutral-600"
          >
            <GitHubIcon className="w-7 h-7 mx-auto" />
          </Link>
        )}
        <Link
          href={preview}
          className="flex items-center justify-center h-8 grow text-center uppercase text-sm font-bold bg-neutral-100 text-gray-950 rounded-md transition-colors ease-linear hover:bg-neutral-300"
        >
          Preview
        </Link>
      </CardFooter>
    </Card>
  );
}

function ProjectStack({
  value,
  className,
}: {
  value: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "p-1 text-[10px] font-light w-max h-fit bg-gray-800 uppercase select-none",
        className
      )}
    >
      {value}
    </div>
  );
}
