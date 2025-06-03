import React from 'react';
import { motion } from 'framer-motion';
import { Newspaper, Zap, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/personalData';

const PressPage = () => {
  const pressReleases = [
    { date: "15 Mai 2025", title: `${personalData.siteName} lève 5 millions USD pour son expansion en Afrique de l'Ouest`, link: "#" },
    { date: "10 Mars 2025", title: `Innovation : ${personalData.siteName} lance une fonctionnalité de visite virtuelle 360° pour l'immobilier`, link: "#" },
    { date: "20 Janvier 2025", title: `Lancement officiel de ${personalData.siteName}, la nouvelle marketplace qui révolutionne le e-commerce régional`, link: "#" },
  ];

  const mediaAssets = [
    { name: "Logo Benome (Plusieurs formats)", link: "#" },
    { name: "Kit Presse Complet (Images, descriptifs)", link: "#" },
    { name: "Photos de l'équipe dirigeante", link: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Newspaper className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Espace <span className="gradient-text">Presse</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Retrouvez nos dernières actualités, communiqués de presse et ressources pour les médias.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Communiqués de Presse */}
        <motion.section
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <h2 className="text-3xl font-bold mb-8 flex items-center">
            <Zap className="h-8 w-8 mr-3 text-primary" /> Derniers Communiqués
          </h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 + 0.3 }}
                className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors"
              >
                <p className="text-sm text-muted-foreground mb-1">{release.date}</p>
                <h3 className="text-xl font-semibold text-primary mb-2">{release.title}</h3>
                <Button variant="link" asChild className="px-0">
                  <a href={release.link} target="_blank" rel="noopener noreferrer">
                    Lire le communiqué <Download className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Contact & Ressources */}
        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="lg:col-span-1 space-y-8"
        >
          <div className="bg-card p-6 rounded-xl shadow-lg glassmorphic-card border border-border">
            <h3 className="text-2xl font-semibold mb-4">Contact Presse</h3>
            <p className="text-muted-foreground mb-1">Pour toute demande d'information, interview ou partenariat média :</p>
            <a href={`mailto:presse@${personalData.siteName.toLowerCase()}.com`} className="text-primary font-medium hover:underline">
              presse@{personalData.siteName.toLowerCase()}.com
            </a>
          </div>

          <div className="bg-card p-6 rounded-xl shadow-lg glassmorphic-card border border-border">
            <h3 className="text-2xl font-semibold mb-4">Ressources Médias</h3>
            <ul className="space-y-3">
              {mediaAssets.map((asset, index) => (
                <li key={index}>
                  <Button variant="outline" asChild className="w-full justify-start">
                    <a href={asset.link} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" /> {asset.name}
                    </a>
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        </motion.aside>
      </div>
    </div>
  );
};

export default PressPage;