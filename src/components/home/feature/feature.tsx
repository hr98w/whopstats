import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
} from '@tabler/icons-react';

export function FeaturesSection() {
  const features = [
    {
      title: 'Built for creators',
      description: 'Built for creators, sellers, indiehackers, thinkers and doers.',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Timely Updates',
      description: 'Our dataset is refreshed weekly, ensuring you always have access to the latest data.',
      icon: <IconEaseInOut />,
    },
    {
      title: 'Flexible Plans',
      description: 'We offer flexible monthly and lifetime plans to fit your needs.',
      icon: <IconCurrencyDollar />,
    },
    {
      title: 'Lifetime Commitment',
      description: 'If we ever stop providing updates, we will deliver the complete codebase and documentation to you.',
      icon: <IconCloud />,
    },
    {
      title: 'Exclusive Insights',
      description: 'Beyond sales and reviews, we provide estimated revenue and sort/filter functionalities.',
      icon: <IconRouteAltLeft />,
    },
    {
      title: 'Customer Support',
      description: 'If you are facing any issues, I will be available to help you through twitter and email.',
      icon: <IconHelp />,
    },
    {
      title: 'Revenue Estimations',
      description: 'WhopStats estimates revenues for all products, get a true sense of what’s working in the market.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Built for you with love',
      description: 'If you have any ideas or suggestions, please let us know.',
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">{description}</p>
    </div>
  );
};
