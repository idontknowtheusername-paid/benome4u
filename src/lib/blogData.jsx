import { generateId } from '@/lib/utils';

export const blogPosts = [
  {
    id: "1",
    title: "Comment j'ai créé une application React performante",
    slug: "comment-jai-cree-une-application-react-performante",
    excerpt: "Découvrez les techniques que j'ai utilisées pour optimiser les performances de mon application React.",
    content: `
# Comment j'ai créé une application React performante

React est une bibliothèque JavaScript populaire pour créer des interfaces utilisateur interactives. Cependant, à mesure que les applications grandissent, les performances peuvent devenir un problème. Dans cet article, je vais partager les techniques que j'ai utilisées pour optimiser les performances de mon application React.

## 1. Utilisation de React.memo et useMemo

L'un des premiers problèmes que j'ai rencontrés était des rendus inutiles de composants. Pour résoudre ce problème, j'ai utilisé React.memo pour mémoriser les composants et useMemo pour mémoriser les valeurs calculées.

\`\`\`jsx
const ExpensiveComponent = React.memo(({ data }) => {
  // Rendu du composant
});

function App() {
  const expensiveCalculation = useMemo(() => {
    return performExpensiveCalculation(data);
  }, [data]);
  
  return <div>{expensiveCalculation}</div>;
}
\`\`\`

## 2. Optimisation des listes avec useCallback

Pour les listes, j'ai utilisé useCallback pour éviter de recréer des fonctions à chaque rendu.

\`\`\`jsx
function TodoList({ todos }) {
  const handleDelete = useCallback((id) => {
    // Logique de suppression
  }, []);
  
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          onDelete={handleDelete} 
        />
      ))}
    </ul>
  );
}
\`\`\`

## 3. Lazy Loading des composants

J'ai utilisé le lazy loading pour charger les composants uniquement lorsqu'ils sont nécessaires.

\`\`\`jsx
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </React.Suspense>
  );
}
\`\`\`

## 4. Utilisation de la virtualisation pour les grandes listes

Pour les listes contenant de nombreux éléments, j'ai utilisé la virtualisation pour ne rendre que les éléments visibles à l'écran.

## Conclusion

L'optimisation des performances est un aspect crucial du développement d'applications React. En utilisant ces techniques, j'ai pu améliorer considérablement les performances de mon application.
    `,
    coverImage: "react-performance",
    author: {
      name: "John Doe",
      avatar: "john-doe-avatar"
    },
    category: "React",
    tags: ["React", "Performance", "JavaScript", "Optimisation"],
    publishedAt: "2023-09-15T10:00:00Z",
    readingTime: "8 min"
  },
  {
    id: "2",
    title: "Les meilleures pratiques pour l'architecture de vos projets React",
    slug: "meilleures-pratiques-architecture-projets-react",
    excerpt: "Une architecture bien pensée est essentielle pour maintenir des projets React à long terme. Voici mes conseils.",
    content: `
# Les meilleures pratiques pour l'architecture de vos projets React

Une bonne architecture est la clé pour maintenir des projets React à long terme. Dans cet article, je partage mes meilleures pratiques pour structurer vos projets React.

## 1. Organisation des dossiers

J'ai trouvé qu'une structure de dossiers claire aide énormément à naviguer dans le code. Voici comment j'organise généralement mes projets:

\`\`\`
src/
  ├── components/
  │   ├── common/
  │   ├── layout/
  │   └── features/
  ├── hooks/
  ├── context/
  ├── utils/
  ├── services/
  ├── pages/
  └── assets/
\`\`\`

## 2. Séparation des préoccupations

Il est important de séparer la logique métier de la présentation. J'utilise des hooks personnalisés pour encapsuler la logique et des composants pour la présentation.

## 3. Utilisation des patterns React modernes

J'ai adopté des patterns comme le Compound Component et le Render Props pour créer des composants flexibles et réutilisables.

## 4. Tests unitaires et d'intégration

Les tests sont essentiels pour maintenir la qualité du code. J'utilise Jest et React Testing Library pour tester mes composants.

## Conclusion

Une bonne architecture est un investissement qui paie sur le long terme. En suivant ces pratiques, vous pourrez maintenir et faire évoluer vos projets React plus facilement.
    `,
    coverImage: "react-architecture",
    author: {
      name: "John Doe",
      avatar: "john-doe-avatar"
    },
    category: "Architecture",
    tags: ["React", "Architecture", "Bonnes pratiques", "Structure de projet"],
    publishedAt: "2023-08-22T14:30:00Z",
    readingTime: "6 min"
  },
  {
    id: "3",
    title: "Comment j'ai intégré TailwindCSS dans mon workflow",
    slug: "comment-jai-integre-tailwindcss-dans-mon-workflow",
    excerpt: "TailwindCSS a révolutionné ma façon de styliser mes applications. Voici comment je l'ai intégré dans mon workflow.",
    content: `
# Comment j'ai intégré TailwindCSS dans mon workflow

TailwindCSS est un framework CSS utilitaire qui a changé ma façon de styliser mes applications. Dans cet article, je vais vous montrer comment je l'ai intégré dans mon workflow et les avantages que j'en ai tirés.

## 1. Installation et configuration

L'installation de TailwindCSS est simple avec npm ou yarn:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

## 2. Personnalisation du thème

J'ai personnalisé le thème pour correspondre à l'identité visuelle de mon projet:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',
        secondary: '#ffed4a',
        danger: '#e3342f',
      },
    },
  },
  // ...
}
\`\`\`

## 3. Création de composants réutilisables

J'ai créé des composants réutilisables avec TailwindCSS:

\`\`\`jsx
function Button({ children, variant = 'primary' }) {
  const baseClasses = 'px-4 py-2 rounded font-bold';
  const variantClasses = {
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-gray-800',
    danger: 'bg-danger text-white',
  };
  
  return (
    <button className={\`\${baseClasses} \${variantClasses[variant]}\`}>
      {children}
    </button>
  );
}
\`\`\`

## 4. Optimisation pour la production

Pour la production, j'ai utilisé PurgeCSS pour éliminer les classes non utilisées:

\`\`\`js
// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // ...
}
\`\`\`

## Conclusion

TailwindCSS a considérablement amélioré ma productivité en me permettant de styliser rapidement mes applications sans quitter mon HTML/JSX. Si vous n'avez pas encore essayé, je vous encourage vivement à le faire!
    `,
    coverImage: "tailwindcss-workflow",
    author: {
      name: "John Doe",
      avatar: "john-doe-avatar"
    },
    category: "CSS",
    tags: ["TailwindCSS", "CSS", "Workflow", "Design"],
    publishedAt: "2023-07-10T09:15:00Z",
    readingTime: "5 min"
  },
  {
    id: "4",
    title: "Créer une API REST avec Node.js et Express",
    slug: "creer-une-api-rest-avec-nodejs-et-express",
    excerpt: "Un guide étape par étape pour créer une API REST robuste avec Node.js et Express.",
    content: `
# Créer une API REST avec Node.js et Express

Dans cet article, je vais vous montrer comment créer une API REST robuste avec Node.js et Express. Nous allons couvrir la configuration du projet, la création des routes, la connexion à une base de données et la gestion des erreurs.

## 1. Configuration du projet

Commençons par initialiser notre projet:

\`\`\`bash
mkdir api-rest-nodejs
cd api-rest-nodejs
npm init -y
npm install express mongoose dotenv cors helmet
\`\`\`

## 2. Structure du projet

J'ai organisé mon projet comme suit:

\`\`\`
api-rest-nodejs/
  ├── src/
  │   ├── controllers/
  │   ├── models/
  │   ├── routes/
  │   ├── middleware/
  │   ├── utils/
  │   └── app.js
  ├── .env
  ├── package.json
  └── server.js
\`\`\`

## 3. Création du serveur Express

Voici comment j'ai configuré mon serveur Express:

\`\`\`js
// src/app.js
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(helmet());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/posts', require('./routes/posts'));

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

module.exports = app;
\`\`\`

## 4. Connexion à MongoDB

J'ai utilisé Mongoose pour me connecter à MongoDB:

\`\`\`js
// server.js
const app = require('./src/app');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log(\`Server running on port \${PORT}\`);
    });
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
\`\`\`

## 5. Création des modèles

J'ai défini mes modèles avec Mongoose:

\`\`\`js
// src/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);
\`\`\`

## Conclusion

Créer une API REST avec Node.js et Express est relativement simple. En suivant ces étapes, vous pouvez créer une API robuste et évolutive pour vos applications.
    `,
    coverImage: "nodejs-express-api",
    author: {
      name: "John Doe",
      avatar: "john-doe-avatar"
    },
    category: "Backend",
    tags: ["Node.js", "Express", "API", "REST", "Backend"],
    publishedAt: "2023-06-05T16:45:00Z",
    readingTime: "7 min"
  },
  {
    id: "5",
    title: "Introduction à TypeScript pour les développeurs JavaScript",
    slug: "introduction-a-typescript-pour-les-developpeurs-javascript",
    excerpt: "Découvrez comment TypeScript peut améliorer votre code JavaScript et vous aider à éviter les erreurs courantes.",
    content: `
# Introduction à TypeScript pour les développeurs JavaScript

TypeScript est un sur-ensemble de JavaScript qui ajoute des types statiques et d'autres fonctionnalités pour améliorer la qualité du code. Dans cet article, je vais vous présenter les bases de TypeScript et comment il peut vous aider à écrire du code plus robuste.

## 1. Pourquoi utiliser TypeScript?

TypeScript offre plusieurs avantages par rapport à JavaScript:

- Détection des erreurs à la compilation plutôt qu'à l'exécution
- Meilleure autocomplétion et documentation dans les éditeurs de code
- Refactoring plus sûr
- Types explicites qui servent de documentation

## 2. Installation et configuration

Pour commencer avec TypeScript, installez-le via npm:

\`\`\`bash
npm install -g typescript
\`\`\`

Créez un fichier de configuration TypeScript:

\`\`\`bash
tsc --init
\`\`\`

## 3. Types de base

TypeScript prend en charge plusieurs types de base:

\`\`\`typescript
// Types primitifs
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Tableaux
let list: number[] = [1, 2, 3];
let names: Array<string> = ["John", "Jane", "Bob"];

// Tuples
let person: [string, number] = ["John", 25];

// Enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void
function warnUser(): void {
  console.log("This is a warning message");
}

// Null et Undefined
let u: undefined = undefined;
let n: null = null;
\`\`\`

## 4. Interfaces

Les interfaces sont un moyen puissant de définir des contrats dans votre code:

\`\`\`typescript
interface User {
  id: number;
  name: string;
  email: string;
  age?: number; // Propriété optionnelle
  readonly createdAt: Date; // Propriété en lecture seule
}

function createUser(user: User): User {
  return user;
}

const newUser = createUser({
  id: 1,
  name: "John",
  email: "john@example.com",
  createdAt: new Date()
});
\`\`\`

## 5. Classes

TypeScript prend en charge les classes ES6 avec des fonctionnalités supplémentaires:

\`\`\`typescript
class Person {
  private name: string;
  protected age: number;
  
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  greet(): string {
    return \`Hello, my name is \${this.name} and I am \${this.age} years old.\`;
  }
}

class Employee extends Person {
  private department: string;
  
  constructor(name: string, age: number, department: string) {
    super(name, age);
    this.department = department;
  }
  
  getDetails(): string {
    return \`\${this.greet()} I work in the \${this.department} department.\`;
  }
}
\`\`\`

## Conclusion

TypeScript est un outil puissant qui peut améliorer considérablement la qualité de votre code JavaScript. En adoptant TypeScript, vous pouvez éviter de nombreuses erreurs courantes et rendre votre code plus maintenable.
    `,
    coverImage: "typescript-intro",
    author: {
      name: "John Doe",
      avatar: "john-doe-avatar"
    },
    category: "TypeScript",
    tags: ["TypeScript", "JavaScript", "Programmation", "Développement Web"],
    publishedAt: "2023-05-20T11:20:00Z",
    readingTime: "9 min"
  }
];

export const addBlogPost = (post) => {
  const newPost = {
    ...post,
    id: generateId(),
    author: { name: "John Doe", avatar: "john-doe-avatar" },
    publishedAt: new Date().toISOString(),
    readingTime: `${Math.ceil(post.content.length / 1000)} min`
  };
  blogPosts.unshift(newPost); // Add to the beginning for newest first
  return newPost;
};

export const updateBlogPost = (updatedPost) => {
  const index = blogPosts.findIndex(p => p.id === updatedPost.id);
  if (index !== -1) {
    blogPosts[index] = { 
      ...blogPosts[index], 
      ...updatedPost,
      readingTime: `${Math.ceil(updatedPost.content.length / 1000)} min`
    };
    return blogPosts[index];
  }
  return null;
};

export const deleteBlogPost = (postId) => {
  const index = blogPosts.findIndex(p => p.id === postId);
  if (index !== -1) {
    blogPosts.splice(index, 1);
    return true;
  }
  return false;
};