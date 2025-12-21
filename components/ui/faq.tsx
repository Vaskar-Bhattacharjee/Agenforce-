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
    <section className="pt-10 md:pt-16 lg:pt-32 px-4 md:px-0 ">
      <Container className="flex flex-col items-start text-center gap-4">
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
    <Container className="w-full">
      {FAQ_DATA.map((faq, index) => (
        <div
          key={index}
          onClick={() => setIsOpenIndex(isOpenIndex === index ? null : index)}
          className="flex flex-col gap-3 px-0 md:px-2 py-6 mb-6 border-b border-neutral-300 dark:border-neutral-700 w-full md:w-full select-none cursor-pointer"
        >
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isOpenIndex === index ? "auto" : 0, opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex justify-between items-center gap-2 w-full "
          >
            <h1 className="font-display text-left text-neutral-800 dark:text-neutral-200 text-base md:text-lg lg:text-2xl font-bold select-none">
              {faq.question}
            </h1>
            <div className="w-6 h-6 shrink-0 cursor-pointer rounded-full flex justify-center items-center">
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
            className="flex flex-col justify-between items-start overflow-hidden"
          >
            <motion.p
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1
              }}
              transition={{ delay: 0.2 }}
              className={cn(
                "font-display text-neutral-600 dark:text-neutral-400 text-left text-sm md:text-base hidden select-none w-full md:w-200",
                isOpenIndex === index && "block"
              )}
            >
              {faq.answer}
            </motion.p>
          </motion.div>
        </div>
      ))}
    </Container>
  );
};

// Placeholder for FAQIcon - add your actual icon component
const FAQIcon = () => <div className="w-full" />;