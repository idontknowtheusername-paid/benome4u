import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Tag, User } from 'lucide-react';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { getBlogPostByIdOrSlug, getRelatedBlogPosts } from '@/lib/blogData.js';
import { useToast } from '@/components/ui/use-toast';

const BlogPostPage = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [isLoading, setIsLoading]= useState(true);
  const { toast } = useToast();
  
  useEffect(() => {
    setIsLoading(true);
    
    setTimeout(() => {
      const foundPost = getBlogPostByIdOrSlug(id);
      
      if (foundPost) {
        setPost(foundPost);
        const related = getRelatedBlogPosts(foundPost);
        setRelatedPosts(related);
      } else {
        toast({
          title: "Article non trouvé",
          description: "L'article que vous recherchez n'existe pas.",
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
          <p className="mt-4 text-muted-foreground">Chargement de l'article...</p>
        </div>
      </div>
    );
  }
  
  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 flex justify-center items-center min-h-[60vh]">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Article non trouvé</h2>
          <p className="text-muted-foreground mb-6">L'article que vous recherchez n'existe pas ou a été supprimé.</p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Retour aux articles
            </Link>
          </Button>
        </div>
      </div>
    );
  }
  
  const publishedDate = new Date(post.publishedAt);
  const formattedDate = format(publishedDate, 'd MMMM yyyy', { locale: fr });

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
          <Link to="/blog">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Retour aux articles
          </Link>
        </Button>
        
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6">
            {post.author && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-1" />
                {post.author.name}
              </div>
            )}
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-1" />
              {formattedDate}
            </div>
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              {post.readingTime}
            </div>
            {post.category && (
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-1" />
                {post.category}
              </div>
            )}
          </div>
          
          {post.coverImage && (
            <div className="relative aspect-[21/9] rounded-lg overflow-hidden mb-8">
              <img   
                className="w-full h-full object-cover"
                alt={`Image de couverture pour l'article ${post.title}`}
               src="https://images.unsplash.com/photo-1578470155518-c5697b07e280" />
            </div>
          )}
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-8">
              {post.tags.map((tag, index) => (
                <Badge key={index} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          )}
          
          <div className="prose prose-invert max-w-none">
            <div className="whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </div>
        
        {relatedPosts.length > 0 && (
          <>
            <Separator className="my-12" />
            
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">Articles similaires</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link 
                    key={relatedPost.id} 
                    to={`/blog/${relatedPost.slug || relatedPost.id}`}
                    className="group block"
                  >
                    <div className="rounded-lg border border-border overflow-hidden transition-all duration-300 hover:border-primary">
                      {relatedPost.coverImage && (
                        <div className="aspect-video relative overflow-hidden">
                          <img   
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            alt={`Image de couverture pour l'article ${relatedPost.title}`}
                           src="https://images.unsplash.com/photo-1578470155518-c5697b07e280" />
                        </div>
                      )}
                      <div className="p-4">
                        <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {relatedPost.excerpt}
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

export default BlogPostPage;