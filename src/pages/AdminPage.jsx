import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import AdminBlogForm from '@/components/AdminBlogForm';
import AdminProjectForm from '@/components/AdminProjectForm';
import { useToast } from '@/components/ui/use-toast';
import { getBlogPosts, deleteBlogPost as deleteBlogPostUtil } from '@/lib/blogData.js';
import { getProjects, deleteProject as deleteProjectUtil } from '@/lib/projectData.js';

const AdminPage = () => {
  const { toast } = useToast();
  const [currentBlogPosts, setCurrentBlogPosts] = useState([]);
  const [currentProjects, setCurrentProjects] = useState([]);

  const [selectedBlogPost, setSelectedBlogPost] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const [isNewBlogDialogOpen, setIsNewBlogDialogOpen] = useState(false);
  const [isEditBlogDialogOpen, setIsEditBlogDialogOpen] = useState(false);
  const [isNewProjectDialogOpen, setIsNewProjectDialogOpen] = useState(false);
  const [isEditProjectDialogOpen, setIsEditProjectDialogOpen] = useState(false);

  useEffect(() => {
    setCurrentBlogPosts(getBlogPosts());
    setCurrentProjects(getProjects());
  }, []);
  
  const handleDeleteBlogPostClick = (id) => {
    if (deleteBlogPostUtil(id)) {
      toast({
        title: "Article supprimé",
        description: "L'article a été supprimé avec succès.",
      });
      setCurrentBlogPosts(getBlogPosts());
    } else {
      toast({
        title: "Erreur",
        description: "Impossible de supprimer l'article.",
        variant: "destructive"
      });
    }
  };
  
  const handleDeleteProjectClick = (id) => {
    if (deleteProjectUtil(id)) {
      toast({
        title: "Projet supprimé",
        description: "Le projet a été supprimé avec succès.",
      });
       setCurrentProjects(getProjects());
    } else {
       toast({
        title: "Erreur",
        description: "Impossible de supprimer le projet.",
        variant: "destructive"
      });
    }
  };
  
  const handleEditBlogPost = (post) => {
    setSelectedBlogPost(post);
    setIsEditBlogDialogOpen(true);
  };
  
  const handleEditProject = (project) => {
    setSelectedProject(project);
    setIsEditProjectDialogOpen(true);
  };
  
  const handleSaveBlogPost = () => {
    setCurrentBlogPosts(getBlogPosts());
    setIsNewBlogDialogOpen(false);
    setIsEditBlogDialogOpen(false);
    setSelectedBlogPost(null);
  };
  
  const handleSaveProject = () => {
    setCurrentProjects(getProjects());
    setIsNewProjectDialogOpen(false);
    setIsEditProjectDialogOpen(false);
    setSelectedProject(null);
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
          <span className="gradient-text">Administration</span>
        </h1>
        <p className="text-muted-foreground">
          Gérez vos articles de blog et vos projets.
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        <Tabs defaultValue="blog" className="mb-16">
          <TabsList className="grid grid-cols-2 w-full max-w-md mx-auto mb-8">
            <TabsTrigger value="blog">Articles</TabsTrigger>
            <TabsTrigger value="projects">Projets</TabsTrigger>
          </TabsList>
          
          <TabsContent value="blog" className="space-y-8">
            <div className="flex justify-end">
              <Dialog open={isNewBlogDialogOpen} onOpenChange={(isOpen) => { setIsNewBlogDialogOpen(isOpen); if (!isOpen) setSelectedBlogPost(null); }}>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedBlogPost(null)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Nouvel article
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Créer un nouvel article</DialogTitle>
                  </DialogHeader>
                  <AdminBlogForm onSave={handleSaveBlogPost} onCancel={() => setIsNewBlogDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="space-y-4">
              {currentBlogPosts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{post.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{post.excerpt}</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{post.category}</span>
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditBlogPost(post)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteBlogPostClick(post.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Dialog open={isEditBlogDialogOpen} onOpenChange={(isOpen) => { setIsEditBlogDialogOpen(isOpen); if (!isOpen) setSelectedBlogPost(null); }}>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Modifier l'article</DialogTitle>
                </DialogHeader>
                <AdminBlogForm 
                  post={selectedBlogPost} 
                  onSave={handleSaveBlogPost} 
                  onCancel={() => setIsEditBlogDialogOpen(false)} 
                />
              </DialogContent>
            </Dialog>
          </TabsContent>
          
          <TabsContent value="projects" className="space-y-8">
            <div className="flex justify-end">
              <Dialog open={isNewProjectDialogOpen} onOpenChange={(isOpen) => { setIsNewProjectDialogOpen(isOpen); if(!isOpen) setSelectedProject(null);}}>
                <DialogTrigger asChild>
                  <Button onClick={() => setSelectedProject(null)}>
                    <Plus className="mr-2 h-4 w-4" />
                    Nouveau projet
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Créer un nouveau projet</DialogTitle>
                  </DialogHeader>
                  <AdminProjectForm onSave={handleSaveProject} onCancel={() => setIsNewProjectDialogOpen(false)} />
                </DialogContent>
              </Dialog>
            </div>
            
            <div className="space-y-4">
              {currentProjects.map((project) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className="p-4 rounded-lg border border-border hover:border-primary transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-1">{project.description}</p>
                      <div className="flex items-center mt-2 text-xs text-muted-foreground">
                        <span>{new Date(project.completedAt).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>{project.category}</span>
                        {project.featured && (
                          <>
                            <span className="mx-2">•</span>
                            <span className="text-primary">À la une</span>
                          </>
                        )}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm" onClick={() => handleEditProject(project)}>
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="outline" size="sm" onClick={() => handleDeleteProjectClick(project.id)}>
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <Dialog open={isEditProjectDialogOpen} onOpenChange={(isOpen) => { setIsEditProjectDialogOpen(isOpen); if(!isOpen) setSelectedProject(null);}}>
              <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle>Modifier le projet</DialogTitle>
                </DialogHeader>
                <AdminProjectForm 
                  project={selectedProject} 
                  onSave={handleSaveProject} 
                  onCancel={() => setIsEditProjectDialogOpen(false)} 
                />
              </DialogContent>
            </Dialog>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default AdminPage;