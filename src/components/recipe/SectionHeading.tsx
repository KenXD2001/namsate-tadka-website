import type { ReactNode } from 'react';

interface SectionHeadingProps {
  title: string;
  action?: ReactNode;
}

export function SectionHeading({ title, action }: SectionHeadingProps) {
  return (
    <div className="mb-10 md:mb-14 flex items-center justify-between">
      <h2 className="font-display text-3xl md:text-4xl font-semibold text-charcoal-900 tracking-tight">
        {title}
      </h2>
      {action}
    </div>
  );
}
