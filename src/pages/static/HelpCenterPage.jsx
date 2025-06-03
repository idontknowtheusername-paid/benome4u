import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, Search, BookOpen, MessageSquare, ArrowRight, Users, ShoppingCart, Tag, ShieldCheck } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/personalData';
import { Link } from 'react-router-dom';

const HelpCenterPage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const popularTopics = [
    { title: "Comment publier une annonce ?", link: "/faq#publier-annonce" },
    { title: "Sécuriser mon compte", link: "/faq#securite-compte" },
    { title: "Problèmes de paiement", link: "/faq#paiement" },
    { title: "Contacter un vendeur/acheteur", link: "/faq#contacter-utilisateur" },
    { title: "Signaler un problème", link: "/faq#signaler-probleme" },
  ];

  const categories = [
    { name: "Comptes et Profils", icon: <Users className="h-8 w-8 text-primary" />, description: "Gestion de votre compte, paramètres et notifications." },
    { name: "Acheter sur Benome", icon: <ShoppingCart className="h-8 w-8 text-primary" />, description: "Recherche, achat, paiements et livraisons." },
    { name: "Vendre sur Benome", icon: <Tag className="h-8 w-8 text-primary" />, description: "Création d'annonces, gestion des ventes, boosters." },
    { name: "Sécurité et Confiance", icon: <ShieldCheck className="h-8 w-8 text-primary" />, description: "Protéger votre compte, éviter les fraudes." },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    // Implement search logic or redirect to a search results page
    console.log("Searching for:", searchTerm);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <HelpCircle className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Centre d'Aide <span className="gradient-text">{personalData.siteName}</span>
        </h1>
        <p className="text-xl text-muted-foreground">Comment pouvons-nous vous aider aujourd'hui ?</p>
      </motion.div>

      <motion.form
        onSubmit={handleSearch}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-2xl mx-auto mb-16 relative"
      >
        <Input
          type="search"
          placeholder="Rechercher des articles d'aide (ex: mot de passe oublié)"
          className="w-full h-14 pl-12 pr-4 text-lg rounded-full shadow-lg"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-6 w-6 text-muted-foreground" />
        <Button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 h-10 rounded-full">Rechercher</Button>
      </motion.form>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sujets Populaires</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {popularTopics.map((topic, index) => (
            <Link to={topic.link} key={index} className="block bg-card p-6 rounded-lg shadow-md hover:shadow-lg hover:border-primary border border-transparent transition-all duration-300 transform hover:-translate-y-1 glassmorphic-card">
              <h3 className="text-lg font-semibold text-primary mb-2 flex items-center">
                {topic.title} <ArrowRight className="ml-auto h-4 w-4 opacity-50 group-hover:opacity-100" />
              </h3>
              <p className="text-sm text-muted-foreground">Consultez notre FAQ pour une réponse rapide.</p>
            </Link>
          ))}
        </div>
      </motion.section>
      
      <motion.section 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-bold mb-8 text-center">Parcourir par Catégorie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.3, delay:index * 0.1 + 0.7}}
              className="bg-card p-6 rounded-xl shadow-lg text-center border border-border hover:border-primary transition-colors glassmorphic-card"
            >
              <div className="p-3 bg-primary/10 rounded-full inline-block mb-4">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{category.description}</p>
              <Button variant="outline" asChild>
                <Link to={`/faq#cat-${category.name.toLowerCase().replace(/\s+/g, '-')}`}>Explorer</Link>
              </Button>
            </motion.div>
          ))}
        </div>
      </motion.section>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="text-center bg-card p-8 md:p-12 rounded-xl shadow-xl glassmorphic-card border border-border"
      >
        <h2 className="text-2xl font-bold mb-4">Vous ne trouvez pas ce que vous cherchez ?</h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Notre équipe d'assistance est là pour vous aider. Contactez-nous directement ou consultez notre FAQ complète.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link to="/contactez-nous">
              <MessageSquare className="mr-2 h-5 w-5" /> Contacter le Support
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link to="/faq">
              <BookOpen className="mr-2 h-5 w-5" /> Consulter la FAQ
            </Link>
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default HelpCenterPage;