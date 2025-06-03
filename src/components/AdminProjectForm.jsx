import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { addProject, updateProject } from '@/lib/projectData'; // Updated import

const AdminProjectForm = ({ project = null, onSave, onCancel }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    description: '',
    longDescription: '',
    coverImage: '',
    demoUrl: '',
    repoUrl: '',
    technologies: '',
    category: '',
    featured: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (project) {
      setFormData({
        title: project.title || '',
        slug: project.slug || '',
        description: project.description || '',
        longDescription: project.longDescription || '',
        coverImage: project.coverImage || '',
        demoUrl: project.demoUrl || '',
        repoUrl: project.repoUrl || '',
        technologies: project.technologies?.join(', ') || '',
        category: project.category || '',
        featured: project.featured || false
      });
    } else {
      setFormData({
        title: '',
        slug: '',
        description: '',
        longDescription: '',
        coverImage: '',
        demoUrl: '',
        repoUrl: '',
        technologies: '',
        category: '',
        featured: false
      });
    }
  }, [project]);


  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ 
      ...prev, 
      [name]: type === 'checkbox' ? checked : value 
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.title || !formData.description || !formData.technologies) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez remplir les champs Titre, Description et Technologies.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    const technologiesArray = formData.technologies.split(',').map(tech => tech.trim()).filter(Boolean);
    
    const projectData = {
      ...formData,
      technologies: technologiesArray,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    };

    let savedProject;
    if (project && project.id) {
      savedProject = updateProject({ ...projectData, id: project.id });
    } else {
      savedProject = addProject(projectData);
    }
    
    setTimeout(() => {
      if (savedProject) {
        toast({
          title: project ? "Projet mis à jour !" : "Projet créé !",
          description: project 
            ? "Votre projet a été mis à jour avec succès." 
            : "Votre nouveau projet a été créé avec succès.",
        });
        if (onSave) {
          onSave(savedProject);
        }
      } else {
        toast({
          title: "Erreur",
          description: "Impossible d'enregistrer le projet.",
          variant: "destructive",
        });
      }
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div className="space-y-2">
        <Label htmlFor="title">Titre *</Label>
        <Input
          id="title"
          name="title"
          placeholder="Titre du projet"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="slug">Slug (généré automatiquement si vide)</Label>
        <Input
          id="slug"
          name="slug"
          placeholder="titre-du-projet"
          value={formData.slug}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="description">Description courte *</Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Une brève description du projet"
          rows={2}
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="longDescription">Description détaillée</Label>
        <Textarea
          id="longDescription"
          name="longDescription"
          placeholder="Description détaillée du projet (supporte le Markdown)"
          rows={10}
          value={formData.longDescription}
          onChange={handleChange}
          className="font-mono text-sm"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="coverImage">Image de couverture (description)</Label>
          <Input
            id="coverImage"
            name="coverImage"
            placeholder="Description de l'image de couverture"
            value={formData.coverImage}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="category">Catégorie</Label>
          <Input
            id="category"
            name="category"
            placeholder="ex: Web, Mobile, Desktop"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="demoUrl">URL de démo</Label>
          <Input
            id="demoUrl"
            name="demoUrl"
            placeholder="https://example.com/demo"
            value={formData.demoUrl}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="repoUrl">URL du dépôt</Label>
          <Input
            id="repoUrl"
            name="repoUrl"
            placeholder="https://github.com/username/repo"
            value={formData.repoUrl}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="technologies">Technologies (séparées par des virgules) *</Label>
        <Input
          id="technologies"
          name="technologies"
          placeholder="ex: React, Node.js, MongoDB"
          value={formData.technologies}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="flex items-center space-x-2">
        <input
          type="checkbox"
          id="featured"
          name="featured"
          checked={formData.featured}
          onChange={handleChange}
          className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
        />
        <Label htmlFor="featured" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Projet à la une
        </Label>
      </div>
      
      <div className="flex justify-end space-x-2">
        {onCancel && (
          <Button type="button" variant="outline" onClick={onCancel}>
            <X className="mr-2 h-4 w-4" />
            Annuler
          </Button>
        )}
        
        <Button 
          type="submit" 
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Enregistrement...
            </span>
          ) : (
            <span className="flex items-center">
              <Save className="mr-2 h-4 w-4" />
              {project ? 'Mettre à jour' : 'Publier'}
            </span>
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default AdminProjectForm;