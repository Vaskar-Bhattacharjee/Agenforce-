import { cn } from "@/libs/utils";
import React from "react";

type HeaderLevel = "h1" | "h2";

interface HeaderProps {
  as?: HeaderLevel;            // Default is h1
  className?: string;
  children: React.ReactNode;
}

export default function Heading({
  className,
  children,
  ...props
}: HeaderProps) {

  

  return (
    <h1
      {...props}
      className={cn(
        "font-display tracking-tight text-4xl md:text-4xl lg:text-5xl font-bold",
        className
      )}
    >
      {children}
    </h1>
  );
}