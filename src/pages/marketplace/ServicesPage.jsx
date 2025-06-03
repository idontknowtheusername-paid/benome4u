
import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Search, Filter, CalendarCheck, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const ServicesPage = () => {
  const serviceCategories = [
    "BTP & Construction", "Techniciens & Artisans", "Services Domestiques", 
    "Tech & Digital", "Santé & Bien-être", "Éducation & Formation", "Événementiel"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-purple-900/10 text-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Services Professionnels <span className="gradient-text-violet">Qualifiés</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Trouvez des experts pour tous vos besoins : BTP, tech, santé, éducation, et bien plus.
          </p>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-6 rounded-xl shadow-xl mb-8 sticky top-20 z-50 glassmorphic-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="search-service" className="block text-sm font-medium mb-1">Quel service recherchez-vous ?</label>
              <div className="relative">
                <Input id="search-service" type="text" placeholder="Ex: Plombier, Développeur Web, Professeur de Maths..." className="pl-10 h-12 text-base" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <Button className="h-12 text-base w-full bg-primary hover:bg-primary/90">
              <Filter className="mr-2 h-5 w-5" /> Rechercher un Professionnel
            </Button>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Catégories Populaires :</label>
            <div className="flex flex-wrap gap-2">
              {serviceCategories.slice(0,5).map(category => (
                <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors px-3 py-1 text-sm">
                  {category}
                </Badge>
              ))}
               <Badge variant="outline" className="cursor-pointer hover:bg-muted/50 transition-colors px-3 py-1 text-sm">
                  Voir toutes les catégories
                </Badge>
            </div>
          </div>
        </motion.div>

        {/* Listings Area - Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: item * 0.1 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-primary/20 transition-shadow duration-300 flex flex-col glassmorphic-card"
            >
              <div className="relative h-48 bg-muted">
                <img  
                    className="w-full h-full object-cover" 
                    alt={`Prestataire de service ${item}`}
                 src="https://images.unsplash.com/photo-1684262855344-b9da453a7934" />
                <Badge variant="default" className="absolute top-2 left-2">Vérifié</Badge>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-1">Nom du Professionnel / Entreprise {item}</h3>
                <p className="text-primary font-medium mb-2">Catégorie de Service (ex: Plomberie)</p>
                <p className="text-sm text-muted-foreground mb-3 flex-grow line-clamp-3">Description courte du service, spécialités, et expérience. Réponse rapide garantie. Travail soigné.</p>
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4 mr-1 flex-shrink-0" />
                  <span>Ville, Pays (ex: Dakar, Sénégal)</span>
                </div>
                <div className="mt-auto">
                  <Button className="w-full bg-primary hover:bg-primary/90">
                    <CalendarCheck className="mr-2 h-4 w-4" /> Demander un Devis / RDV
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" variant="ghost" className="text-primary hover:text-primary/90">
            Plus de professionnels <Briefcase className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
