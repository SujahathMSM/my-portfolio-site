
import React from 'react';
import { cn } from '@/lib/utils';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link?: string;
  className?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  technologies,
  link,
  className,
}) => {
  return (
    <div 
      className={cn(
        "group rounded-xl overflow-hidden bg-white border border-border/50 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      <div className="relative aspect-[16/9] overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="absolute bottom-4 right-4 bg-white text-foreground font-medium py-2 px-4 rounded-lg shadow-md scale-0 group-hover:scale-100 transition-transform duration-300 origin-bottom-right"
          >
            View Project
          </a>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-muted-foreground mb-4">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs font-medium py-1 px-2 bg-secondary text-secondary-foreground rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
