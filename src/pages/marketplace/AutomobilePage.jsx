
import React from 'react';
import { motion } from 'framer-motion';
import { Car, Search, Filter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const AutomobilePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-red-900/10 text-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Trouvez Votre Prochain <span className="gradient-text-crimson">Véhicule</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Voitures, motos, et utilitaires. Neufs ou d'occasion, explorez notre catalogue complet.
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
              <label htmlFor="search-vehicle" className="block text-sm font-medium mb-1">Recherche</label>
              <div className="relative">
                <Input id="search-vehicle" type="text" placeholder="Marque, modèle, année..." className="pl-10 h-12 text-base" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <div>
              <label htmlFor="vehicle-type" className="block text-sm font-medium mb-1">Type de véhicule</label>
              <select id="vehicle-type" className="w-full h-12 rounded-md border border-input bg-transparent px-3 py-2 text-base ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
                <option>Tous types</option>
                <option>Voiture</option>
                <option>Moto</option>
                <option>Utilitaire</option>
                <option>Camion</option>
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
                    alt={`Véhicule ${item} en vente`}
                 src="https://images.unsplash.com/photo-1696520727514-6527f46bc4d3" />
                <div className="absolute top-2 right-2 bg-secondary text-secondary-foreground px-3 py-1 rounded-md text-sm font-semibold">
                  Occasion
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 truncate">Toyota RAV4 2022 - Excellent État</h3>
                <div className="flex items-center text-muted-foreground text-sm mb-1">
                  <span>Kilométrage: 25,000 km</span>
                </div>
                 <div className="flex items-center text-muted-foreground text-sm mb-2">
                  <span>Transmission: Automatique</span>
                </div>
                <p className="text-sm text-muted-foreground mb-3 h-12 overflow-hidden">SUV fiable et économique, parfait pour la ville et les longs trajets.</p>
                <div className="flex justify-between items-center">
                  <p className="text-2xl font-bold text-primary">18 500 000 FCFA</p>
                  <Button variant="outline" size="sm">Voir Détails</Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
         <div className="text-center mt-16">
          <Button size="lg" variant="ghost" className="text-primary hover:text-primary/90">
            Charger plus de véhicules <Car className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AutomobilePage;
