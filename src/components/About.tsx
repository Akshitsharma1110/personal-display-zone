
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { User, Briefcase, ArrowRight } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Here you'll find more information about me, what I do, and my current skills
            in terms of programming and technology
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <User className="mr-3 text-primary" size={24} />
              Get to know me!
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a <span className="font-medium">Frontend Web Developer</span> building the
                front-end of websites and web applications that leads to the success
                of the overall product. Check out some of my work in the Projects section.
              </p>
              <p>
                I also like sharing content related to what I've learned over the years
                in web development so it can help other people in the community.
                Feel free to connect or follow me on my LinkedIn where I post useful content.
              </p>
              <p>
                I'm open to job opportunities where I can contribute, learn and grow.
                If you have a good opportunity that matches my skills and experience
                then don't hesitate to contact me.
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Briefcase className="mr-3 text-primary" size={24} />
              Experience
            </h3>
            
            <div className="space-y-8">
              {[
                {
                  period: "2020 - Present",
                  role: "Senior Frontend Developer",
                  company: "Tech Solutions Inc.",
                  description: "Lead developer on multiple client projects, focusing on responsive design and performance optimization."
                },
                {
                  period: "2018 - 2020",
                  role: "UI/UX Designer",
                  company: "Creative Agency",
                  description: "Designed user interfaces for web and mobile applications using Figma and Adobe XD."
                },
                {
                  period: "2016 - 2018",
                  role: "Junior Web Developer",
                  company: "Web Innovators",
                  description: "Developed and maintained client websites using modern frontend technologies."
                }
              ].map((job, index) => (
                <Card key={index} className="border-l-4 border-l-primary">
                  <CardContent className="pt-6">
                    <p className="text-sm text-gray-500 mb-1">{job.period}</p>
                    <h4 className="text-xl font-semibold mb-1">{job.role}</h4>
                    <p className="text-primary font-medium mb-3">{job.company}</p>
                    <p className="text-gray-600">{job.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
