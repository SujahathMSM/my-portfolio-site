
import React from 'react';
import { cn } from '@/lib/utils';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  center = false,
  className,
}) => {
  return (
    <div className={cn(
      'mb-12',
      center && 'text-center',
      className
    )}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl text-balance">
          {subtitle}
        </p>
      )}
      <div className={cn(
        'h-1 w-20 bg-primary mt-6',
        center && 'mx-auto'
      )} />
    </div>
  );
};

export default SectionHeading;
