import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { cn } from '@/lib/utils';

const ProjectCard = ({ project, index, featured = false }) => {
  const completedDate = new Date(project.completedAt);
  const formattedDate = format(completedDate, 'MMMM yyyy', { locale: fr });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 card-hover",
        featured ? "col-span-full md:col-span-2" : "md:col-span-1"
      )}
    >
      <div className="relative aspect-video overflow-hidden">
        <img   
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          alt={`Image du projet ${project.title}`}
          src="https://images.unsplash.com/photo-1650234083177-871b96b6c575" />
        
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
        
        {featured && (
          <div className="absolute top-4 left-4">
            <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
              Projet vedette
            </Badge>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-2">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <Badge key={i} variant="secondary" className="bg-secondary/50 backdrop-blur-sm">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
        </div>
      </div>
      
      <div className="p-5">
        <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
          {project.title}
        </h2>
        
        <p className="text-muted-foreground line-clamp-3 mb-4">
          {project.description}
        </p>
        
        <div className="flex items-center text-xs text-muted-foreground mb-4">
          <Calendar className="h-3 w-3 mr-1" />
          <span>Complété en {formattedDate}</span>
        </div>
        
        <div className="flex flex-wrap gap-2">
          <Button asChild size="sm" variant="default">
            <Link to={`/projects/${project.slug || project.id}`}>
              Voir détails
            </Link>
          </Button>
          
          {project.demoUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="h-4 w-4 mr-1" />
                Démo
              </a>
            </Button>
          )}
          
          {project.repoUrl && (
            <Button asChild size="sm" variant="outline">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="h-4 w-4 mr-1" />
                Code
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;