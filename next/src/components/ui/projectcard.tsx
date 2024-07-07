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
        <div className="absolute left-[8px] top-[8px] h-3 w-3 animate-pulse rounded-xl bg-slate-200"></div>
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="my-2 flex gap-3">
          {role && (
            <Badge
              variant="outline"
              className="pointer-events-none select-none rounded font-medium uppercase"
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
              className="pointer-events-none select-none rounded border-[--status-badge-colour] font-medium uppercase text-[--status-badge-colour]"
            >
              {status}
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent className="h-auto min-h-[200px] pb-3">
        <CardDescription className="mb-2 text-xs font-light">
          {desc}
        </CardDescription>
        <div className="mt-auto flex flex-wrap gap-[0.333rem] py-2">
          {stack.map((el, i, arr) => {
            if (i < 3) return <ProjectStack key={i} value={el} />;
            else if (i === 3)
              return (
                <ProjectStack
                  className="animate-beep-light bg-gray-900"
                  key={i}
                  value={`${arr.length - 3}+`}
                />
              );
            else return;
          })}
        </div>
      </CardContent>
      <CardFooter className="mt-auto gap-4">
        {github && (
          <Link
            href={github}
            className="grid h-8 w-8 place-items-center rounded-2xl bg-neutral-600 p-0"
          >
            <GitHubIcon className="mx-auto h-7 w-7" />
          </Link>
        )}
        <Link
          href={preview}
          className="flex h-8 grow items-center justify-center rounded-md bg-neutral-100 text-center text-sm font-bold uppercase text-gray-950 transition-colors ease-linear hover:bg-neutral-300"
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
        "h-fit w-max select-none bg-gray-800 px-2 py-1 text-[10px] font-medium uppercase",
        className,
      )}
    >
      {value}
    </div>
  );
}
