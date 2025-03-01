
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { left, top, width, height } = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const moveX = (x - 0.5) * 15;
      const moveY = (y - 0.5) * 15;
      
      const highlight = document.querySelector('.hero-highlight') as HTMLElement;
      if (highlight) {
        highlight.style.transform = `translate(${moveX}px, ${moveY}px)`;
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      ref={heroRef}
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=3882&q=80" 
          alt="Background" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/90 backdrop-blur-sm"></div>
      </div>
      
      <div className="absolute inset-0 overflow-hidden">
        <div className="hero-highlight absolute top-1/4 left-1/4 w-1/2 h-1/2 bg-primary/5 rounded-full filter blur-[100px] transition-transform duration-300 ease-out"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative inline-block mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            <span className="inline-block py-1 px-4 bg-primary/10 text-primary text-sm font-medium rounded-full">
              Full-Stack Software Engineer
            </span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance animate-fade-in opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            Hello, I'm <span className="text-primary">Sujahath</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto text-balance leading-relaxed animate-fade-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            Crafting scalable applications with Java, JavaScript, React Native, Node.js, and Cloud Computing. Specializing in seamless mobile and web solutions with efficient backend integration.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
            <a 
              href="#projects" 
              className="bg-primary hover:bg-primary/90 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="bg-secondary hover:bg-secondary/80 text-foreground font-medium py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
            >
              Contact Me
            </a>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
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
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <polyline points="19 12 12 19 5 12"></polyline>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
