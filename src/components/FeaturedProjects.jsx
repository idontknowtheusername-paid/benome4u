import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/lib/projectData';

const FeaturedProjects = () => {
  const featuredProjects = projects.filter(project => project.featured).slice(0, 2);
  
  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-lg"
          >
            <h2 className="text-3xl font-bold mb-4">
              Projets <span className="gradient-text">à la une</span>
            </h2>
            <p className="text-muted-foreground">
              Découvrez mes projets les plus récents et les plus significatifs. Chaque projet est une opportunité d'apprendre et de créer quelque chose d'unique.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Button asChild variant="outline">
              <Link to="/projects">
                Tous les projets
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              featured={true} 
            />
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default FeaturedProjects;