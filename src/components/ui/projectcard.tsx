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
import React from "react";
import Link from "next/link";
import { GitHubIcon } from "./icons";
import { IProjectData } from "@/lib/user.project";
import { Badge } from "../shadcn-ui/badge";

export default function ProjectCard({
  data,
}: Readonly<{ data: IProjectData }>) {
  const { title, desc, stack, github, preview, role, status, type } = data;
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

  const roleLabel = role === "founder" ? "Founder / CEO" : role;

  const cardContent = (
    <Card
      className={cn(
        type === "featured" && "border-blue-500/40 bg-blue-500/[0.03]",
      )}
    >
      <CardHeader className="relative pb-3">
        <div
          className={cn(
            "absolute left-[8px] top-[8px] h-3 w-3 animate-pulse rounded-xl",
            type === "featured"
              ? "bg-blue-400"
              : type === "bounty"
                ? "bg-amber-400"
                : type === "private"
                  ? "bg-gray-500"
                  : "bg-slate-200",
          )}
        />
        <CardTitle className="text-lg">{title}</CardTitle>
        <div className="my-2 flex flex-wrap gap-3">
          {role && (
            <Badge
              variant="outline"
              className={cn(
                "pointer-events-none select-none rounded font-medium uppercase",
                type === "featured" &&
                  "border-blue-500 text-blue-400",
              )}
            >
              {roleLabel}
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
          {type === "bounty" && (
            <Badge
              variant="default"
              className="pointer-events-none select-none rounded border-amber-500 font-medium uppercase text-amber-500"
              style={
                {
                  "--status-badge-colour": "#d97706",
                } as React.CSSProperties
              }
            >
              Bounty Submission
            </Badge>
          )}
          {type === "private" && (
            <Badge
              variant="default"
              className="pointer-events-none select-none rounded border-gray-500 font-medium uppercase text-gray-500"
              style={
                {
                  "--status-badge-colour": "#6b7280",
                } as React.CSSProperties
              }
            >
              Private
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
            const itemId = "item-" + i;

            if (i < 3) return <ProjectStack key={itemId} value={el} />;
            else if (i === 3)
              return (
                <ProjectStack
                  className="animate-beep-light bg-gray-900"
                  key={itemId}
                  value={`${arr.length - 3}+`}
                />
              );
            else return;
          })}
        </div>
      </CardContent>
      {github || preview ? (
        <CardFooter className="mt-auto gap-4">
          {github && (
            <Link
              href={github}
              className="grid h-8 w-8 place-items-center rounded-2xl bg-neutral-600 p-0"
            >
              <GitHubIcon className="mx-auto h-7 w-7" />
            </Link>
          )}
          {preview && (
            <Link
              href={preview}
              className="flex h-8 grow items-center justify-center rounded-md bg-neutral-100 text-center text-sm font-bold uppercase text-gray-950 transition-colors ease-linear hover:bg-neutral-300"
            >
              Preview
            </Link>
          )}
        </CardFooter>
      ) : null}
    </Card>
  );

  if (type === "featured") {
    return (
      <div className="relative col-span-full rounded-xl bg-gradient-to-r from-blue-500/20 via-blue-500/10 to-blue-500/20 p-[1px]">
        {cardContent}
      </div>
    );
  }

  return cardContent;
}

function ProjectStack({
  value,
  className,
}: Readonly<{
  value: string;
  className?: string;
}>) {
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
