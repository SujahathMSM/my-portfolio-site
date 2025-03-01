
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import SkillTag from './ui/SkillTag';

const skillCategories = [
  {
    id: 1,
    name: 'Languages',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'Java', level: 90 },
      { name: 'Python', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'C#', level: 75 }
    ]
  },
  {
    id: 2,
    name: 'Frontend Development',
    skills: [
      { name: 'Vue.js', level: 85 },
      { name: 'React.js', level: 90 },
      { name: 'Next.js', level: 85 },
      { name: 'TypeScript', level: 85 }
    ]
  },
  {
    id: 3,
    name: 'Backend Development',
    skills: [
      { name: 'Node.js (Express, Nest.js)', level: 90 },
      { name: 'Spring Boot', level: 85 },
      { name: 'Serverless Architecture', level: 80 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'GraphQL', level: 85 },
      { name: 'Microservices', level: 80 }
    ]
  },
  {
    id: 4,
    name: 'Databases',
    skills: [
      { name: 'PostgreSQL', level: 90 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 85 },
      { name: 'Firebase Realtime Database', level: 90 }
    ]
  },
  {
    id: 5,
    name: 'Cloud & DevOps',
    skills: [
      { name: 'AWS (EC2, S3, Lambda, DynamoDB)', level: 85 },
      { name: 'Firebase', level: 90 },
      { name: 'Docker', level: 80 },
      { name: 'Kubernetes', level: 75 },
      { name: 'Terraform', level: 70 }
    ]
  },
  {
    id: 6,
    name: 'Tools and CI/CD',
    skills: [
      { name: 'Git', level: 95 },
      { name: 'GitHub', level: 95 },
      { name: 'GitLab', level: 90 },
      { name: 'GitHub Actions', level: 85 },
      { name: 'Jenkins', level: 80 },
      { name: 'Postman', level: 90 }
    ]
  }
];

const Skills = () => {
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
      id="skills"
      ref={sectionRef}
      className="py-20 relative"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-5"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="animate-on-scroll text-center">
          <SectionHeading
            title="Technical Skills"
            subtitle="My expertise across various technologies"
            center
          />
        </div>
        
        <div className="mt-12 space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div key={category.id} className="animate-on-scroll" style={{ transitionDelay: `${categoryIndex * 0.1}s` }}>
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <span className="inline-block w-8 h-1 bg-primary mr-3"></span>
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillTag 
                    key={`${category.id}-${skillIndex}`} 
                    name={skill.name} 
                    level={skill.level}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
