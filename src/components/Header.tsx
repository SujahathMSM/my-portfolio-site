
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Determine active section
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.scrollY;
      
      sections.forEach(section => {
        // Explicitly cast to HTMLElement to access offsetHeight and offsetTop
        const htmlSection = section as HTMLElement;
        const sectionHeight = htmlSection.offsetHeight;
        const sectionTop = htmlSection.offsetTop - 100;
        const sectionId = section.getAttribute('id') || '';
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out py-4',
        isScrolled ? 'bg-white/80 backdrop-blur-lg shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          className="text-lg md:text-xl font-semibold text-foreground transition-all hover:text-primary"
        >
          Sujahath
          <span className="text-primary">.</span>
        </a>
        
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={cn(
                'text-sm font-medium transition-all duration-200 link-underline',
                activeSection === item.id 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-foreground'
              )}
            >
              {item.label}
            </a>
          ))}
        </nav>
        
        <div className="md:hidden">
          <button 
            className="p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            // Mobile menu functionality would go here
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
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
