import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import BlogCard from '@/components/BlogCard';
import { getBlogPosts, getUniqueBlogCategories, getUniqueBlogTags } from '@/lib/blogData.js';

const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTag, setSelectedTag] = useState('');
  const [allPosts, setAllPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  
  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);
  
  useEffect(() => {
    const posts = getBlogPosts();
    setAllPosts(posts);
    setFilteredPosts(posts);
    setCategories(getUniqueBlogCategories());
    setTags(getUniqueBlogTags());
  }, []);
  
  useEffect(() => {
    let localFilteredPosts = [...allPosts];
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      localFilteredPosts = localFilteredPosts.filter(post => 
        post.title.toLowerCase().includes(term) || 
        post.excerpt.toLowerCase().includes(term) ||
        post.content.toLowerCase().includes(term)
      );
    }
    
    if (selectedCategory) {
      localFilteredPosts = localFilteredPosts.filter(post => post.category === selectedCategory);
    }
    
    if (selectedTag) {
      localFilteredPosts = localFilteredPosts.filter(post => post.tags.includes(selectedTag));
    }
    
    setFilteredPosts(localFilteredPosts);
  }, [searchTerm, selectedCategory, selectedTag, allPosts]);
  
  const handleCategoryClick = (category) => {
    setSelectedCategory(prev => prev === category ? '' : category);
  };
  
  const handleTagClick = (tag) => {
    setSelectedTag(prev => prev === tag ? '' : tag);
  };
  
  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setSelectedTag('');
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
          Mon <span className="gradient-text">Blog</span>
        </h1>
        <p className="text-muted-foreground">
          Découvrez mes articles sur le développement web, les technologies et les bonnes pratiques.
        </p>
      </motion.div>
      
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              type="text"
              placeholder="Rechercher un article..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          
          {(selectedCategory || selectedTag || searchTerm) && (
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
          
          {tags.length > 0 && (
            <div>
              <div className="flex items-center mb-2">
                <Filter className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Tags</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge
                    key={index}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleTagClick(tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      
      {filteredPosts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard 
              key={post.id} 
              post={post} 
              index={index} 
              featured={index === 0 && !searchTerm && !selectedCategory && !selectedTag} 
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-muted-foreground">Aucun article ne correspond à votre recherche.</p>
        </div>
      )}
    </div>
  );
};

export default BlogPage;