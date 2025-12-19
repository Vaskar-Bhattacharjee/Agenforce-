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
    <div className="mb-10 w-full h-full flex flex-col gap-4 items-center justify-center">
      <LeftDiv
        dollar="10"
        subText="Perfect for individuals and small teams exploring for automation."
        Checklist={FirstChecklist}
      />
      <LeftDiv
        dollar="60"
        subText="Ideal for growing teams ready to scale automation safely"
        Checklist={SecondChecklist}
      />
    </div>
  );
};

export const LeftDiv = ({
  dollar,
  subText,
  Checklist,
}: {
  dollar: string;
  subText: string;
  Checklist: string[];
}) => {
  return (
    <div className="flex gap-6 items-center justify-center bg-neutral-100 dark:bg-neutral-800 px-8 py-6 rounded-lg h-[calc(100%-10rem)] w-fit">
      <div className="flex flex-col gap-2 ">
        <Heading>
          ${dollar}
          <span className="text-xl text-neutral-500 dark:text-neutral-600">
            /mon
          </span>{" "}
        </Heading>
        <Subheading className="py-3 text-neutral-500 text-sm">
          {subText}
        </Subheading>
        <Button className="w-60 active:scale-98 transition-all duration-200" variant="black">
          {" "}
          Start now
        </Button>
      </div>{" "}
      {/*left div */}
      <ul className="flex flex-col w-full h-full gap-2  *:flex *:gap-2 *:items-center *:font-semibold">
        {Checklist.map((item, index) => (
          <li key={index}>
            <IconCircleCheckFilled className="size-6 text-neutral-600 dark:text-neutral-400" />
            <p className="text-neutral-600 text-sm dark:text-neutral-400">
              <span key={index}>{item}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};
