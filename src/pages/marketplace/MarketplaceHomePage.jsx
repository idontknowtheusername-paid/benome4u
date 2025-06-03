
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Home, Car, Briefcase, ShoppingBag, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const MarketplaceHomePage = () => {
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
    { name: "Immobilier", icon: <Home className="h-12 w-12 mb-4 text-primary" />, path: "/immobilier", description: "Trouvez la maison de vos rêves ou l'investissement parfait." },
    { name: "Automobile", icon: <Car className="h-12 w-12 mb-4 text-primary" />, path: "/automobile", description: "Véhicules neufs et d'occasion, pour tous les besoins." },
    { name: "Services Pro", icon: <Briefcase className="h-12 w-12 mb-4 text-primary" />, path: "/services", description: "Experts qualifiés pour tous vos projets et besoins." },
    { name: "Marketplace", icon: <ShoppingBag className="h-12 w-12 mb-4 text-primary" />, path: "/marketplace", description: "Produits variés, de l'électronique à l'artisanat local." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-blue-900/10 text-foreground">
      {/* Hero Section */}
      <motion.section 
        className="relative py-20 md:py-32 bg-cover bg-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Votre Destination <span className="text-primary">Futuriste</span> pour l'Afrique de l'Ouest
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            Immobilier, automobile, services et produits. Tout ce dont vous avez besoin, réuni en une expérience utilisateur unique et innovante.
          </motion.p>
          <motion.div 
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative">
              <input 
                type="search" 
                placeholder="Rechercher (ex: appartement Dakar, mécanicien Abidjan...)" 
                className="w-full py-4 px-6 pr-16 rounded-full text-lg bg-white/20 text-white placeholder-gray-300 border-2 border-transparent focus:border-primary focus:ring-primary focus:outline-none backdrop-blur-md"
              />
              <Button size="icon" className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full bg-primary hover:bg-primary/90">
                <Search className="h-6 w-6 text-white" />
              </Button>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-background to-transparent"></div>
        <img  
          className="absolute inset-0 w-full h-full object-cover -z-10"
          alt="Skyline futuriste d'une ville africaine au crépuscule"
         src="https://images.unsplash.com/photo-1590472199944-ec6116b9cef2" />
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
            Explorez nos <span className="gradient-text">Catégories</span>
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                custom={index}
                variants={categoryCardVariants}
                initial="hidden"
                animate="visible"
                className="bg-card p-8 rounded-xl shadow-2xl hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center text-center glassmorphic-card"
              >
                {category.icon}
                <h3 className="text-2xl font-semibold mb-3">{category.name}</h3>
                <p className="text-muted-foreground mb-6 text-sm flex-grow">{category.description}</p>
                <Button asChild variant="default" className="w-full">
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
      <section className="py-16 md:py-24 bg-background/50">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            Annonces <span className="gradient-text">en Vedette</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map(i => (
              <motion.div 
                key={i} 
                className="bg-card rounded-lg shadow-lg overflow-hidden glassmorphic-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1}}
              >
                <div className="h-56 bg-muted animate-pulse"><img  alt={`Placeholder image ${i}`} src="https://images.unsplash.com/photo-1595872018818-97555653a011" /></div>
                <div className="p-6">
                  <div className="h-6 w-3/4 bg-muted rounded mb-3 animate-pulse"></div>
                  <div className="h-4 w-1/2 bg-muted rounded mb-4 animate-pulse"></div>
                  <div className="h-10 w-1/3 bg-primary/50 rounded animate-pulse"></div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button size="lg" variant="outline">Voir plus d'annonces <ArrowRight className="ml-2 h-5 w-5" /></Button>
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
            Prêt à <span className="gradient-text">Commencer</span> ?
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground mb-10 max-w-xl mx-auto"
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5, delay:0.2 }}
          >
            Publiez votre annonce ou trouvez ce que vous cherchez en quelques clics.
          </motion.p>
          <motion.div 
            className="space-x-4"
            initial={{ opacity: 0, y:20 }}
            animate={{ opacity: 1, y:0 }}
            transition={{ duration:0.5, delay:0.4 }}
          >
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Publier une Annonce
            </Button>
            <Button size="lg" variant="outline">
              S'inscrire
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default MarketplaceHomePage;
