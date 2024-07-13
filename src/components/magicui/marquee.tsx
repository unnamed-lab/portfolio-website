import React from "react";
import { cn } from "@/lib/utils";

interface MarqueeProps {
  readonly className?: string;
  readonly reverse?: boolean;
  readonly pauseOnHover?: boolean;
  readonly children?: React.ReactNode;
  readonly vertical?: boolean;
  readonly repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className,
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => {
          const itemId = "arr-" + i;
          return (
            <div
              key={itemId}
              className={cn("flex shrink-0 justify-around [gap:var(--gap)]", {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              })}
            >
              {children}
            </div>
          );
        })}
    </div>
  );
}
