import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Save, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { addBlogPost, updateBlogPost } from '@/lib/blogData'; // Updated import

const AdminBlogForm = ({ post = null, onSave, onCancel }) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    category: '',
    tags: '',
    coverImage: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (post) {
      setFormData({
        title: post.title || '',
        slug: post.slug || '',
        excerpt: post.excerpt || '',
        content: post.content || '',
        category: post.category || '',
        tags: post.tags?.join(', ') || '',
        coverImage: post.coverImage || ''
      });
    } else {
      setFormData({
        title: '',
        slug: '',
        excerpt: '',
        content: '',
        category: '',
        tags: '',
        coverImage: ''
      });
    }
  }, [post]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (!formData.title || !formData.content || !formData.excerpt) {
      toast({
        title: "Erreur de validation",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }
    
    const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(Boolean);
    
    const blogPostData = {
      ...formData,
      tags: tagsArray,
      slug: formData.slug || formData.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, ''),
    };

    let savedPost;
    if (post && post.id) {
      savedPost = updateBlogPost({ ...blogPostData, id: post.id });
    } else {
      savedPost = addBlogPost(blogPostData);
    }
    
    setTimeout(() => {
      if (savedPost) {
        toast({
          title: post ? "Article mis à jour !" : "Article créé !",
          description: post 
            ? "Votre article a été mis à jour avec succès." 
            : "Votre nouvel article a été créé avec succès.",
        });
        if (onSave) {
          onSave(savedPost);
        }
      } else {
         toast({
          title: "Erreur",
          description: "Impossible d'enregistrer l'article.",
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
          placeholder="Titre de l'article"
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
          placeholder="titre-de-l-article"
          value={formData.slug}
          onChange={handleChange}
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="excerpt">Extrait *</Label>
        <Textarea
          id="excerpt"
          name="excerpt"
          placeholder="Un court résumé de l'article"
          rows={2}
          value={formData.excerpt}
          onChange={handleChange}
          required
        />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="content">Contenu *</Label>
        <Textarea
          id="content"
          name="content"
          placeholder="Contenu de l'article (supporte le Markdown)"
          rows={12}
          value={formData.content}
          onChange={handleChange}
          required
          className="font-mono text-sm"
        />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="category">Catégorie</Label>
          <Input
            id="category"
            name="category"
            placeholder="ex: React, JavaScript, CSS"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="tags">Tags (séparés par des virgules)</Label>
          <Input
            id="tags"
            name="tags"
            placeholder="ex: React, Hooks, Performance"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>
      </div>
      
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
              {post ? 'Mettre à jour' : 'Publier'}
            </span>
          )}
        </Button>
      </div>
    </motion.form>
  );
};

export default AdminBlogForm;