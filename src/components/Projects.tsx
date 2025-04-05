
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, ArrowRight, ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, and checkout functionality built with React and Node.js.",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      imageUrl: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=E-Commerce+Project",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Task Management App",
      description: "Productivity application that helps users organize tasks, set priorities and track progress. Features drag-and-drop functionality.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      imageUrl: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=Task+Manager",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Portfolio Website",
      description: "A responsive portfolio website with dark mode, smooth animations, and contact form integration. Showcases projects and skills.",
      tags: ["HTML/CSS", "JavaScript", "GSAP", "Netlify"],
      imageUrl: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=Portfolio+Site",
      demoUrl: "#",
      codeUrl: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Weather application that displays current conditions and forecasts based on location. Uses external weather API integration.",
      tags: ["JavaScript", "API", "CSS", "Responsive Design"],
      imageUrl: "https://placehold.co/600x400/3b82f6/FFFFFF/png?text=Weather+App",
      demoUrl: "#",
      codeUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific problem
            or explore new technologies.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-64 object-cover"
              />
              <CardContent className="pt-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center gap-4">
                  <Button asChild variant="outline" size="sm">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm">
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <Github size={16} className="mr-2" /> Source Code
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button asChild variant="outline">
            <a href="#" className="flex items-center">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
