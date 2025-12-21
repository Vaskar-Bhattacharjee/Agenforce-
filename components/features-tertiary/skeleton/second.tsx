import { CardSkeleton } from "@/components/features/card";
import { cn } from "@/lib/utils";
import { IconPointerFilled } from "@tabler/icons-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Paragraph } from "./comp";
import Subheading from "@/components/ui/subheading";


export const Second = ({ className }: { className?: string }) => {

  return (
    <div className={cn("p-4", className)}>
      <Subheading className="py-0">Multi-agent orchestration</Subheading>
      <Paragraph>Coordinate multiple agents across workflows using memory, interrupts, and conditional logic.</Paragraph>
      <CardSkeleton className="h-[calc(100%-100px)] md:h-full w-fit lg:min-w-full flex flex-col gap-y-2.5 justify-center items-center mask-r-from-80% mask-b-from-80% mask-t-from-70% mask-l-from-80% md:-mt-10 relative">
        <Admin />
        <ContentHead />
        <div className="grid grid-cols-4 gap-2">
          <Item />
          <Item
            className="border-0"
            src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            className="border-0"
            src="https://images.unsplash.com/photo-1615109398623-88346a601842?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item />
        </div>

        <div className="grid grid-cols-5 gap-1.5">
          <Item />
          <Item
            className="border-0"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item className="border-0" childrenBg="bg-white">
            <InsideCircle className="stroke-neutral-600 size-9.5 " />
          </Item>
          <Item
            className="border-0"
            src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item />
        </div>
        <div className="grid grid-cols-4 gap-2">
          <Item />
          <Item
            className="border-0"
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item
            className="border-0"
            src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <Item />
        </div>
      </CardSkeleton>
    </div>
  );
};

const getRandomDuration = () => Math.random() * 0.8 + 0.5;
const getRandomDelay = () => Math.random() * 0.5;
export const Item = ({
  className,
  src,
  children,
  childrenBg,
}: {
  className?: string;
  src?: string;
  children?: React.ReactNode;
  childrenBg?: string;
}) => {
  
  
  return (
    <div
      className={cn(
        "size-17 md:size-20 border border-dashed border-neutral-300 dark:border-neutral-600 rounded-xl overflow-hidden relative",
        "[--pattern-fg:var(--color-neutral-950)]/8 dark:[--pattern-fg:var(--color-neutral-50)]/10",
        className
      )}
    >
      {src && (
        <motion.div
          initial={{ opacity: 0, filter: "blur(10px)" }}
          whileInView={{ opacity: 1, filter: "blur(0px)" }}
          transition={{
            duration: getRandomDuration(),
            delay: getRandomDelay(),
          }}
          className="h-full p-[2.8px]  hover:transition-all hover:duration-300  cursor-pointer w-full bg-linear-to-br from-blue-400 via-transparent to-blue-400 hover:bg-linear-to-br hover:from-blue-700 hover:via-transparent hover:to-blue-700 flex items-center justify-center overflow-hidden z-10"
        >
          <Image
            src={src}
            alt="icon"
            width={100}
            height={100}
            className="object-cover z-12 w-full h-full rounded-[12px] overflow-hidden"
            style={{
              boxShadow: "inset 0 0 0 3px rgba(59, 130, 246, 0.5)",
            }}
          />
        </motion.div>
      )}

      {!src && children && (
        <div className="h-full p-[2.8px] w-full bg-linear-to-br from-blue-500 via-transparent to-blue-500 flex items-center justify-center overflow-hidden z-10">
          <div
            className={cn(
              "z-12 w-full h-full rounded-[12px] overflow-hidden flex items-center justify-center",
              childrenBg
            )}
          >
            {children}
          </div>
        </div>
      )}

      <div className="absolute inset-0 bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed -z-10"></div>
    </div>
  );
};

export const InsideCircle = ({ className }: { className?: string }) => {
  return (
    <svg
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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

export const Admin = () => {
  return (
    <div className="absolute flex flex-col items-center gap-1 top-10 md:top-25 -left-2 md:left-9 z-20 ">
      <div className="flex items-center justify-end w-28 h-4">
        <IconPointerFilled className="rotate-y-180 -rotate-z-20 text-neutral-500 dark:text-gray-300" />
      </div>
      <p className="text-neutral-50 dark:text-neutral-50 bg-gray-500 border border-neutral-400 dark:border-neutral-700 px-6 py-0.5 rounded-xl z-50 shadow-2xl">
        Admin
      </p>
    </div>
  );
};

export const ContentHead = () => {
  return (
    <div className="absolute flex flex-col items-center gap-1 top-50  md:top-73 -right-15 md:-right-4  z-20">
      <div className="flex items-center justify-start w-40 h-4">
        <IconPointerFilled className=" -rotate-z-20 text-neutral-500 dark:text-gray-300" />
      </div>
      <p className="text-neutral-50 dark:text-neutral-50 bg-gray-500 border border-neutral-400 dark:border-neutral-700 px-6 py-0.5 rounded-xl z-50 shadow-2xl">
        {" "}
        Content Head
      </p>
    </div>
  );
};
