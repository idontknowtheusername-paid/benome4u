
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input'; // Added import
import { ArrowRight, FolderHeart as HomeIcon, BadgeCent as CarIcon, Briefcase as BriefcaseIcon, ShoppingBag as ShoppingBagIcon, SearchCode as SearchIcon, Sparkles as SparklesIcon } from 'lucide-react';
import { personalData } from '@/lib/personalData';

const HomePage = () => {
  // This page is now a redirect or placeholder as MarketplaceHomePage is the main entry.
  // For a portfolio site, this would be the main landing page.
  // For Benome, we'll keep it simple and perhaps redirect or show a welcome message.

  const categoryCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  const categories = [
    { name: "Immobilier", icon: <HomeIcon className="h-10 w-10 mb-3 text-primary" />, path: "/immobilier", description: "Maisons, appartements, terrains." },
    { name: "Automobile", icon: <CarIcon className="h-10 w-10 mb-3 text-primary" />, path: "/automobile", description: "Voitures, motos, utilitaires." },
    { name: "Services Pro", icon: <BriefcaseIcon className="h-10 w-10 mb-3 text-primary" />, path: "/services", description: "Experts qualifiés à votre service." },
    { name: "Marketplace", icon: <ShoppingBagIcon className="h-10 w-10 mb-3 text-primary" />, path: "/marketplace", description: "Produits neufs et d'occasion." }
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-slate-900 to-blue-900/20 text-foreground">
      {/* Hero Section */}
      <motion.section 
        className="relative py-24 md:py-40 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover -z-10 opacity-70"
          alt="Skyline futuriste d'une ville africaine au crépuscule avec des néons"
         src="https://images.unsplash.com/photo-1542044896530-05d85be9b11a?q=80&w=2070&auto=format&fit=crop" />

        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.div 
            className="inline-block p-2 bg-primary/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1, type: "spring", stiffness: 200 }}
          >
            <SparklesIcon className="h-10 w-10 text-primary" />
          </motion.div>
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Bienvenue sur <span className="text-primary">{personalData.siteName}</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {personalData.tagline}. Explorez, découvrez, connectez.
          </motion.p>
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative">
              <Input 
                type="search" 
                placeholder="Que recherchez-vous sur Benome ?" 
                className="w-full py-4 px-6 pr-16 rounded-full text-lg bg-white/10 text-white placeholder-gray-400 border-2 border-transparent focus:border-primary focus:ring-primary focus:outline-none backdrop-blur-md h-16"
              />
              <Button size="lg" className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90 h-12 w-12 p-0">
                <SearchIcon className="h-6 w-6 text-white" />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
      </motion.section>

      {/* Categories Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-center mb-16"
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5 }}
          >
            Explorez nos <span className="gradient-text">Univers</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                custom={index}
                variants={categoryCardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card p-6 rounded-xl shadow-2xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center glassmorphic-card border border-transparent hover:border-primary/50"
              >
                {category.icon}
                <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                <p className="text-muted-foreground text-sm mb-5 flex-grow">{category.description}</p>
                <Button asChild variant="outline" className="w-full border-primary/50 hover:bg-primary/10 hover:text-primary">
                  <Link to={category.path}>
                    Découvrir <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Listings Placeholder */}
      <section className="py-16 md:py-24 bg-background/30">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Annonces <span className="gradient-text">Populaires</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i} 
                className="bg-card rounded-lg shadow-xl overflow-hidden glassmorphic-card border border-transparent hover:border-secondary/50"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1}}
              >
                <div className="h-60 bg-muted animate-pulse"><img  alt={`Placeholder image ${i} for featured listing`}  src="https://images.unsplash.com/photo-1604703021135-92b25e6415e4" /></div>
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-muted rounded mb-3 animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-muted rounded mb-4 animate-pulse"></div>
                  <div className="h-10 w-1/3 bg-primary/50 rounded animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="default" className="bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground">
                Voir Toutes les Annonces <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5 }}
          >
            Prêt à <span className="gradient-text">Rejoindre Benome</span> ?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5, delay:0.2 }}
          >
            Créez un compte, publiez votre première annonce ou trouvez l'affaire parfaite en quelques clics.
          </motion.p>
          <motion.div 
            className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5, delay:0.4 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
              Publier une Annonce
            </Button>
            <Button size="lg" variant="outline" className="w-full sm:w-auto">
              Créer un Compte
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
