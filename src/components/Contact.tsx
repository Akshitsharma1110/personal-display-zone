
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, Linkedin, Github, Instagram } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulating form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    { icon: Mail, label: 'Email', href: 'mailto:akshitsharma0903@gmail.com' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/' },
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/' }
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Feel free to reach out if you're looking for a developer, have a question,
            or just want to connect.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Your Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={6}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Contact Information</h3>
              <p className="text-gray-600 mb-6">
                Feel free to reach out through any of these platforms, and I'll get back to you as soon as possible.
              </p>
            </div>
            
            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <Card key={index}>
                  <CardContent className="p-4 flex items-center">
                    <div className="bg-primary/10 p-3 rounded-full mr-4">
                      <link.icon className="text-primary h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-medium">{link.label}</p>
                      <a 
                        href={link.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-primary text-sm hover:underline"
                      >
                        {link.label === 'Email' ? 'akshitsharma0903@gmail.com' : `Connect on ${link.label}`}
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div>
              <h4 className="font-bold text-lg mb-2">Location</h4>
              <p className="text-gray-600">San Francisco, California</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
