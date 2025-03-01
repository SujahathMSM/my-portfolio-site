
import React, { useEffect, useRef } from 'react';
import SectionHeading from './ui/SectionHeading';
import ProjectCard from './ui/ProjectCard';

const projects = [
  {
    id: 1,
    title: 'Location Tracking System – WheresNow App',
    description: 'Real-time location tracking app with crash detection, geofencing, and secure messaging. Built with a React Native frontend and Vue.js for web integration.',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['React Native', 'Vue.js', 'Java', 'Firebase', 'Google Maps API'],
    link: '#'
  },
  {
    id: 2,
    title: 'Weather API Application',
    description: 'Weather forecasting app with JWT-secured authentication for personalized weather data access. Features RESTful APIs and GraphQL endpoints.',
    image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Node.js', 'Nest.js', 'PostgreSQL', 'AWS (EC2, Lambda, S3)'],
    link: '#'
  },
  {
    id: 3,
    title: 'Flood Risk Assessment Using Machine Learning',
    description: 'AI-powered flood risk prediction model using satellite imagery, GIS, and climate data, increasing early warning accuracy by 20%.',
    image: 'https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    technologies: ['Python', 'TensorFlow', 'GIS', 'PostgreSQL', 'OpenCV'],
    link: '#'
  }
];

const Projects = () => {
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
      id="projects"
      ref={sectionRef}
      className="py-20 bg-secondary/50 relative"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-10"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="animate-on-scroll text-center">
          <SectionHeading
            title="Featured Projects"
            subtitle="Showcasing my technical expertise and problem-solving abilities"
            center
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="animate-on-scroll" 
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                technologies={project.technologies}
                link={project.link}
              />
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12 animate-on-scroll">
          <a 
            href="https://github.com/SujahathMSM" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white hover:bg-primary text-foreground hover:text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 border border-border shadow-sm hover:shadow-md"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="mr-2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
            See More Projects on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
