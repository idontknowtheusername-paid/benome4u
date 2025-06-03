import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Zap, Users, Sparkles, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/personalData';

const CareersPage = () => {
  const jobOpenings = [
    { title: "Développeur Frontend Senior (React)", location: "Dakar, Sénégal (Hybride)", type: "Temps Plein", link: "#" },
    { title: "Chef de Produit Marketplace", location: "Abidjan, Côte d'Ivoire", type: "Temps Plein", link: "#" },
    { title: "Spécialiste Marketing Digital", location: "Lagos, Nigéria (Remote)", type: "Temps Plein", link: "#" },
    { title: "Responsable Service Client Bilingue", location: "Dakar, Sénégal", type: "Temps Plein", link: "#" },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <Briefcase className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Rejoignez l'Équipe <span className="gradient-text">{personalData.siteName}</span>
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Façonnez l'avenir du commerce en Afrique de l'Ouest avec nous. Découvrez nos opportunités de carrière passionnantes.
        </p>
      </motion.div>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-16 bg-card p-8 md:p-12 rounded-xl shadow-xl glassmorphic-card"
      >
        <h2 className="text-3xl font-bold mb-8 text-center flex items-center justify-center">
          <Zap className="h-8 w-8 mr-3 text-primary" /> Pourquoi travailler chez {personalData.siteName} ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <Sparkles className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Impact Significatif</h3>
            <p className="text-muted-foreground">Contribuez à un projet qui transforme réellement la vie des gens et l'économie locale.</p>
          </div>
          <div className="p-6">
            <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Culture Collaborative</h3>
            <p className="text-muted-foreground">Rejoignez une équipe passionnée, diverse et solidaire où chaque voix compte.</p>
          </div>
          <div className="p-6">
            <Briefcase className="h-12 w-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Croissance et Apprentissage</h3>
            <p className="text-muted-foreground">Bénéficiez d'opportunités de développement professionnel continu et relevez des défis stimulants.</p>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        <h2 className="text-3xl font-bold mb-10 text-center">Postes Ouverts Actuellement</h2>
        {jobOpenings.length > 0 ? (
          <div className="space-y-6 max-w-3xl mx-auto">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.1 * index + 0.5 }}
                className="bg-card p-6 rounded-lg shadow-md border border-border hover:border-primary transition-colors flex flex-col sm:flex-row justify-between items-start sm:items-center"
              >
                <div>
                  <h3 className="text-xl font-semibold text-primary">{job.title}</h3>
                  <p className="text-muted-foreground text-sm">{job.location} - {job.type}</p>
                </div>
                <Button asChild className="mt-4 sm:mt-0 bg-primary hover:bg-primary/90">
                  <a href={job.link} target="_blank" rel="noopener noreferrer">
                    Voir l'Offre <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground text-lg">
            Nous n'avons pas de postes ouverts pour le moment, mais nous sommes toujours à la recherche de talents exceptionnels. N'hésitez pas à nous envoyer une candidature spontanée !
          </p>
        )}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Envoyer une Candidature Spontanée
          </Button>
        </div>
      </motion.section>
    </div>
  );
};

export default CareersPage;