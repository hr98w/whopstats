import { ArrowUpRight } from 'lucide-react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

type FAQItem = {
  question: string;
  answer: string;
  link?: string;
};

const content: FAQItem[] = [
  {
    question: 'What is WhopStats?',
    answer:
      'WhopStats is a comprehensive dataset that tracks sales and review data for nearly all products listed on Whop. It includes detailed information such as estimated sales, customer reviews, and other useful product insights to help creators and developers make informed decisions.',
  },
  {
    question: 'What is the relationship between WhopStats and Whop?',
    answer:
      'WhopStats is not affiliated with Whop.com. WhopStats is an independent service that provides analytics and insights based on publicly available data from Whop.com. We offer a comprehensive dataset and analysis tools to help creators, developers, and curious individuals understand trends and performance on the Whop platform.',
  },
  {
    question: 'What can I use WhopStats for?',
    answer:
      "WhopStats can be valuable in many ways: If you are a Whop seller, you can research competitors and discover market trends. If you're an indie developer, WhopStats can inspire you to create new products by analyzing successful niches. If you're simply curious, you can explore which products are performing well and identify emerging trends on Whop.",
  },
  {
    question: 'How much data does WhopStats have? How often is it updated?',
    answer:
      'WhopStats contains information on nearly all products listed on Whop. Our data is updated weekly to ensure accuracy and relevance.',
  },
  {
    question: 'How accurate is the data?',
    answer:
      'WhopStats uses a combination of public data and our own proprietary methods to estimate sales and popularity. While no dataset is perfect, we strive to provide accurate and useful information.',
  },
  {
    question: 'Is the Lifetime plan truly guaranteed?',
    answer:
      "Yes, when you choose the Lifetime plan, we guarantee that you'll receive updates indefinitely. If we ever discontinue updates, we will provide you with the complete codebase and documentation to ensure you have full access to all features.",
  },
];

export function FAQ() {
  return (
    <div>
      <div className="px-8 md:px-32 lg:px-48">
        <p className="text-muted-foreground">
          Can&apos;t find the answer you&apos;re looking for? Reach out to me at devhaoran@gmail.com.
        </p>
        <div className="not-prose mt-4 flex flex-col gap-4 md:mt-8">
          {content.map((item, index) => (
            <Accordion key={index} type="single" collapsible>
              <AccordionItem
                value={item.question}
                className="rounded-md border bg-muted/20 px-4 transition-all hover:bg-muted/50"
              >
                <AccordionTrigger className="text-left hover:no-underline">{item.question}</AccordionTrigger>
                <AccordionContent className="text-base text-default-500 md:w-3/4">
                  {item.answer}
                  {item.link && (
                    <a
                      href={item.link}
                      className="mt-2 flex w-full items-center opacity-60 transition-all hover:opacity-100"
                    >
                      Learn more <ArrowUpRight className="ml-1" size="16" />
                    </a>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
}
