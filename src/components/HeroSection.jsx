
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalData } from '@/lib/personalData';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center py-20 md:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-20">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 opacity-90"></div>
        <img  
            className="absolute inset-0 w-full h-full object-cover opacity-20" 
            alt="Abstract background with geometric shapes and light streaks"
         src="https://images.unsplash.com/photo-1508896080210-93c377eb4135" />
      </div>
      
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: [0, 20, 0, -20, 0],
          y: [0, -20, 30, 0, -20],
          scale: [1, 1.05, 1, 0.95, 1],
          rotate: [0, 5, -5, 5, 0],
        }}
        transition={{
          duration: 20,
          ease: "linear",
          repeat: Infinity,
        }}
        className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/30 rounded-full filter blur-3xl opacity-50 -z-10"
      />
      <motion.div
        animate={{
          x: [0, -30, 0, 30, 0],
          y: [0, 30, -20, 0, 30],
          scale: [1, 0.9, 1.1, 0.95, 1],
          rotate: [0, -5, 5, -5, 0],
        }}
        transition={{
          duration: 25,
          ease: "linear",
          repeat: Infinity,
          delay: 5
        }}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500/30 rounded-full filter blur-3xl opacity-50 -z-10"
      />

      <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-block mb-6"
        >
          <img  
            className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-primary shadow-xl object-cover" 
            alt={personalData.name}
           src="https://images.unsplash.com/photo-1660527382879-14bbba78edb1" />
        </motion.div>

        <motion.h1 
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "backOut" }}
        >
          {personalData.name}
        </motion.h1>
        
        <motion.p 
          className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {personalData.tagline}
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease: "easeOut" }}
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <Link to="/projects">
              <Eye className="mr-2 h-5 w-5" /> Voir mes Projets
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10 hover:text-primary shadow-lg transform hover:scale-105 transition-transform duration-300 w-full sm:w-auto">
            <a href="/cv_john_doe.pdf" download>
              <Download className="mr-2 h-5 w-5" /> Télécharger mon CV
            </a>
          </Button>
        </motion.div>
        
        <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
        >
            <Link to="/contact" className="group text-primary hover:underline inline-flex items-center">
                Prêt à collaborer ? Contactez-moi <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
