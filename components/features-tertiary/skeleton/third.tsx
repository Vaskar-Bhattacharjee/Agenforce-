"use client";
import { cn } from "@/lib/utils";
import { Header, Paragraph } from "./comp";
import { CardSkeleton } from "@/components/features/card";
import { motion } from "framer-motion";
import {
  IconClipboardText,
  IconDropletCheck,
  IconFeatherFilled,
  IconSettingsCheck,
} from "@tabler/icons-react";
import { useState } from "react";

const items = [
  {
    icon: <IconSettingsCheck className="size-4 text-teal-800" />,
    icon2: <IconSettingsCheck className="size-6 text-teal-800" />,

    bgColor: "bg-teal-500",
    cardBg: "bg-teal-200",
    title: "Brand and Style",
    subtitle: "Tone Guidelines",
    description:
      "Use a light, conversational style with simple language, steering clear of formal phrasing or industry-specific terms.",
  },
  {
    icon: <IconClipboardText className="size-4 text-blue-500" />,
    icon2: <IconClipboardText className="size-6 text-blue-500" />,
    bgColor: "bg-blue-100",
    cardBg: "bg-blue-50",
    title: "Compliance & policy",
    subtitle: "Tone Guidelines",
    description:
      "Use a light, conversational style with simple language, steering clear of formal phrasing or industry-specific terms.",
  },
  {
    icon: <IconFeatherFilled className="size-4 text-purple-500" />,
    icon2: <IconFeatherFilled className="size-6 text-purple-500" />,
    bgColor: "bg-purple-100",
    cardBg: "bg-purple-50",
    title: "Content Safety Filters",
    subtitle: "Tone Guidelines",
    description:
      "Use a light, conversational style with simple language, steering clear of formal phrasing or industry-specific terms.",
  },
  {
    icon: <IconDropletCheck className="size-4 text-green-500" />,
    icon2: <IconDropletCheck className="size-6 text-green-500" />,
    bgColor: "bg-green-100",
    cardBg: "bg-green-50",
    title: "Approval triggers",
    subtitle: "Tone Guidelines",
    description:
      "Use a light, conversational style with simple language, steering clear of formal phrasing or industry-specific terms.",
  },
];

