import { cn } from "@/libs/utils";
import React from "react";

type HeaderLevel = "h1" | "h2" | "p";

interface HeaderProps {
  as?: HeaderLevel;            // Default is h1
  className?: string;
  children: React.ReactNode;
}

export default function Subheading({
  as = "h2",
  className,
  children,
  ...props
}: HeaderProps) {
  const Tag = as;

  return (
    <Tag
      {...props}
      className={cn(
        "text-base md:text-lg py-8 text-neutral-400 dark:text-neutral-600 font-inter max-w-xl tracking-tight",
        
        className
      )}
    >
      {children}
    </Tag>
  );
}
