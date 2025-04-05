
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50" />
        <div className="absolute top-20 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-0">
        <div className="max-w-3xl animate-slide-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Hi, I'm <span className="text-primary">Akshit</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-gray-700 mb-8">
            Frontend Developer
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">
            I create responsive websites with engaging user experiences.
            Let's build something together.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button 
              onClick={scrollToAbout} 
              className="px-8 py-6 text-lg"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-6 text-lg"
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Button 
          variant="ghost" 
          size="icon" 
          onClick={scrollToAbout}
          className="rounded-full h-12 w-12"
        >
          <ArrowDown />
        </Button>
      </div>
    </section>
  );
};

export default Hero;
