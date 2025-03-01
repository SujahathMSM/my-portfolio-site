
import React from 'react';
import { cn } from '@/lib/utils';

interface SkillTagProps {
  name: string;
  level?: number; // 0-100
  className?: string;
}

const SkillTag: React.FC<SkillTagProps> = ({
  name,
  level = 80,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative overflow-hidden rounded-lg border border-border/50 bg-white p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/30 group",
        className
      )}
    >
      <div className="absolute bottom-0 left-0 h-1 bg-primary" style={{ width: `${level}%` }}></div>
      <p className="font-medium group-hover:text-primary transition-colors">{name}</p>
    </div>
  );
};

export default SkillTag;
