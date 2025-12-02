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

  return (
    <Tag
      {...props}
      className={cn(
        "text-2xl md:text-4xl lg:text-6xl font-bold font-display tracking-tight",
        
        className
      )}
    >
      {children}
    </Tag>
  );
}
