import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import BlogCard from '@/components/BlogCard';
import { getBlogPosts } from '@/lib/blogData.js';

const LatestPosts = () => {
  const [latestPosts, setLatestPosts] = useState([]);

  useEffect(() => {
    const posts = getBlogPosts();
    setLatestPosts(posts.slice(0, 3));
  }, []);
  
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
              Articles <span className="gradient-text">récents</span>
            </h2>
            <p className="text-muted-foreground">
              Explorez mes derniers articles sur le développement web, les technologies et les bonnes pratiques.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 md:mt-0"
          >
            <Button asChild variant="outline">
              <Link to="/blog">
                Tous les articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index} 
              featured={index === 0} 
            />
          ))}
        </div>
      </div>
      
      <div className="absolute top-1/3 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
    </section>
  );
};

export default LatestPosts;