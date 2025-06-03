import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProjectCard from '@/components/ProjectCard';
import { getProjects, getUniqueProjectCategories, getUniqueProjectTechnologies } from '@/lib/projectData';

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTech, setSelectedTech] = useState('');
  const [allProjects, setAllProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  
  const [categories, setCategories] = useState([]);
  const [technologies, setTechnologies] = useState([]);
  
  useEffect(() => {
    const projectsData = getProjects();
    setAllProjects(projectsData);
    setFilteredProjects(projectsData);
    setCategories(getUniqueProjectCategories());
    setTechnologies(getUniqueProjectTechnologies());
  }, []);
  
  useEffect(() => {
    let localFilteredProjects = [...allProjects];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      localFilteredProjects = localFilteredProjects.filter(project => 
        project.title.toLowerCase().includes(term) || 
        project.description.toLowerCase().includes(term) ||
        (project.longDescription && project.longDescription.toLowerCase().includes(term))
      );
    }
    
    if (selectedCategory) {
      localFilteredProjects = localFilteredProjects.filter(project => project.category === selectedCategory);
    }
    
    if (selectedTech) {
      localFilteredProjects = localFilteredProjects.filter(project => project.technologies.includes(selectedTech));
    }
        
    setFilteredProjects(localFilteredProjects);
  }, [searchTerm, selectedCategory, selectedTech, allProjects]);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => prev === category ? '' : category);
  };
  
  const handleTechClick = (tech) => {
    setSelectedTech(prev => prev === tech ? '' : tech);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTech('');
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Mes <span className="gradient-text">Projets</span>
        </h1>
        <p className="text-muted-foreground">
          Découvrez mes réalisations et projets dans le domaine du développement web.
        </p>
      </motion.div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Rechercher un projet..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {(selectedCategory || selectedTech || searchTerm) && (
            <Button variant="outline" onClick={clearFilters}>
              Effacer les filtres
            </Button>
          )}
        </div>
        
        <div className="space-y-4">
          {categories.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Filter className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Catégories</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {categories.map((category, index) => (
                  <Badge
                    key={index}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleCategoryClick(category)}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
          )}
          
          {technologies.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Filter className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Technologies</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant={selectedTech === tech ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleTechClick(tech)}
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              index={index} 
              featured={project.featured && !searchTerm && !selectedCategory && !selectedTech} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun projet ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectsPage;