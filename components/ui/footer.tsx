import Subheading from "./subheading";
import { Button } from "./button";
import { cn } from "@/lib/utils";
import Container from "./container";
import Link from "next/link";
import { IconSend } from "@tabler/icons-react";

export const Footer = () => {
  const Product = [
    {
      title: "Agent simulation",
      href: "#",
    },
    {
      title: "AI workflows",
      href: "#",
    },
    {
      title: "Agent Builder",
      href: "#",
    },
    {
      title: "Analytics dashboard",
      href: "#",
    },
    {
      title: "API integration",
      href: "#",
    },
    {
      title: "Enterprise Solutions",
      href: "#",
    },
  ];
  const Company = [
    {
      title: "About",
      href: "#",
    },
    {
      title: "Blog",
      href: "#",
    },
    {
      title: "Careers",
      href: "#",
    },
    {
      title: "Contact",
      href: "#",
    },
  ];
  return (
    <footer className="flex items-center justify-center relative  w-full h-120 border-t mt-10">
       <div
        className={cn(
          "absolute inset-0 -z-10",
          "mask-t-from-50% mask-b-from-50% mask-r-from-50% mask-l-from-50%",
          "bg-[linear-gradient(to_right,var(--color-neutral-200)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-200)_1px,transparent_1px)]",
          "dark:bg-[linear-gradient(to_right,var(--color-neutral-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900)_1px,transparent_1px)]",
          "bg-size-[40px_40px]" // Correct syntax for background size
        )}
      />
         
      <Container className="grid grid-cols-1 md:grid-cols-5 gap-4 z-10">
        <div className="flex flex-col col-span-2 items-start text-left justify-center gap-4">
          <div className="flex items-start justify-start gap-2">
            <LogoIcon />{" "}
            <h2 className="text-neutral-600 dark:text-neutral-300 text-2xl font-bold">
              Agenforce
            </h2>
          </div>
          <Subheading className="py-0 items-end dark:text-neutral-300">
            {" "}
            Safe, observable, outcome-driven AI.
          </Subheading>
          <Button variant="black">Get Started</Button>
        </div>
        <div>
          <Subheading className="pb-3 font-semibold text-neutral-700 tracking-tight dark:text-neutral-300 font-                                 display">
            Product
          </Subheading>
          <div>
            <ul className="list-none flex flex-col gap-2 justify-center items-start">
              {Product.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-neutral-900 hover:dark:text-neutral-200 text-neutral-500 dark:text-                               neutral-400 font-semibold text-sm"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <Subheading className="pb-3 font-semibold  text-neutral-700 tracking-tight dark:text-neutral-300  font-display">
            Company
          </Subheading>
          <div>
            <ul className="list-none flex flex-col gap-2 justify-center items-start">
              {Company.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href}
                    className="hover:text-neutral-900 hover:dark:text-neutral-200 text-neutral-500 dark:text-                               neutral-400 font-semibold text-sm font-display"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-start ">
          <Subheading className="pb-3 font-semibold text-neutral-700 tracking-tight dark:text-neutral-300">
            {" "}
            Get in touch
          </Subheading>
          <div className="flex gap-2 items-center justify-between border border-neutral-300 dark:border-                            neutral-700 px-2 py-2 rounded-md">
            <input
              type="email"
              className="text-neutral-900dark:text-neutral-300 font-semibold placeholder:text-neutral-500 outline-none"
              placeholder="Enter your email"
            />
            <button
              type="button"
              className={cn(
                "bg-neutral-800 dark:bg-neutral-200 p-2 rounded-[6px] cursor-pointer",
                "active:scale-95 active:duration-0 active:bg-neutral-600 active:dark:bg-neutral-400", // Shrink 
                "transition-transform duration-200" // Grow back SMOOTHLY when released
              )}
            >
              <IconSend className="size-4 text-neutral-50 dark:text-neutral-900" />
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export const LogoIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(
        "w-8 h-8 text-neutral-700 dark:text-neutral-300",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M4 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M7 17l0 .01" />
      <path d="M14 4m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M7 7l0 .01" />
      <path d="M4 14m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z" />
      <path d="M17 7l0 .01" />
      <path d="M14 14l3 0" />
      <path d="M20 14l0 .01" />
      <path d="M14 14l0 3" />
      <path d="M14 20l3 0" />
      <path d="M17 17l3 0" />
      <path d="M20 17l0 3" />
    </svg>
  );
};
