import React from 'react';
import { motion } from 'framer-motion';
import { Building, Users, Globe, Target, ShieldCheck, Lightbulb, Zap } from 'lucide-react';
import { personalData } from '@/lib/personalData';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const AboutPage = () => {
  const coreValues = [
    { icon: <Lightbulb className="h-8 w-8 text-primary" />, title: "Innovation Continue", description: "Nous repoussons constamment les limites pour offrir des solutions de pointe." },
    { icon: <ShieldCheck className="h-8 w-8 text-primary" />, title: "Confiance & Sécurité", description: "La sécurité de vos transactions et de vos données est notre priorité absolue." },
    { icon: <Users className="h-8 w-8 text-primary" />, title: "Approche Communautaire", description: "Nous construisons une plateforme pour et avec la communauté ouest-africaine." },
    { icon: <Globe className="h-8 w-8 text-primary" />, title: "Impact Local Positif", description: "Nous visons à dynamiser l'économie locale et à créer des opportunités." },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-16"
      >
        <Zap className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          À Propos de <span className="gradient-text">{personalData.siteName}</span>
        </h1>
        <p className="text-xl text-muted-foreground">
          {personalData.tagline}. Notre mission est de révolutionner le commerce en ligne en Afrique de l'Ouest grâce à une technologie innovante et une approche centrée sur l'utilisateur.
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        {/* Section Notre Histoire */}
        <motion.section 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h2 className="text-3xl font-bold mb-6 flex items-center">
              <Building className="h-8 w-8 mr-3 text-primary" />
              Notre Histoire
            </h2>
            <p className="text-muted-foreground mb-4">
              Fondée avec la vision de simplifier et de sécuriser les échanges commerciaux en Afrique de l'Ouest, {personalData.siteName} est née d'une passion pour la technologie et d'un engagement profond envers le développement économique de la région. Nous avons identifié un besoin crucial pour une plateforme unifiée, moderne et fiable, capable de connecter acheteurs et vendeurs de manière transparente.
            </p>
            <p className="text-muted-foreground">
              Depuis nos débuts, nous avons travaillé sans relâche pour construire une marketplace qui non seulement répond aux besoins actuels, mais anticipe également les tendances futures du commerce électronique. Notre équipe est composée d'experts locaux et internationaux, tous unis par l'objectif de faire de {personalData.siteName} le leader incontesté du marché.
            </p>
          </div>
          <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl">
             <img   
              className="w-full h-full object-cover"
              alt="Équipe Benome travaillant ensemble"
             src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1932&auto=format&fit=crop" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* Section Notre Mission et Vision */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20 text-center"
        >
          <h2 className="text-3xl font-bold mb-10 flex items-center justify-center">
            <Target className="h-8 w-8 mr-3 text-primary" />
            Notre Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border glassmorphic-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Mission</h3>
              <p className="text-muted-foreground">
                Connecter l'Afrique de l'Ouest au futur du commerce en fournissant une plateforme marketplace innovante, sécurisée et accessible à tous. Nous nous engageons à autonomiser les individus et les entreprises en facilitant les transactions et en stimulant la croissance économique locale.
              </p>
            </div>
            <div className="bg-card p-8 rounded-xl shadow-lg border border-border glassmorphic-card">
              <h3 className="text-2xl font-semibold mb-4 text-primary">Vision</h3>
              <p className="text-muted-foreground">
                Devenir la marketplace de référence en Afrique, reconnue pour son excellence technologique, son impact positif sur les communautés et sa contribution à un écosystème commercial numérique florissant et inclusif pour le continent.
              </p>
            </div>
          </div>
        </motion.section>

        <Separator className="my-20" />

        {/* Section Nos Valeurs */}
        <motion.section 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-center mb-12">Nos Valeurs Fondamentales</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <motion.div 
                key={index}
                className="bg-card p-6 rounded-xl shadow-lg text-center border border-border hover:border-primary transition-colors duration-300 glassmorphic-card"
                whileHover={{ y: -5 }}
              >
                <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
        
        <div className="text-center mt-16">
            <p className="text-lg text-muted-foreground">
                Prêt à découvrir la différence {personalData.siteName} ? <a href="/" className="text-primary font-semibold hover:underline">Explorez notre plateforme dès maintenant.</a>
            </p>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;