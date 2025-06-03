
import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Filter, Search, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const RealEstatePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-green-900/10 text-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Le Meilleur de l'<span className="gradient-text-emerald">Immobilier</span> en Afrique de l'Ouest
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Appartements, maisons, terrains et locaux commerciaux. Trouvez votre prochaine propriété ou investissement ici.
          </p>
        </motion.div>

        {/* Search and Filters Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-card p-6 rounded-xl shadow-xl mb-12 sticky top-20 z-50 glassmorphic-card"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div className="md:col-span-2">
              <label htmlFor="search-location" className="block text-sm font-medium mb-1">Recherche</label>
              <div className="relative">
                <Input id="search-location" type="text" placeholder="Entrez une ville, quartier, mots-clés..." className="pl-10 h-12 text-base" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="property-type" className="block text-sm font-medium mb-1">Type de bien</label>
              <select id="property-type" className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <option>Tous types</option>
                <option>Appartement</option>
                <option>Maison</option>
                <option>Terrain</option>
                <option>Commercial</option>
              </select>
            </div>
            <Button className="h-12 text-base w-full bg-primary hover:bg-primary/90">
              <Filter className="mr-2 h-5 w-5" /> Rechercher
            </Button>
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
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-primary/20 transition-shadow duration-300 glassmorphic-card"
            >
              <div className="relative h-56 bg-muted">
                <img  
                    className="w-full h-full object-cover" 
                    alt={`Propriété ${item} à vendre ou à louer`}
                 src="https://images.unsplash.com/photo-1687949395814-84675a8042f3" />
                <div className="absolute top-2 right-2 bg-primary text-primary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                  À Vendre
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 truncate">Superbe Villa avec Piscine à Saly</h3>
                <div className="flex items-center text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>Saly, Sénégal</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 h-12 overflow-hidden">3 chambres, 2 salles de bain, grand jardin, proche de la mer...</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-primary">150 000 000 FCFA</p>
                  <Button variant="outline" size="sm">Voir Détails</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <Button size="lg" variant="ghost" className="text-primary hover:text-primary/90">
            Charger plus d'annonces <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

      </div>
    </div>
  );
};

export default RealEstatePage;
