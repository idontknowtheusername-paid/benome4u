# Benome Marketplace - Frontend

Bienvenue sur le dépôt frontend de **Benome**, une plateforme marketplace moderne et futuriste pour l'Afrique de l'Ouest. Ce projet est construit avec React, Vite, TailwindCSS, shadcn/ui, et Framer Motion.

## Table des Matières

1.  [Vue d'Ensemble](#vue-densemble)
2.  [Fonctionnalités Frontend](#fonctionnalités-frontend)
3.  [Technologies Utilisées (Frontend)](#technologies-utilisées-frontend)
4.  [Installation et Lancement (Frontend)](#installation-et-lancement-frontend)
5.  [Structure du Projet (Frontend)](#structure-du-projet-frontend)
6.  [**Guide pour le Développement Backend**](#guide-pour-le-développement-backend)
    *   [Philosophie Générale du Backend](#philosophie-générale-du-backend)
    *   [Modèles de Données Principaux (Suggestions)](#modèles-de-données-principaux-suggestions)
    *   [Endpoints API Requis (Exemples)](#endpoints-api-requis-exemples)
        *   [Authentification et Utilisateurs](#authentification-et-utilisateurs)
        *   [Annonces (Générique)](#annonces-générique)
        *   [Immobilier](#immobilier)
        *   [Automobile](#automobile)
        *   [Services Professionnels](#services-professionnels)
        *   [Marketplace Générale (Produits)](#marketplace-générale-produits)
        *   [Paiements (PayPal & PayDunya)](#paiements-paypal--paydunya)
        *   [Messagerie Interne](#messagerie-interne)
        *   [Notifications](#notifications)
        *   [Administration](#administration)
        *   [Recherche et Filtres](#recherche-et-filtres)
        *   [Localisation et Multilinguisme](#localisation-et-multilinguisme)
        *   [Upload de Fichiers (Images, Documents)](#upload-de-fichiers-images-documents)
    *   [Considérations de Sécurité Backend](#considérations-de-sécurité-backend)
    *   [Scalabilité et Performance Backend](#scalabilité-et-performance-backend)
7.  [Contribution](#contribution)
8.  [Licence](#licence)

## 1. Vue d'Ensemble

Benome vise à être la plateforme de référence pour l'achat, la vente et la location de biens immobiliers, de véhicules, ainsi que pour la recherche de services professionnels et l'achat de produits divers en Afrique de l'Ouest. L'interface utilisateur est conçue pour être intuitive, moderne et hautement performante.

## 2. Fonctionnalités Frontend

*   Navigation intuitive entre les sections : Immobilier, Automobile, Services, Marketplace Générale.
*   Pages de listing avec filtres et recherche (design frontend uniquement pour l'instant).
*   Pages de détail pour les annonces (design frontend).
*   Interface d'administration basique (frontend pour la gestion des données actuellement en localStorage).
*   Pages statiques (À Propos, Contact, FAQ, Carrières, etc.).
*   Thème sombre/clair adaptatif.
*   Animations fluides avec Framer Motion.

## 3. Technologies Utilisées (Frontend)

*   **Vite:** Build tool et serveur de développement rapide.
*   **React 18.2.0:** Bibliothèque JavaScript pour la construction d'interfaces utilisateur.
*   **React Router 6.16.0:** Pour la navigation côté client.
*   **TailwindCSS 3.3.3:** Framework CSS utility-first.
*   **shadcn/ui:** Collection de composants d'interface utilisateur réutilisables.
*   **Lucide React:** Bibliothèque d'icônes.
*   **Framer Motion 10.16.4:** Pour les animations.
*   **JavaScript (ES6+):** Langage de programmation.
*   **date-fns:** Pour la manipulation des dates.
*   **localStorage:** Pour la persistance des données de blog/projets en phase de développement (migration vers Supabase/backend prévue).

## 4. Installation et Lancement (Frontend)

Assurez-vous d'avoir Node.js (version 20 ou supérieure) et npm installés.

1.  **Clonez le dépôt (si applicable) ou téléchargez les fichiers.**
    ```bash
    # git clone [URL_DU_DEPOT]
    # cd benome-marketplace-frontend
    ```

2.  **Installez les dépendances :**
    Le système Hostinger Horizons exécute `npm install` automatiquement lorsque `package.json` est créé ou mis à jour.

3.  **Lancez le serveur de développement :**
    Le système Hostinger Horizons exécute `npm run dev` automatiquement. Vous pourrez voir l'application sur le port spécifié (généralement `http://localhost:5173`).

4.  **Pour construire pour la production :**
    Le système Hostinger Horizons exécute `npm run build` automatiquement. Les fichiers optimisés seront générés dans le dossier `dist/`.

## 5. Structure du Projet (Frontend)

```
src/
├── assets/               # Images statiques, polices, etc.
├── components/
│   ├── ui/               # Composants shadcn/ui (Button, Card, etc.)
│   ├── AdminBlogForm.jsx # Formulaire admin pour le blog
│   ├── AdminProjectForm.jsx# Formulaire admin pour les projets
│   └── ...               # Autres composants réutilisables (Navbar, Footer, etc.)
├── layouts/
│   └── MainLayout.jsx    # Structure principale des pages
├── lib/
│   ├── data/             # Données initiales/mock (blogPostsContent, projectContent)
│   ├── blogData.js       # Logique CRUD pour les articles (localStorage)
│   ├── projectData.js    # Logique CRUD pour les projets (localStorage)
│   ├── personalData.js   # Données de configuration du site
│   └── utils.js          # Fonctions utilitaires (cn, generateId)
├── pages/
│   ├── admin/
│   │   └── AdminDashboardPage.jsx # Tableau de bord admin général
│   ├── marketplace/
│   │   ├── RealEstatePage.jsx
│   │   ├── AutomobilePage.jsx
│   │   ├── ServicesPage.jsx
│   │   └── GeneralMarketplacePage.jsx
│   ├── static/           # Pages statiques (Careers, Press, FAQ, etc.)
│   ├── AboutPage.jsx
│   ├── AdminPage.jsx     # Page admin pour blog/portfolio
│   ├── BlogPage.jsx
│   ├── BlogPostPage.jsx
│   ├── ContactPage.jsx
│   ├── HomePage.jsx      # Page d'accueil principale de Benome
│   ├── NotFoundPage.jsx
│   ├── ProjectDetailPage.jsx
│   └── ProjectsPage.jsx
├── App.jsx               # Configuration principale des routes
├── index.css             # Styles globaux et configuration Tailwind
└── main.jsx              # Point d'entrée de l'application React
```

## 6. Guide pour le Développement Backend

Cette section fournit des directives et des suggestions pour la construction du backend de Benome. Le backend sera responsable de la logique métier, de la gestion des données, de l'authentification, des paiements, etc.

### Philosophie Générale du Backend

*   **API RESTful ou GraphQL:** Choisissez une architecture d'API qui convient le mieux à la complexité et aux besoins de récupération de données. RESTful est souvent plus simple pour commencer.
*   **Microservices (Optionnel):** Pour une grande scalabilité, envisagez une architecture de microservices à long terme (ex: service utilisateurs, service annonces, service paiements). Pour commencer, une approche monolithique modulaire peut être suffisante.
*   **Base de Données:** Choisissez une base de données robuste. PostgreSQL est un excellent choix pour sa flexibilité et ses fonctionnalités. MongoDB (NoSQL) peut être envisagé pour certains types de données (ex: messagerie, logs). Supabase (basé sur PostgreSQL) est fortement recommandé et peut être intégré facilement avec ce frontend.
*   **Langage et Framework:** Node.js avec Express.js/NestJS, Python avec Django/FastAPI, ou Ruby on Rails sont des choix populaires. Sélectionnez celui avec lequel votre équipe est la plus productive.

### Modèles de Données Principaux (Suggestions)

Ces modèles sont des suggestions et devront être affinés.

*   **User:**
    *   `id` (PK)
    *   `firstName`, `lastName`
    *   `email` (unique, indexé)
    *   `passwordHash`
    *   `phoneNumber` (optionnel, unique)
    *   `profilePictureUrl`
    *   `address` (peut être un objet JSON ou une table séparée)
    *   `kycStatus` (enum: `NOT_SUBMITTED`, `PENDING`, `VERIFIED`, `REJECTED`)
    *   `roles` (ex: `USER`, `SELLER`, `ADMIN`)
    *   `emailVerifiedAt`, `phoneVerifiedAt`
    *   `lastLoginAt`, `createdAt`, `updatedAt`
    *   `preferredLanguage`, `currency`
    *   `isOnline` (booléen, pour la messagerie)
    *   `stripeCustomerId` / `paypalPayerId` / `paydunyaCustomerId` (pour les paiements)

*   **Listing (Annonce - Modèle de base):**
    *   `id` (PK)
    *   `userId` (FK vers User)
    *   `title`
    *   `description` (texte long)
    *   `price`
    *   `currency` (ex: `XOF`, `USD`)
    *   `category` (enum: `REAL_ESTATE`, `AUTOMOBILE`, `SERVICE`, `PRODUCT`)
    *   `subCategory` (ex: `Appartement`, `Voiture de tourisme`, `Plomberie`, `Smartphone`)
    *   `location` (peut être un objet JSON avec `city`, `country`, `coordinates` ou une table séparée)
    *   `images` (array d'URLs ou table séparée `ListingImage`)
    *   `videos` (array d'URLs ou table séparée)
    *   `status` (enum: `DRAFT`, `PENDING_APPROVAL`, `ACTIVE`, `SOLD_RENTED`, `EXPIRED`, `REJECTED`, `DELETED`)
    *   `isFeatured` (booléen)
    *   `boostPackage` (enum, ex: `EXPRESS`, `STANDARD`, `PREMIUM`, `VIP`, `MEGA`)
    *   `boostExpiresAt`
    *   `viewCount`
    *   `contactCount`
    *   `createdAt`, `updatedAt`, `publishedAt`, `expiresAt`

*   **RealEstateListing (Hérite de Listing ou table liée):**
    *   `listingId` (PK, FK vers Listing)
    *   `propertyType` (enum: `APPARTMENT`, `HOUSE`, `LAND`, `COMMERCIAL`)
    *   `transactionType` (enum: `SALE`, `RENTAL`)
    *   `bedrooms`, `bathrooms`, `areaSqMeters`
    *   `amenities` (array de strings ou table de jointure vers `Amenity`)
    *   `constructionYear`
    *   `has360Tour` (booléen)
    *   `virtualTourUrl`

*   **AutomobileListing (Hérite de Listing ou table liée):**
    *   `listingId` (PK, FK vers Listing)
    *   `vehicleType` (enum: `CAR`, `MOTORCYCLE`, `UTILITY`)
    *   `make`, `model`, `year`
    *   `mileage`, `fuelType`, `transmissionType`
    *   `condition` (enum: `NEW`, `USED`)
    *   `vinNumber` (optionnel)
    *   `hasVirtualInspection` (booléen)

*   **ServiceListing (Hérite de Listing ou table liée):**
    *   `listingId` (PK, FK vers Listing)
    *   `serviceCategory` (ex: `BTP`, `TECH`, `DOMESTIC`)
    *   `availability` (ex: `lun-ven 9h-18h`)
    *   `experienceYears` (optionnel)
    *   `portfolioLinks` (array d'URLs)
    *   `canProvideQuotes` (booléen)

*   **ProductListing (Hérite de Listing ou table liée pour Marketplace Générale):**
    *   `listingId` (PK, FK vers Listing)
    *   `productCategory` (ex: `ELECTRONICS`, `FASHION`, `HOME_GOODS`)
    *   `condition` (enum: `NEW`, `USED_LIKE_NEW`, `USED_GOOD`, `USED_FAIR`)
    *   `brand` (optionnel)
    *   `stockQuantity` (si applicable)
    *   `shippingOptions` (array de strings ou table liée)

*   **Transaction/Order:**
    *   `id` (PK)
    *   `listingId` (FK)
    *   `buyerId` (FK vers User)
    *   `sellerId` (FK vers User)
    *   `amount`, `currency`
    *   `paymentGateway` (enum: `PAYPAL`, `PAYDUNYA`, `STRIPE`)
    *   `paymentGatewayTransactionId`
    *   `status` (enum: `PENDING`, `PAID`, `FAILED`, `REFUNDED`, `COMPLETED`)
    *   `escrowStatus` (si applicable)
    *   `createdAt`, `updatedAt`

*   **Message:**
    *   `id` (PK)
    *   `conversationId` (FK vers Conversation)
    *   `senderId` (FK vers User)
    *   `receiverId` (FK vers User)
    *   `content` (texte)
    *   `attachmentUrl` (optionnel)
    *   `isRead` (booléen)
    *   `createdAt`

*   **Conversation:**
    *   `id` (PK)
    *   `participant1Id` (FK vers User)
    *   `participant2Id` (FK vers User)
    *   `lastMessageId` (FK vers Message, optionnel)
    *   `listingId` (FK vers Listing, optionnel, pour lier la conversation à une annonce)
    *   `createdAt`, `updatedAt`

*   **Review/Rating:**
    *   `id` (PK)
    *   `listingId` (FK, optionnel, si c'est sur une annonce)
    *   `reviewedUserId` (FK vers User, si c'est sur un utilisateur/vendeur)
    *   `reviewerId` (FK vers User)
    *   `rating` (1-5 étoiles)
    *   `comment` (texte)
    *   `createdAt`

*   **Notification:**
    *   `id` (PK)
    *   `userId` (FK vers User, destinataire)
    *   `type` (enum: `NEW_MESSAGE`, `NEW_OFFER`, `LISTING_APPROVED`, `PAYMENT_RECEIVED`, etc.)
    *   `content` (texte)
    *   `link` (URL vers l'élément concerné)
    *   `isRead` (booléen)
    *   `createdAt`

### Endpoints API Requis (Exemples)

Ces endpoints sont des exemples de haut niveau. Chaque endpoint aura besoin de méthodes HTTP appropriées (GET, POST, PUT, DELETE), de validation des entrées, d'authentification/autorisation, de pagination, de tri, et de filtrage.

#### Authentification et Utilisateurs

*   `POST /auth/register`
*   `POST /auth/login`
*   `POST /auth/logout`
*   `POST /auth/refresh-token`
*   `POST /auth/forgot-password`
*   `POST /auth/reset-password`
*   `GET /users/me` (Profil de l'utilisateur connecté)
*   `PUT /users/me` (Mettre à jour le profil)
*   `POST /users/me/upload-avatar`
*   `GET /users/{userId}` (Profil public d'un utilisateur)
*   `POST /users/kyc` (Soumettre les documents KYC)

#### Annonces (Générique)

*   `POST /listings` (Créer une nouvelle annonce - le type déterminera les champs spécifiques)
*   `GET /listings` (Lister toutes les annonces, avec filtres et pagination)
*   `GET /listings/{listingId}` (Détails d'une annonce)
*   `PUT /listings/{listingId}` (Mettre à jour une annonce)
*   `DELETE /listings/{listingId}` (Supprimer une annonce)
*   `POST /listings/{listingId}/boost` (Appliquer un package de boost)
*   `POST /listings/{listingId}/report` (Signaler une annonce)
*   `GET /listings/user/{userId}` (Lister les annonces d'un utilisateur spécifique)
*   `GET /listings/featured` (Annonces à la une)
*   `GET /listings/categories` (Lister les catégories/sous-catégories disponibles)

#### Immobilier

*   (Utiliser les endpoints `/listings` avec des filtres spécifiques ou des sous-routes comme `/listings/real-estate`)
*   `POST /listings/real-estate/{listingId}/360-tour` (Ajouter/mettre à jour une visite virtuelle)

#### Automobile

*   (Utiliser les endpoints `/listings` avec des filtres spécifiques ou `/listings/automobiles`)
*   `GET /automobiles/vin-lookup/{vinNumber}` (Si une API externe est utilisée)

#### Services Professionnels

*   (Utiliser les endpoints `/listings` avec des filtres spécifiques ou `/listings/services`)
*   `POST /services/{serviceId}/book` (Prise de rendez-vous)
*   `POST /services/{serviceId}/quote-request` (Demande de devis)

#### Marketplace Générale (Produits)

*   (Utiliser les endpoints `/listings` avec des filtres spécifiques ou `/listings/products`)
*   `POST /cart` (Ajouter au panier, gérer le panier) - Nécessitera une gestion de session/utilisateur
*   `POST /orders` (Passer une commande)

#### Paiements (PayPal & PayDunya)

*   **Important:** L'intégration des paiements doit être **sécurisée et principalement gérée côté serveur** pour protéger les informations sensibles. Le frontend initiera la demande, mais le backend interagira avec les API de PayPal et PayDunya.
*   `POST /payments/initiate`
    *   Payload: `listingId`, `amount`, `currency`, `paymentGateway` (PAYPAL/PAYDUNYA)
    *   Réponse: URL de redirection vers PayPal/PayDunya, ou informations nécessaires pour le SDK frontend.
*   `POST /payments/paypal/webhook` (Callback de PayPal après paiement)
*   `POST /payments/paydunya/webhook` (Callback de PayDunya après paiement)
*   `GET /payments/status/{transactionId}`
*   `POST /payments/refunds`
*   **Documentation API PayPal:** [https://developer.paypal.com/docs/api/overview/](https://developer.paypal.com/docs/api/overview/)
*   **Documentation API PayDunya:** [https://paydunya.com/developers](https://paydunya.com/developers) (vérifiez le lien exact, car il peut changer)
    *   Pour PayDunya, vous aurez besoin d'utiliser leur API de checkout ou de paiement direct. Ils fournissent généralement des SDK.

#### Messagerie Interne

*   `GET /conversations` (Lister les conversations de l'utilisateur)
*   `GET /conversations/{conversationId}/messages` (Récupérer les messages d'une conversation)
*   `POST /conversations/{conversationId}/messages` (Envoyer un message)
*   `POST /conversations` (Démarrer une nouvelle conversation, souvent liée à une annonce)
*   Utilisation de WebSockets (ex: Socket.IO) pour la messagerie en temps réel est fortement recommandée.

#### Notifications

*   `GET /notifications` (Lister les notifications de l'utilisateur)
*   `POST /notifications/{notificationId}/read` (Marquer comme lue)
*   Utilisation de WebSockets pour les notifications en temps réel.

#### Administration

*   `GET /admin/listings` (Toutes les annonces, avec filtres pour statut, etc.)
*   `PUT /admin/listings/{listingId}/approve`
*   `PUT /admin/listings/{listingId}/reject`
*   `GET /admin/users` (Lister tous les utilisateurs)
*   `PUT /admin/users/{userId}/status` (Activer/désactiver un utilisateur)
*   `GET /admin/users/kyc` (Lister les demandes KYC)
*   `PUT /admin/users/kyc/{kycId}/approve`
*   `PUT /admin/users/kyc/{kycId}/reject`
*   `GET /admin/reports/fraud` (Lister les signalements de fraude)
*   `GET /admin/analytics/dashboard` (Données pour le tableau de bord admin)

#### Recherche et Filtres

*   Les endpoints de listing (`GET /listings`, etc.) devront accepter des paramètres de requête pour :
    *   `q` (terme de recherche texte intégral)
    *   `category`, `subCategory`
    *   `minPrice`, `maxPrice`
    *   `location` (ville, pays, rayon autour de coordonnées)
    *   Attributs spécifiques (ex: `bedrooms` pour l'immobilier, `make` pour l'automobile)
    *   `sortBy` (prix, date, popularité)
    *   `sortOrder` (`asc`, `desc`)
    *   `page`, `limit` (pour la pagination)
*   Un moteur de recherche dédié comme Elasticsearch ou Algolia peut être envisagé pour des performances optimales sur de grands volumes de données.

#### Localisation et Multilinguisme

*   Le backend devrait pouvoir stocker et servir du contenu traduit si nécessaire (ex: catégories, descriptions de champs).
*   Les prix devraient être gérés avec leur devise. Des API de conversion de devises peuvent être utiles.
*   Les formats de date/heure peuvent être gérés côté frontend, mais le backend devrait stocker les dates en UTC.

#### Upload de Fichiers (Images, Documents)

*   `POST /upload/image`
*   `POST /upload/document` (pour KYC par exemple)
*   Utilisez un service de stockage cloud (Google Cloud Storage, AWS S3, Cloudinary) pour héberger les fichiers. Le backend peut générer des URLs signées pour l'upload direct depuis le client ou gérer le proxy des uploads.
*   Optimisation des images (compression, redimensionnement) côté backend ou via le service de stockage.

### Considérations de Sécurité Backend

*   **Authentification:** JWT (JSON Web Tokens) ou tokens de session sécurisés.
*   **Autorisation:** Basée sur les rôles (RBAC) pour contrôler l'accès aux endpoints et aux actions.
*   **Validation des Entrées:** Validez toutes les données provenant du client (payloads, paramètres de requête).
*   **Protection contre les failles courantes:** XSS, CSRF, SQL Injection (utilisez des ORM ou des requêtes paramétrées), etc.
*   **HTTPS:** Utilisez SSL/TLS pour toutes les communications.
*   **Gestion des secrets:** Stockez les clés API, mots de passe de base de données, etc., de manière sécurisée (variables d'environnement, gestionnaires de secrets).
*   **Rate Limiting:** Pour prévenir les abus.
*   **Logs détaillés:** Pour le débogage et l'audit de sécurité.

### Scalabilité et Performance Backend

*   **Mise en Cache:** Utilisez Redis ou Memcached pour mettre en cache les données fréquemment consultées.
*   **Optimisation des Requêtes Base de Données:** Indexation, requêtes efficaces.
*   **Asynchronisme:** Utilisez des tâches asynchrones pour les opérations longues (ex: envoi d'e-mails, traitement d'images).
*   **Load Balancing:** Si vous utilisez plusieurs instances de serveur.
*   **Surveillance et Alertes:** Mettez en place des outils pour surveiller les performances et les erreurs du backend.

## 7. Contribution

Les contributions sont les bienvenues ! Veuillez suivre les directives de contribution du projet (si définies). Pour les changements majeurs, veuillez d'abord ouvrir une issue pour discuter de ce que vous souhaitez modifier.

## 8. Licence

Ce projet est actuellement sous une licence propriétaire ou non spécifiée. Veuillez consulter le propriétaire du dépôt pour plus d'informations.

---

Ce `README.md` fournit une base solide. Il devra être mis à jour au fur et à mesure de l'évolution du projet, notamment avec des diagrammes d'architecture plus détaillés, une documentation API complète (Swagger/OpenAPI), et des procédures de déploiement spécifiques.
