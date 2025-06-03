import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, FileText } from 'lucide-react';
import { personalData } from '@/lib/personalData';

const PrivacyPolicyPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <ShieldCheck className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Politique de <span className="gradient-text">Confidentialité</span>
        </h1>
        <p className="text-lg text-muted-foreground">Dernière mise à jour : 02 Juin 2025</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto prose prose-invert prose-lg dark:prose-invert"
      >
        <p>
          Bienvenue sur {personalData.siteName}. Nous nous engageons à protéger la confidentialité de vos informations personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons, divulguons et protégeons vos informations lorsque vous visitez notre site web et utilisez nos services.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />1. Informations que nous collectons</h2>
        <p>Nous pouvons collecter des informations personnelles vous concernant de différentes manières, notamment :</p>
        <ul>
          <li><strong>Informations fournies directement par vous :</strong> Lorsque vous créez un compte, publiez une annonce, effectuez une transaction, communiquez avec nous ou d'autres utilisateurs (nom, adresse e-mail, numéro de téléphone, informations de paiement, etc.).</li>
          <li><strong>Informations collectées automatiquement :</strong> Lorsque vous utilisez notre site, nous pouvons collecter des informations sur votre appareil, votre activité de navigation, votre adresse IP, votre localisation (si autorisée), les cookies et autres technologies de suivi.</li>
          <li><strong>Informations provenant de tiers :</strong> Nous pouvons recevoir des informations vous concernant de la part de services tiers, tels que les fournisseurs de services de paiement ou les plateformes de médias sociaux si vous choisissez de lier votre compte.</li>
        </ul>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />2. Utilisation de vos informations</h2>
        <p>Nous utilisons les informations que nous collectons pour :</p>
        <ul>
          <li>Fournir, exploiter et améliorer nos services.</li>
          <li>Traiter vos transactions et gérer votre compte.</li>
          <li>Personnaliser votre expérience sur notre plateforme.</li>
          <li>Communiquer avec vous, y compris pour le service client et les mises à jour.</li>
          <li>Assurer la sécurité de notre plateforme et prévenir la fraude.</li>
          <li>Analyser l'utilisation de notre site et améliorer nos offres.</li>
          <li>Respecter nos obligations légales.</li>
        </ul>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />3. Partage de vos informations</h2>
        <p>Nous pouvons partager vos informations personnelles dans les circonstances suivantes :</p>
        <ul>
          <li><strong>Avec d'autres utilisateurs :</strong> Pour faciliter les transactions et les communications (par exemple, partager votre nom d'utilisateur ou les informations de contact nécessaires pour une transaction).</li>
          <li><strong>Avec des fournisseurs de services tiers :</strong> Qui nous aident à exploiter notre plateforme (hébergement, traitement des paiements, analyse de données, marketing, etc.). Ces fournisseurs sont contractuellement tenus de protéger vos informations.</li>
          <li><strong>Pour des raisons légales :</strong> Si la loi l'exige, ou pour répondre à une procédure légale valide, protéger nos droits, notre propriété ou notre sécurité, ou ceux de nos utilisateurs ou du public.</li>
          <li><strong>En cas de transfert d'entreprise :</strong> En cas de fusion, acquisition, réorganisation ou vente d'actifs, vos informations peuvent être transférées.</li>
        </ul>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />4. Vos droits et choix</h2>
        <p>Selon votre juridiction, vous pouvez avoir certains droits concernant vos informations personnelles, tels que :</p>
        <ul>
          <li>Le droit d'accéder à vos informations.</li>
          <li>Le droit de corriger ou de mettre à jour vos informations.</li>
          <li>Le droit de supprimer vos informations.</li>
          <li>Le droit de vous opposer ou de restreindre certains traitements.</li>
          <li>Le droit à la portabilité des données.</li>
        </ul>
        <p>Vous pouvez généralement gérer les informations de votre compte et vos préférences de communication via les paramètres de votre compte. Pour exercer d'autres droits, veuillez nous contacter.</p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />5. Sécurité des données</h2>
        <p>
          Nous mettons en œuvre des mesures de sécurité techniques et organisationnelles raisonnables pour protéger vos informations personnelles contre l'accès non autorisé, la divulgation, l'altération ou la destruction. Cependant, aucune méthode de transmission sur Internet ou de stockage électronique n'est totalement sécurisée.
        </p>
        
        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />6. Conservation des données</h2>
        <p>
          Nous conservons vos informations personnelles aussi longtemps que nécessaire pour atteindre les objectifs décrits dans cette politique de confidentialité, sauf si une période de conservation plus longue est requise ou autorisée par la loi.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />7. Transferts internationaux</h2>
        <p>
          Vos informations peuvent être transférées et traitées dans des pays autres que votre pays de résidence, où les lois sur la protection des données peuvent différer. Nous prendrons des mesures appropriées pour garantir que vos informations personnelles restent protégées conformément à cette politique.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />8. Modifications de cette politique</h2>
        <p>
          Nous pouvons mettre à jour cette politique de confidentialité de temps à autre. Nous vous informerons de tout changement important en publiant la nouvelle politique sur notre site et en mettant à jour la date de "Dernière mise à jour".
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />9. Nous contacter</h2>
        <p>
          Si vous avez des questions ou des préoccupations concernant cette politique de confidentialité ou nos pratiques en matière de données, veuillez nous contacter à <a href={`mailto:privacy@${personalData.siteName.toLowerCase()}.com`} className="text-primary hover:underline">privacy@{personalData.siteName.toLowerCase()}.com</a>.
        </p>
      </motion.div>
    </div>
  );
};

export default PrivacyPolicyPage;