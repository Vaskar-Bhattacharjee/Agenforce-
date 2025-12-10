import { cn } from "@/libs/utils";
import React from "react";

type HeaderLevel = "h1" | "h2";

interface HeaderProps {
  as?: HeaderLevel;            // Default is h1
  className?: string;
  children: React.ReactNode;
}

export default function Heading({
  as = "h2",
  className,
  children,
  ...props
}: HeaderProps) {
  const Tag = as;

  const headingStyles = {
    h1: "text-4xl md:text-4xl lg:text-5xl font-bold",
    h2:"text-xl md:text-2xl lg:text-5xl text-neutral-800 dark:text-neutral-200 font-bold font-display tracking-tight",
    h3: "text-2xl md:text-3xl lg:text-5xl font-semibold",
    h4: "text-xl md:text-2xl lg:text-4xl font-semibold",
    h5: "text-lg md:text-xl lg:text-3xl font-medium",
    h6: "text-base md:text-lg lg:text-2xl font-medium",
  };

  return (
    <Tag
      {...props}
      className={cn(
        "font-display tracking-tight",
        headingStyles[as],
        className
      )}
    >
      {children}
    </Tag>
  );
}