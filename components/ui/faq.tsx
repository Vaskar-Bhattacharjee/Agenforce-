import { IconMinus, IconPlus } from "@tabler/icons-react";
import Container from "./container";
import Heading from "./header";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const FAQ_DATA = [
  {
    question: "What is Agenforce AI?",
    answer:
      "Agenforce AI is an advanced AI platform that enables users to create, deploy, and manage intelligent agents for various applications, enhancing productivity and automation.",
  },
  {
    question: "Who is Agenforce AI built for?",
    answer:
      "Agenforce AI is designed for businesses, developers, and organizations looking to leverage AI technology to automate tasks, improve decision-making, and enhance customer experiences.",
  },
  {
    question: "How does Agenforce AI work?",
    answer:
      "Agenforce AI utilizes machine learning algorithms and natural language processing to create intelligent agents that can perform specific tasks, interact with users, and learn from data over time.",
  },
  {
    question: "Is there any free trial?",
    answer:
      "Yes, Agenforce AI offers a 14-day free trial for new users to explore the platform's features and capabilities before committing to a subscription plan.",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We provide 24/7 customer support through various channels, including email, live chat, and phone support, to assist users with any questions or issues they may encounter.",
  },
];

export const FAQs = () => {
  return (
    <section className="pt-10 md:pt-16 lg:pt-32 pl-20">
      <Container className="flex flex-col items-start text-center gap-4  ">
        <FAQIcon />

        <Heading className="mb-4 lg:mb-10">Frequently Asked Questions</Heading>
        <FAQData />
      </Container>
    </section>
  );
};

export const FAQData = () => {
  const [isOpenIndex, setIsOpenIndex] = useState<number | null>(null);

  return (
    <>
      {FAQ_DATA.map((faq, index) => (
        <div
          key={index}
          onClick={() => setIsOpenIndex(isOpenIndex === index ? null : index)}
          className=" flex flex-col gap-3 px-6 py-6 mb-6 border-b border-neutral-300 w-[calc(100%-12rem)] select-none  cursor-pointer"
        >
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpenIndex === index ? "auto" : 0, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex justify-between items-center gap-2 w-full"
          >
            <h1 className="text-left text-neutral-800 dark:text-neutral-200 text-xl lg:text-2xl font-semibold select-none">
              {faq.question}
            </h1>
            <div className="w-6 h-6 cursor-pointer  rounded-full flex justify-center items-center">
              <IconMinus
                className={cn(
                  "text-black dark:text-white transition-transform duration-200 ease-in-out",
                  isOpenIndex !== index
                    ? "rotate-90 opacity-0"
                    : "rotate-0 opacity-100"
                )}
              />
              <IconPlus
                className={cn(
                  "text-black dark:text-white absolute transition-transform duration-200 ease-in-out",
                  isOpenIndex === index
                    ? "rotate-45 opacity-0"
                    : "rotate-0 opacity-100"
                )}
              />
            </div>
          </motion.div>
         <motion.div
            initial={false}
            animate={{
              height: isOpenIndex === index ? "auto" : 0,
              opacity: 1
            }}
            exit={{
              height: 0,
              opacity: 0
            }}
            transition={{ duration: 0.2 }}
         className="flex flex-col justify-between items-start   overflow-hidden">
            <motion.p
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1
            }}
            transition={{ delay: 0.2 }}
            className={cn(
              "text-neutral-600 dark:text-neutral-400 text-left hidden select-none w-200",
              isOpenIndex === index && "block"
            )}
          >
            {faq.answer}
          </motion.p>
         </motion.div>
          
        </div>
      ))}
    </>
  );
};

export const FAQIcon = () => {
  return (
    <svg
      width="72"
      height="72"
      viewBox="0 0 72 72"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.2031 46C24.2783 46 29.2031 41.0751 29.2031 35C29.2031 28.9249 24.2783 24 18.2031 24C12.128 24 7.20312 28.9249 7.20312 35C7.20312 41.0751 12.128 46 18.2031 46Z"
        fill="currentColor"
      />

      <path
        d="M18.2058 50C9.97778 50 2.72178 55.248 0.149781 63.064C-0.150219 63.98 0.00578082 64.98 0.569781 65.76C1.13378 66.54 2.03778 67 2.99778 67H33.4058C34.3658 67 35.2738 66.54 35.8338 65.76C36.3938 64.98 36.5578 63.98 36.2538 63.064C33.6858 55.248 26.4338 50 18.1978 50H18.2058Z"
        fill="currentColor"
      />

      <path
        opacity={0.2}
        d="M63 0H41C36.04 0 32 4.036 32 9V23C32 27.624 35.508 31.444 40 31.944V41C40 42.236 40.756 43.348 41.916 43.796C42.268 43.932 42.636 44 43 44C43.824 44 44.632 43.66 45.212 43.028L55.32 32H63C67.96 32 72 27.964 72 23V9C72 4.036 67.96 0 63 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
