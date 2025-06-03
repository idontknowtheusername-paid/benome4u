
export const initialProjectData = [
  {
    id: "benome-marketplace-launch",
    title: "Lancement de Benome Marketplace",
    slug: "lancement-benome-marketplace",
    description: "Le projet de développement et de lancement de la plateforme Benome, une marketplace futuriste pour l'Afrique de l'Ouest.",
    longDescription: `
# Lancement de Benome Marketplace

Ce projet représente la conception, le développement et le lancement de **Benome**, une plateforme marketplace de nouvelle génération destinée à transformer le commerce en ligne en Afrique de l'Ouest. L'objectif était de créer une solution complète, intuitive et sécurisée pour l'achat et la vente de biens immobiliers, de véhicules, de services professionnels et d'une large gamme d'autres produits.

## Fonctionnalités Clés Développées

- **Interface Utilisateur Futuriste :** Design moderne avec thèmes adaptatifs, animations fluides (Framer Motion), et une expérience utilisateur optimisée (UX).
- **Sections Spécialisées :** Modules dédiés pour l'immobilier, l'automobile, les services et une marketplace générale, chacun avec des filtres et fonctionnalités spécifiques.
- **Gestion de Compte Avancée :** Tableaux de bord personnalisés pour les utilisateurs et les vendeurs, avec des outils d'analyse et de gestion des annonces.
- **Système de Recherche Intelligent :** Recherche globale avec suggestions IA et filtres avancés par catégorie.
- **Localisation et Multilinguisme :** Prise en charge de plusieurs langues et devises, avec détection automatique et contenu adapté à la région.
- **Admin Panel Robuste :** Interface d'administration complète pour la gestion des utilisateurs, des annonces, la modération et le suivi des performances.
- **Optimisation des Performances :** Chargement rapide des pages, images optimisées (WebP/AVIF), et architecture pensée pour la scalabilité.
- **Sécurité Renforcée :** Protocoles de sécurité standards, préparation pour KYC et détection de fraude.

## Technologies Utilisées

- **Frontend :** React 18, Vite, TailwindCSS, shadcn/ui, Framer Motion, Lucide React.
- **Routing :** React Router 6.
- **Stockage de données (initial) :** localStorage (avec plan de migration vers Supabase).
- **Principes de Design :** Glassmorphism, Neumorphism (touches légères), typographie moderne, palettes de couleurs vibrantes.

## Défis et Solutions

Un défi majeur a été d'intégrer une multitude de fonctionnalités complexes tout en maintenant une interface utilisateur épurée et facile à naviguer. L'utilisation de composants modulaires (shadcn/ui) et une architecture de l'information bien pensée ont été cruciales.

L'optimisation des performances pour un chargement rapide, en particulier avec de nombreuses images et animations, a nécessité une attention particulière au code splitting (via Vite) et à la gestion des assets.

## Prochaines Étapes (Vision)

- Intégration complète avec Supabase pour la persistance des données.
- Développement des fonctionnalités IA (chatbots, recommandations, estimations).
- Mise en place des systèmes de paiement (Stripe).
- Intégration des fonctionnalités avancées (AR, VR, NFT, Blockchain).

## Résultats Attendus

Benome vise à devenir la plateforme de référence en Afrique de l'Ouest, en offrant une expérience d'achat et de vente inégalée, stimulant ainsi l'économie numérique locale et régionale.
    `,
    coverImage: "benome-platform-digital-art",
    demoUrl: "#", // Le site actuel est la démo
    repoUrl: "#", // Le code est géré en interne
    technologies: ["React", "Vite", "TailwindCSS", "Shadcn/UI", "Framer Motion", "JavaScript"],
    category: "Plateforme Web",
    featured: true,
    completedAt: "2025-06-02T00:00:00Z" 
  },
  {
    id: "1",
    title: "E-commerce React",
    slug: "e-commerce-react",
    description: "Une plateforme e-commerce complète construite avec React, Redux et Firebase.",
    longDescription: `
# E-commerce React

Une plateforme e-commerce complète construite avec React, Redux et Firebase. Ce projet inclut l'authentification des utilisateurs, la gestion des produits, un panier d'achat, le paiement avec Stripe et bien plus encore.

## Fonctionnalités

- Authentification des utilisateurs (inscription, connexion, récupération de mot de passe)
- Catalogue de produits avec filtrage et recherche
- Système de panier d'achat
- Passerelle de paiement avec Stripe
- Gestion des commandes
- Tableau de bord administrateur
- Responsive design

## Technologies utilisées

- React.js pour l'interface utilisateur
- Redux pour la gestion de l'état
- Firebase pour l'authentification et la base de données
- Stripe pour les paiements
- Styled Components pour le styling
- Jest et React Testing Library pour les tests

## Défis et solutions

L'un des plus grands défis de ce projet était la gestion de l'état du panier d'achat entre les sessions. J'ai résolu ce problème en utilisant Redux Persist pour sauvegarder l'état du panier dans le localStorage.

Un autre défi était l'optimisation des performances avec un grand nombre de produits. J'ai implémenté la pagination côté serveur et la virtualisation pour améliorer les performances.

## Résultats

Ce projet a été un grand succès, avec plus de 1000 utilisateurs actifs par mois et un taux de conversion de 5%. Il a également été bien reçu par la communauté, avec plus de 100 étoiles sur GitHub.
    `,
    coverImage: "ecommerce-project",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/ecommerce-react",
    technologies: ["React", "Redux", "Firebase", "Stripe", "Styled Components"],
    category: "Web",
    featured: true,
    completedAt: "2023-08-15T00:00:00Z"
  },
  {
    id: "2",
    title: "Application de gestion de tâches",
    slug: "application-gestion-taches",
    description: "Une application de gestion de tâches avec des fonctionnalités de collaboration en temps réel.",
    longDescription: `
# Application de gestion de tâches

Une application de gestion de tâches moderne avec des fonctionnalités de collaboration en temps réel. Ce projet permet aux utilisateurs de créer des tâches, de les organiser en projets, de définir des échéances et de collaborer avec d'autres utilisateurs.

## Fonctionnalités

- Création et gestion de tâches
- Organisation en projets et listes
- Collaboration en temps réel
- Notifications et rappels
- Thèmes personnalisables
- Mode hors ligne avec synchronisation

## Technologies utilisées

- React.js pour l'interface utilisateur
- Socket.io pour la collaboration en temps réel
- Node.js et Express pour le backend
- MongoDB pour la base de données
- JWT pour l'authentification
- Service Workers pour le mode hors ligne

## Défis et solutions

Le plus grand défi de ce projet était la mise en œuvre de la collaboration en temps réel. J'ai utilisé Socket.io pour permettre aux utilisateurs de voir les modifications en temps réel sans avoir à actualiser la page.

Un autre défi était la gestion des conflits lorsque plusieurs utilisateurs modifiaient la même tâche simultanément. J'ai implémenté un système de verrouillage optimiste pour résoudre ce problème.

## Résultats

Cette application est maintenant utilisée par plusieurs équipes dans différentes entreprises. Elle a permis d'améliorer la productivité et la collaboration au sein de ces équipes.
    `,
    coverImage: "task-management-app",
    demoUrl: "https://example.com/demo",
    repoUrl: "https://github.com/example/task-app",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB", "JWT"],
    category: "Web",
    featured: false, // Changed to false to have only 2 featured projects
    completedAt: "2023-06-10T00:00:00Z"
  }
];
