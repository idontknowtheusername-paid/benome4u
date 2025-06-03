import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Github } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getProjectByIdOrSlug, getRelatedProjects } from '@/lib/projectData';
import { useToast } from '@/components/ui/use-toast';

const ProjectDetailPage = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [relatedProjects, setRelatedProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      const foundProject = getProjectByIdOrSlug(id);
      
      if (foundProject) {
        setProject(foundProject);
        const related = getRelatedProjects(foundProject);
        setRelatedProjects(related);
      } else {
        toast({
          title: "Projet non trouvé",
          description: "Le projet que vous recherchez n'existe pas.",
          variant: "destructive",
        });
      }
      
      setIsLoading(false);
    }, 500);
  }, [id, toast]);
  
  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
          <p className="mt-4 text-muted-foreground">Chargement du projet...</p>
        </div>
      </div>
    );
  }
  
  if (!project) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Projet non trouvé</h2>
          <p className="text-muted-foreground mb-6">Le projet que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild>
            <Link to="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux projets
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const completedDate = new Date(project.completedAt);
  const formattedDate = format(completedDate, 'MMMM yyyy', { locale: fr });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-12"
    >
      <div className="max-w-4xl mx-auto">
        <Button asChild variant="outline" className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux projets
          </Link>
        </Button>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{project.title}</h1>
          
          <div className="flex items-center text-sm text-muted-foreground mb-6">
            <Calendar className="h-4 w-4 mr-1" />
            <span>Complété en {formattedDate}</span>
          </div>
          
          {project.coverImage && (
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-8">
              <img   
                className="w-full h-full object-cover"
                alt={`Image du projet ${project.title}`}
               src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
            </div>
          )}
          
          {project.technologies && project.technologies.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="flex flex-wrap gap-4 mb-8">
            {project.demoUrl && (
              <Button asChild>
                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Voir la démo
                </a>
              </Button>
            )}
            
            {project.repoUrl && (
              <Button asChild variant="outline">
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Voir le code
                </a>
              </Button>
            )}
          </div>
          
          {project.longDescription && (
            <div className="prose prose-invert max-w-none">
              <div className="whitespace-pre-line">
                {project.longDescription}
              </div>
            </div>
          )}
        </div>
        
        {relatedProjects.length > 0 && (
          <>
            <Separator className="my-12" />
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Projets similaires</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProjects.map((relatedProject) => (
                  <Link 
                    key={relatedProject.id} 
                    to={`/projects/${relatedProject.slug || relatedProject.id}`}
                    className="group block"
                  >
                    <div className="rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary">
                      {relatedProject.coverImage && (
                        <div className="aspect-video relative overflow-hidden">
                          <img   
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt={`Image du projet ${relatedProject.title}`}
                           src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {relatedProject.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedProject.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetailPage;