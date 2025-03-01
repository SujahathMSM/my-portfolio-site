
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import SectionHeading from './ui/SectionHeading';

const experiences = [
  {
    id: 1,
    role: 'Software Engineer (Intern)',
    company: 'CodeScale',
    period: 'Jul 2024 – Present',
    location: 'Colombo, Sri Lanka',
    description: [
      'Developed and enhanced WheresNow, a real-time location-tracking app with live tracking, crash detection, and messaging, improving user engagement and reliability.',
      'Built high-quality React Native frontends and contributed to Vue.js components, ensuring responsive UI/UX and smooth animations.',
      'Implemented backend logic using Node.js (Express.js, Nest.js), Java, and Firebase, focusing on REST API development and microservices architecture.',
      'Integrated PostgreSQL alongside MongoDB, improving database efficiency and implementing optimized SQL queries.',
      'Designed and deployed scalable RESTful APIs and GraphQL endpoints, enhancing system interoperability.',
      'Worked with Git, GitHub, and GitLab for version control, managing CI/CD pipelines (GitHub Actions, Jenkins) for automated deployment and testing.',
    ]
  },
  {
    id: 2,
    role: 'Trainee Engineer',
    company: 'Lanka Hydraulic Institute',
    period: 'Jan 2023 – Jun 2023',
    location: 'Moratuwa, Sri Lanka',
    description: [
      'Processed and visualized datasets using Python (Pandas, NumPy, Matplotlib) and Mike Zero for hydrodynamic modeling.',
      'Created coastal simulations using ArcGIS to optimize environmental decision-making.',
      'Conducted data preprocessing, handling missing values and inconsistencies for improved model accuracy.',
      'Worked with PostgreSQL databases for structured data storage and retrieval, optimizing queries for large-scale analysis.',
    ]
  }
];

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-20 relative"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-5"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="animate-on-scroll text-center">
            <SectionHeading
              title="Work Experience"
              subtitle="My professional journey"
              center
            />
          </div>
          
          <div className="relative mt-16">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-px bg-border"></div>
            
            {/* Experience items */}
            {experiences.map((exp, index) => (
              <div 
                key={exp.id}
                className={cn(
                  "mb-16 relative animate-on-scroll",
                  index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto md:ml-0' : 'md:pl-12 md:ml-auto md:mr-0'
                )}
                style={{ 
                  transitionDelay: `${index * 0.2}s`,
                  maxWidth: 'calc(50% - 32px)',
                  width: '100%'
                }}
              >
                {/* Timeline dot */}
                <div 
                  className="absolute top-0 left-0 md:left-auto md:right-0 md:transform md:translate-x-1/2 w-5 h-5 rounded-full bg-primary shadow-md" 
                  style={{ 
                    right: index % 2 === 0 ? 'auto' : '100%',
                    left: index % 2 === 0 ? '100%' : 'auto',
                    transform: index % 2 === 0 ? 'translateX(-50%)' : 'translateX(50%)'
                  }}
                ></div>
                
                {/* Content */}
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border/50 relative">
                  <div className="absolute top-6 w-4 h-4 transform rotate-45 bg-white border border-border/50"
                    style={{ 
                      right: index % 2 === 0 ? '-8px' : 'auto',
                      left: index % 2 === 0 ? 'auto' : '-8px',
                      borderTop: index % 2 === 0 ? 'none' : '1px solid rgba(220, 220, 230, 0.5)',
                      borderRight: index % 2 === 0 ? 'none' : '1px solid rgba(220, 220, 230, 0.5)',
                      borderBottom: index % 2 === 1 ? 'none' : '1px solid rgba(220, 220, 230, 0.5)',
                      borderLeft: index % 2 === 1 ? 'none' : '1px solid rgba(220, 220, 230, 0.5)'
                    }}
                  ></div>
                  
                  <span className="inline-block text-sm font-medium text-muted-foreground mb-2">
                    {exp.period}
                  </span>
                  <h3 className="text-xl font-semibold mb-1">{exp.role}</h3>
                  <h4 className="text-lg text-primary mb-2">{exp.company}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{exp.location}</p>
                  
                  <ul className={cn(
                    "space-y-2 text-sm text-foreground/80", 
                    index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                  )}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start md:items-center">
                        <span 
                          className={cn(
                            "text-primary mr-2 text-lg", 
                            index % 2 === 0 ? 'md:hidden' : ''
                          )}
                        >•</span>
                        <span>{item}</span>
                        <span 
                          className={cn(
                            "text-primary ml-2 text-lg", 
                            index % 2 === 0 ? 'md:block' : 'hidden'
                          )}
                        >•</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