export const Third = ({ className }: { className?: string }) => {
  const [selected, setSelected] = useState(items[0]);

  return (
    <div className={cn("p-4", className)}>
      <Header> Guardrail Engine</Header>
      <Paragraph>
        {" "}
        Applies brand, tone, and policy checks before output goes live.
      </Paragraph>
      <CardSkeleton className="mt-10 md:mt-0 overflow-visible -ml-5 md:ml-12">
        <div className="flex flex-wrap gap-3 items-center justify-center mb-4">
          {items.map((item, index) => (
            <button
              onClick={() => setSelected(item)}
              key={index}
              className={`flex items-center shadow-md justify-center ${item.bgColor} cursor-pointer rounded-md px-2 py-1.5 gap-1  focus:scale-98 transition duration-200 `}
            >
              {item.icon}
              <p
                className={cn(
                  "text-xs font-medium",
                  {
                    "text-neutral-800 dark:text-neutral-900  transition duration-300":
                      item.title === selected.title,
                  },
                  {
                    "text-neutral-500 dark:text-neutral-500":
                      item.title !== selected.title,
                  }
                )}
              >
                {" "}
                {item.title}
              </p>
            </button>
          ))}
        </div>
        <motion.div
        key={selected.title}
        className="bg-gray-200  dark:bg-neutral-700 rounded-xl md:mx-auto min-h-70 w-90 ml-0 md:-ml-3  md:min-w-[calc(100%+0rem)] p-2 md:p-3">
          <Card index={0} className={`p-4 ${selected.cardBg}`}>
            <motion.div
              
              initial={{ opacity: 0, backdropFilter: "blur(15px)" }}
              animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
              transition={{ duration: 0.8 }}
              className={cn(
                "flex items-center justify-center rounded-md border border-gray-300 dark:border-neutral-600 w-6 h-6 md:w-8 md:h-8 px-1 ml-4 mt-6"
              )}
            >
              {selected.icon2}
            </motion.div>

            <motion.div
              
              className="mt-6"
            >
              <motion.h2
              
              initial={{ opacity: 0, filter: "blur(15px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ delay: 0.2 }}
              className="font-semibold">{selected.title}</motion.h2>
              <div className="flex flex-col mt-2 gap-1 mb-2">
                <h3 className="font-semibold text-neutral-500 text-[12px] md:text-[14px]">
                  {selected.subtitle}
                </h3>
                <motion.div
                  
                  initial={{ opacity: 0, backdropFilter: "blur(15px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                
                className="border border-dashed px-2 py-1 border-neutral-300 dark:border-neutral-600 rounded-md w-60 md:w-full">
                  <motion.p
                  
                  initial={{ opacity: 0, backdropFilter: "blur(15px)" }}
                  animate={{ opacity: 1, backdropFilter: "blur(0px)" }}
                  transition={{ duration: 0.8 }}
                  
                  className="text-xs md:text-sm text-neutral-500">
                    {selected.description}
                  </motion.p>
                </motion.div>
              </div>
              <Token key={selected.title} />
            </motion.div>
          </Card>
        </motion.div>
      </CardSkeleton>
    </div>
  );
};

export const Token = (
  { key }: { key?: string }
) => {
  return (
    <motion.div
    
    className="flex gap-1 w-fit mt-4">
      <motion.div
      key={key}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      className="bg-neutral-50 dark:bg-neutral-800 flex justify-center items-center border border-neutral-400 hover:border-neutral-900 rounded-lg px-0  md:px-2 py-0.5 gap-1 cursor-pointer group">
        <div className="size-4 md:size-5 flex justify-center items-center group-hover:-translate-x-1 transition duration-200">
          <Sales className="size-4md:size-5 text-orange-500" />
        </div>
        <p className="text-xs font-display  group-hover:-translate-x-1 transition duration-200">
          {" "}
          Salesforce
        </p>
      </motion.div>

      <motion.div
      key={key}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
      
      className="bg-neutral-50 dark:bg-neutral-800 flex justify-center items-center border border-neutral-400 hover:border-neutral-900 rounded-lg  px-2 py-0.5 gap-1 cursor-pointer group">
        <div className="size-5 flex justify-center items-center group-hover:-translate-x-1 transition duration-200">
          <Sheets className="size-5 text-green-500" />
        </div>
        <p className="text-xs font-display  group-hover:-translate-x-1 transition duration-200">
          {" "}
          Sheets
        </p>
      </motion.div>

      <motion.div
      key={key}
      initial={{ opacity: 0, y: 5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2
      
       }}
      
      className="bg-neutral-50 dark:bg-neutral-800 flex justify-center items-center border border-neutral-400 hover:border-neutral-900 rounded-lg  px-2 py-0.5 gap-1 cursor-pointer group">
        <div className="size-5 flex justify-center items-center group-hover:-translate-x-1 transition duration-200">
          <Hub className="size-5 text-green-500" />
        </div>
        <p className="text-xs font-display  group-hover:-translate-x-1 transition duration-200">
          {" "}
          Hubspot
        </p>
      </motion.div>
    </motion.div>
  );
};

export const SkeletonOne = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "p-4 bg-neutral-200 max-w-sm mx-auto absolute w-full h-full inset-x-0 rounded-t-lg border border-neutral-200",
        className
      )}
    >
      {children}
    </div>
  );
};
export const Card = ({
  className,
  children,
  index,
}: {
  className?: string;
  children: React.ReactNode;
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2 }}
      className={cn(
        "bg-neutral-100 h-full  dark:bg-neutral-800 rounded-lg flex border border-neutral-300   gap-4 items-start",
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const ConnectData = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
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
      <path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5z" />
      <path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5z" />
      <path d="M3 21l2.5 -2.5" />
      <path d="M18.5 5.5l2.5 -2.5" />
      <path d="M10 11l-2 2" />
      <path d="M13 14l-2 2" />
    </svg>
  );
};

export const Setting = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
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
      <path d="M11.445 20.913a1.665 1.665 0 0 1 -1.12 -1.23a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.31 .318 1.643 1.79 .997 2.694" />
      <path d="M15 19l2 2l4 -4" />
      <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
    </svg>
  );
};

export const Error = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
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
      <path d="M9 9v-1a3 3 0 0 1 6 0v1" />
      <path d="M8 9h8a6 6 0 0 1 1 3v3a5 5 0 0 1 -10 0v-3a6 6 0 0 1 1 -3" />
      <path d="M3 13l4 0" />
      <path d="M17 13l4 0" />
      <path d="M12 20l0 -6" />
      <path d="M4 19l3.35 -2" />
      <path d="M20 19l-3.35 -2" />
      <path d="M4 7l3.75 2.4" />
      <path d="M20 7l-3.75 2.4" />
    </svg>
  );
};

export const Sales = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
      <path d="M9 3m0 2a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2z" />
      <path d="M14 11h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
      <path d="M12 17v1m0 -8v1" />
    </svg>
  );
};

export const Hub = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M2 15h10v5h5v-5h5v-5h-10v-5h-5v5h-5z" />
      <path d="M7 15v-5h5v5h5v-5" />
    </svg>
  );
};

export const Sheets = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M14 3v4a1 1 0 0 0 1 1h4" />
      <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
      <path d="M8 11h8v7h-8z" />
      <path d="M8 15h8" />
      <path d="M11 11v7" />
    </svg>
  );
};
