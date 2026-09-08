"use client";

import { cn } from "@/lib/utils";

interface MadhubaniBorderProps {
  className?: string;
  variant?: "top" | "bottom" | "horizontal" | "vertical";
}

export function MadhubaniBorder({ className, variant = "horizontal" }: MadhubaniBorderProps) {
  return (
    <div
      className={cn(
        "flex w-full items-center justify-center opacity-80",
        variant === "vertical" ? "flex-col h-full w-auto" : "w-full",
        className
      )}
      aria-hidden="true"
    >
      <svg
        width={variant === "vertical" ? "20" : "100%"}
        height={variant === "vertical" ? "100%" : "20"}
        viewBox={variant === "vertical" ? "0 0 20 200" : "0 0 200 20"}
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        className={cn(
          "stroke-[var(--color-terracotta)] fill-none stroke-[1.5px]",
          variant === "vertical" ? "h-full w-[20px]" : "w-full h-[20px]"
        )}
      >
        <path
          d={
            variant === "vertical"
              ? "M5,0 L5,200 M15,0 L15,200"
              : "M0,5 L200,5 M0,15 L200,15"
          }
        />
        {/* Abstract pattern inside the double borders simulating Madhubani style crosshatch/dots */}
        {variant === "horizontal" && (
          <pattern
            id="madhubani-h"
            width="20"
            height="10"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(0, 5)"
          >
            <path d="M0,0 L10,10 M10,0 L0,10" className="stroke-[var(--color-terracotta)] opacity-50 stroke-[0.75px]" />
            <circle cx="15" cy="5" r="1.5" className="fill-[var(--color-terracotta)] stroke-none opacity-60" />
          </pattern>
        )}
        {variant === "vertical" && (
          <pattern
            id="madhubani-v"
            width="10"
            height="20"
            patternUnits="userSpaceOnUse"
            patternTransform="translate(5, 0)"
          >
            <path d="M0,0 L10,10 M10,0 L0,10" className="stroke-[var(--color-terracotta)] opacity-50 stroke-[0.75px]" />
            <circle cx="5" cy="15" r="1.5" className="fill-[var(--color-terracotta)] stroke-none opacity-60" />
          </pattern>
        )}
        
        <rect
          x={variant === "vertical" ? "5" : "0"}
          y={variant === "vertical" ? "0" : "5"}
          width={variant === "vertical" ? "10" : "100%"}
          height={variant === "vertical" ? "100%" : "10"}
          fill={`url(#${variant === "vertical" ? "madhubani-v" : "madhubani-h"})`}
          className="stroke-none"
        />
      </svg>
    </div>
  );
}
