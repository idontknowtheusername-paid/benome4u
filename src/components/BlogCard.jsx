import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, Tag } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';
import { fr } from 'date-fns/locale';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const BlogCard = ({ post, index, featured = false }) => {
  const publishedDate = new Date(post.publishedAt);
  const timeAgo = formatDistanceToNow(publishedDate, { addSuffix: true, locale: fr });

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className={cn(
        "group overflow-hidden rounded-lg border border-border bg-card transition-all duration-300 card-hover",
        featured ? "col-span-full md:col-span-2 md:row-span-2" : "md:col-span-1" 
      )}
    >
      <Link to={`/blog/${post.slug || post.id}`} className="block h-full">
        <div className="relative aspect-video overflow-hidden">
           <img   
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            alt={`Image de couverture pour l'article ${post.title}`}
            src="https://images.unsplash.com/photo-1578811344633-3376eab0f8ce" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
          
          {featured && (
            <div className="absolute top-4 left-4">
              <Badge variant="default" className="bg-primary/90 backdrop-blur-sm">
                À la une
              </Badge>
            </div>
          )}
          
          <div className="absolute bottom-4 left-4 right-4">
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {post.tags.slice(0, featured ? 3 : 2).map((tag, i) => (
                  <Badge key={i} variant="secondary" className="bg-secondary/50 backdrop-blur-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
            {featured && (
              <h2 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                {post.title}
              </h2>
            )}
          </div>
        </div>
        
        <div className="p-5">
          {!featured && (
            <h2 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
              {post.title}
            </h2>
          )}
          
          <p className="text-muted-foreground line-clamp-2 mb-4">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Calendar className="h-3 w-3 mr-1" />
                {timeAgo}
              </span>
              <span className="flex items-center">
                <Clock className="h-3 w-3 mr-1" />
                {post.readingTime}
              </span>
            </div>
            {post.category && (
              <span className="flex items-center">
                <Tag className="h-3 w-3 mr-1" />
                {post.category}
              </span>
            )}
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;