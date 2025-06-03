
import React from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { personalData } from '@/lib/personalData';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQPage = () => {
  const faqs = [
    {
      id: "general-1",
      category: "Général",
      question: `Qu'est-ce que ${personalData.siteName} ?`,
      answer: `${personalData.siteName} est une plateforme marketplace innovante conçue pour l'Afrique de l'Ouest, facilitant l'achat et la vente de biens immobiliers, véhicules, services professionnels et divers autres produits. Notre objectif est de simplifier le commerce en ligne et de le rendre plus sûr et accessible.`,
    },
    {
      id: "compte-1",
      category: "Compte Utilisateur",
      question: "Comment créer un compte sur Benome ?",
      answer: "Pour créer un compte, cliquez sur le bouton 'Connexion / Inscription' en haut à droite de la page. Vous pourrez alors vous inscrire en utilisant votre adresse e-mail ou via des services tiers comme Google ou Facebook (si activé). Suivez simplement les instructions à l'écran.",
    },
    {
      id: "compte-2",
      category: "Compte Utilisateur",
      question: "J'ai oublié mon mot de passe, que faire ?",
      answer: "Si vous avez oublié votre mot de passe, cliquez sur le lien 'Mot de passe oublié ?' sur la page de connexion. Entrez votre adresse e-mail et nous vous enverrons un lien pour réinitialiser votre mot de passe.",
    },
    {
      id: "publier-annonce",
      category: "Vendre sur Benome",
      question: "Comment publier une annonce ?",
      answer: "Une fois connecté, accédez à votre tableau de bord et cherchez le bouton 'Publier une annonce' ou 'Nouvelle annonce'. Choisissez la catégorie appropriée, remplissez tous les champs requis (titre, description, prix, photos, etc.) et soumettez votre annonce. Elle sera examinée par notre équipe avant d'être publiée.",
    },
    {
      id: "paiement",
      category: "Paiements et Transactions",
      question: "Quels sont les moyens de paiement acceptés ?",
      answer: `Nous acceptons plusieurs moyens de paiement, y compris les cartes bancaires (Visa, Mastercard), les paiements mobiles (Orange Money, Wave, etc. selon disponibilité régionale), PayPal et PayDunya. Les options exactes peuvent varier en fonction de votre pays.`,
    },
    {
      id: "securite-compte",
      category: "Sécurité",
      question: "Comment puis-je sécuriser mon compte ?",
      answer: "Pour sécuriser votre compte, utilisez un mot de passe fort et unique. Activez l'authentification à deux facteurs (2FA) si disponible dans vos paramètres de compte. Méfiez-vous des e-mails de phishing et ne partagez jamais vos identifiants.",
    },
    {
        id: "contacter-utilisateur",
        category: "Interaction",
        question: "Comment contacter un vendeur ou un acheteur ?",
        answer: "Sur la page d'une annonce, vous trouverez généralement un bouton ou un lien pour contacter le vendeur (par exemple, 'Contacter le vendeur', 'Envoyer un message'). Utilisez notre système de messagerie intégré pour communiquer en toute sécurité. Les coordonnées directes ne sont partagées qu'avec le consentement des deux parties."
    },
    {
        id: "signaler-probleme",
        category: "Support et Litiges",
        question: "Comment signaler un problème ou une annonce suspecte ?",
        answer: "Si vous rencontrez un problème ou si une annonce vous semble suspecte, vous pouvez la signaler en utilisant le lien 'Signaler cette annonce' présent sur la page de l'annonce. Pour d'autres problèmes, contactez notre support client via le Centre d'Aide."
    }
  ];

  const faqCategories = [...new Set(faqs.map(faq => faq.category))];

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
          Questions Fréquemment Posées <span className="gradient-text">(FAQ)</span>
        </h1>
        <p className="text-xl text-muted-foreground">Trouvez des réponses rapides à vos questions sur {personalData.siteName}.</p>
      </motion.div>

      {faqCategories.map(category => (
        <motion.section
          key={category}
          id={`cat-${category.toLowerCase().replace(/\s+/g, '-')}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * faqCategories.indexOf(category) }}
          className="mb-12 max-w-3xl mx-auto"
        >
          <h2 className="text-2xl font-bold mb-6 border-l-4 border-primary pl-4">{category}</h2>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqs.filter(faq => faq.category === category).map((faqItem) => (
              <AccordionItem key={faqItem.id} value={faqItem.id} className="bg-card border border-border rounded-lg shadow-sm hover:border-primary/50 transition-colors">
                <AccordionTrigger className="p-6 text-left font-semibold hover:no-underline">
                  {faqItem.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0 text-muted-foreground">
                  {faqItem.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.section>
      ))}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 + 0.1 * faqCategories.length }}
        className="text-center mt-16"
      >
        <p className="text-lg text-muted-foreground mb-4">Vous n'avez pas trouvé de réponse ?</p>
        <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
          <a href="/contactez-nous">Contactez notre support</a>
        </Button>
      </motion.div>
    </div>
  );
};

export default FAQPage;
