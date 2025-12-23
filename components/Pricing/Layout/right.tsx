import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/header";
import Subheading from "@/components/ui/subheading";
import { IconCircleCheckFilled } from "@tabler/icons-react";

const FirstChecklist = [
  "1 AI agent included",
  "Standard integrations",
  "Basic Approval Flows",
  "7 Day activity logs",
];
const SecondChecklist = [
  "Upto 5 AI Agents",
  "Multi Agent Orchestration",
  "Advanced Approval Flows",
  "30 Day activity logs",
  "ROI Insights",
];
export const Right = () => {
  return (
    <div className="mb-10 w-full h-full flex flex-col gap-6 items-center justify-center">
      <PriceDiv
        dollar="10"
        btnText="Start free trial"
        subText="Perfect for individuals and small teams exploring for automation."
        Checklist={FirstChecklist}
      />
      <PriceDiv
        dollar="60"
        btnText="Contact sales"
        subText="Ideal for growing teams ready to scale automation safely"
        Checklist={SecondChecklist}
      />
    </div>
  );
};

export const PriceDiv = ({
  dollar,
  subText,
  Checklist,
  btnText,
}: {
  dollar: string;
  subText: string;
  btnText: string;
  Checklist: string[];
}) => {
  return (
    <div className="flex flex-col md:flex-row  gap-4 items-center justify-center bg-neutral-100 dark:bg-neutral-800 px-6 py-6 rounded-lg h-full w-[calc(100%+3rem)]">
      <div className="flex flex-col gap-2 ">
        <Heading>
          ${dollar}
          <span className="text-sm md:text-xl text-neutral-500 dark:text-neutral-600">
            /mo
          </span>{" "}
        </Heading>
        <Subheading className="py-3 text-neutral-500 dark:text-neutral-400 w-70  text-sm">
          {subText}
        </Subheading>
        <Button className="w-60 text-sm font-semibold  active:scale-98 active:duration-0 transition-transform duration-200" variant="black">
          
          {btnText}
        </Button>
      </div>{" "}
      
      <ul className="flex flex-col w-full h-full gap-3  *:flex *:gap-2 *:items-center *:font-semibold">
        {Checklist.map((item, index) => (
          <li key={index}>
            <IconCircleCheckFilled className="size-5 text-neutral-600 dark:text-neutral-400" />
            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              <span key={index}>{item}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
