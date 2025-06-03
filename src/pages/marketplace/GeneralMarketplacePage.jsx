
import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, Search, Filter, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const GeneralMarketplacePage = () => {
  const productCategories = [
    "Électronique", "Mode & Vêtements", "Maison & Jardin", "Sports & Loisirs", "Culture & Divertissement", "Artisanat Local"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-yellow-900/10 text-foreground py-12">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Marketplace <span className="gradient-text-amber">Générale</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez une grande variété de produits : électronique, mode, artisanat local et bien plus encore.
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
              <label htmlFor="search-product" className="block text-sm font-medium mb-1">Que recherchez-vous ?</label>
              <div className="relative">
                <Input id="search-product" type="text" placeholder="Nom du produit, marque, catégorie..." className="pl-10 h-12 text-base" />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              </div>
            </div>
            <Button className="h-12 text-base w-full bg-primary hover:bg-primary/90">
              <Filter className="mr-2 h-5 w-5" /> Rechercher un Produit
            </Button>
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium mb-2">Catégories Populaires :</label>
            <div className="flex flex-wrap gap-2">
              {productCategories.map(category => (
                <Badge key={category} variant="secondary" className="cursor-pointer hover:bg-primary/20 transition-colors px-3 py-1 text-sm">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Listings Area - Placeholder */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: item * 0.05 }}
              className="bg-card rounded-lg shadow-lg overflow-hidden hover:shadow-primary/20 transition-shadow duration-300 flex flex-col glassmorphic-card"
            >
              <div className="relative aspect-square bg-muted">
                <img  
                    className="w-full h-full object-cover" 
                    alt={`Produit ${item} en vente`}
                 src="https://images.unsplash.com/photo-1635187593801-db6b82b8ebb5" />
                <Badge variant="destructive" className="absolute top-2 right-2">Promo !</Badge>
              </div>
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1 truncate">Nom du Produit Incroyable {item}</h3>
                <p className="text-sm text-muted-foreground mb-2">Catégorie du Produit</p>
                
                <div className="flex items-baseline gap-2 mb-3">
                    <p className="text-xl font-bold text-primary">45 000 FCFA</p>
                    <p className="text-sm text-muted-foreground line-through">60 000 FCFA</p>
                </div>
                <Button variant="outline" size="sm" className="w-full mt-auto">
                  <ShoppingBag className="mr-2 h-4 w-4" /> Ajouter au Panier
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-16">
          <Button size="lg" variant="ghost" className="text-primary hover:text-primary/90">
            Voir plus de produits <Tag className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default GeneralMarketplacePage;
