
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import SectionHeading from './ui/SectionHeading';

const About = () => {
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
      id="about"
      ref={sectionRef}
      className="py-20 bg-secondary/50 relative"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center opacity-10"
        />
      </div>
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="animate-on-scroll">
              <SectionHeading
                title="About Me"
                subtitle="Get to know me better"
              />
            </div>
            
            <div className="space-y-4 animate-on-scroll" style={{ transitionDelay: '0.2s' }}>
              <p className="text-foreground/90 leading-relaxed">
                I'm a Full-Stack Software Engineer with expertise in Java, JavaScript, React Native, Node.js, and Cloud Computing (AWS, Firebase). I'm passionate about building scalable, high-performance applications, specializing in developing mobile and web solutions with seamless backend integration.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                With hands-on experience in CI/CD, DevOps, and AI-driven insights, I ensure efficient and automated development workflows. I have a proven ability to optimize application performance, enhance user experience, and drive scalable software solutions.
              </p>
              
              <p className="text-foreground/90 leading-relaxed">
                I have 1+ years of experience in Full-Stack & Mobile App Development, including machine learning & AI integration. I'm skilled in Agile methodologies, CI/CD pipelines, and cloud infrastructure management.
              </p>
            </div>
            
            <div className="mt-8 grid grid-cols-2 gap-4 animate-on-scroll" style={{ transitionDelay: '0.4s' }}>
              <div>
                <h3 className="text-lg font-semibold mb-2">Education</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>BSc in Engineering, University of Moratuwa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>Diploma in Comprehensive Java Development, ISE</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-2">Contact</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>+9476-485-8427</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <span>sujahathmhmd@gmail.com</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-8 animate-on-scroll" style={{ transitionDelay: '0.6s' }}>
              <a 
                href="#contact" 
                className="inline-flex items-center text-primary font-medium hover:underline"
              >
                Let's Connect
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-5 w-5 ml-1" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-on-scroll">
            <div className="relative p-4">
              <div className="absolute inset-0 bg-primary/5 rounded-lg transform rotate-3"></div>
              <div className="relative bg-white shadow-lg rounded-lg overflow-hidden aspect-[4/3]">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent"></div>
                <img 
                  src="https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Developer coding" 
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 bg-white p-4 shadow-lg rounded-lg glass">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse-subtle"></div>
                  <span className="text-sm font-medium">Available for hire</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
