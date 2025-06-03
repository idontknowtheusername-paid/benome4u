import React from 'react';
import { motion } from 'framer-motion';
import { FileText, AlertTriangle } from 'lucide-react';
import { personalData } from '@/lib/personalData';

const TermsConditionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <FileText className="h-16 w-16 text-primary mx-auto mb-6" />
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Termes et <span className="gradient-text">Conditions</span> d'Utilisation
        </h1>
        <p className="text-lg text-muted-foreground">Dernière mise à jour : 02 Juin 2025</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-3xl mx-auto prose prose-invert prose-lg dark:prose-invert"
      >
        <p className="lead">
          Veuillez lire attentivement ces Termes et Conditions ("Termes") avant d'utiliser le site web {personalData.siteName} (le "Service") exploité par {personalData.siteName} ("nous", "notre", ou "nos"). Votre accès et votre utilisation du Service sont conditionnés par votre acceptation et votre respect de ces Termes. Ces Termes s'appliquent à tous les visiteurs, utilisateurs et autres personnes qui accèdent ou utilisent le Service.
        </p>

        <h2 className="flex items-center"><AlertTriangle className="mr-2 h-6 w-6 text-primary" />1. Acceptation des Termes</h2>
        <p>
          En accédant ou en utilisant le Service, vous acceptez d'être lié par ces Termes. Si vous n'êtes pas d'accord avec une partie des termes, vous ne pouvez pas accéder au Service.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />2. Comptes</h2>
        <p>
          Lorsque vous créez un compte chez nous, vous devez nous fournir des informations exactes, complètes et à jour à tout moment. Le non-respect de cette obligation constitue une violation des Termes, ce qui peut entraîner la résiliation immédiate de votre compte sur notre Service.
        </p>
        <p>
          Vous êtes responsable de la protection du mot de passe que vous utilisez pour accéder au Service et de toutes les activités ou actions effectuées sous votre mot de passe, que votre mot de passe soit avec notre Service ou un service tiers.
        </p>
        <p>
          Vous acceptez de ne pas divulguer votre mot de passe à un tiers. Vous devez nous informer immédiatement dès que vous prenez connaissance d'une violation de la sécurité ou d'une utilisation non autorisée de votre compte.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />3. Contenu Utilisateur</h2>
        <p>
          Notre Service vous permet de publier, lier, stocker, partager et autrement rendre disponible certaines informations, textes, graphiques, vidéos ou autres supports ("Contenu Utilisateur"). Vous êtes responsable du Contenu Utilisateur que vous publiez sur ou via le Service, y compris sa légalité, sa fiabilité et sa pertinence.
        </p>
        <p>
          En publiant du Contenu Utilisateur sur ou via le Service, vous déclarez et garantissez que : (i) le Contenu Utilisateur vous appartient (vous en êtes propriétaire) et/ou vous avez le droit de l'utiliser et le droit de nous accorder les droits et la licence prévus dans ces Termes, et (ii) la publication de votre Contenu Utilisateur sur ou via le Service ne viole pas les droits à la vie privée, les droits de publicité, les droits d'auteur, les droits contractuels ou tout autre droit de toute personne ou entité. Nous nous réservons le droit de résilier le compte de toute personne enfreignant un droit d'auteur.
        </p>
        <p>
          Vous conservez tous vos droits sur tout Contenu Utilisateur que vous soumettez, publiez ou affichez sur ou via le Service et vous êtes responsable de la protection de ces droits. Nous n'assumons aucune responsabilité et n'engageons aucune responsabilité pour le Contenu Utilisateur que vous ou un tiers publiez sur ou via le Service.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />4. Utilisation Acceptable</h2>
        <p>Vous acceptez de ne pas utiliser le Service pour :</p>
        <ul>
          <li>Publier du contenu illégal, nuisible, menaçant, abusif, harcelant, diffamatoire, vulgaire, obscène, haineux ou autrement répréhensible.</li>
          <li>Usurper l'identité d'une personne ou d'une entité, ou déclarer faussement ou déformer autrement votre affiliation avec une personne ou une entité.</li>
          <li>Télécharger, publier ou transmettre de quelque manière que ce soit tout contenu que vous n'avez pas le droit de transmettre en vertu d'une loi ou de relations contractuelles ou fiduciaires.</li>
          <li>Violer toute loi locale, étatique, nationale ou internationale applicable.</li>
        </ul>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />5. Propriété Intellectuelle</h2>
        <p>
          Le Service et son contenu original (à l'exclusion du Contenu Utilisateur), ses caractéristiques et fonctionnalités sont et resteront la propriété exclusive de {personalData.siteName} et de ses concédants de licence. Le Service est protégé par le droit d'auteur, les marques commerciales et d'autres lois de [Votre Pays] et des pays étrangers. Nos marques et habillages commerciaux ne peuvent être utilisés en relation avec un produit ou service sans le consentement écrit préalable de {personalData.siteName}.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />6. Liens Vers D'autres Sites Web</h2>
        <p>
          Notre Service peut contenir des liens vers des sites web ou des services tiers qui ne sont pas détenus ou contrôlés par {personalData.siteName}.
        </p>
        <p>
          {personalData.siteName} n'a aucun contrôle sur, et n'assume aucune responsabilité pour, le contenu, les politiques de confidentialité ou les pratiques de tout site web ou service tiers. Vous reconnaissez et acceptez en outre que {personalData.siteName} ne sera pas responsable, directement ou indirectement, de tout dommage ou perte causé ou présumé avoir été causé par ou en relation avec l'utilisation ou la confiance accordée à un tel contenu, biens ou services disponibles sur ou via de tels sites web ou services.
        </p>
        <p>Nous vous conseillons vivement de lire les termes et conditions et les politiques de confidentialité de tout site web ou service tiers que vous visitez.</p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />7. Résiliation</h2>
        <p>
          Nous pouvons résilier ou suspendre votre compte et interdire l'accès au Service immédiatement, sans préavis ni responsabilité, à notre seule discrétion, pour quelque raison que ce soit et sans limitation, y compris mais sans s'y limiter, une violation des Termes.
        </p>
        <p>
          Si vous souhaitez résilier votre compte, vous pouvez simplement cesser d'utiliser le Service.
        </p>
        <p>
          Toutes les dispositions des Termes qui, de par leur nature, devraient survivre à la résiliation survivront à la résiliation, y compris, sans limitation, les dispositions relatives à la propriété, les exclusions de garantie, l'indemnisation et les limitations de responsabilité.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />8. Limitation de Responsabilité</h2>
        <p>
          En aucun cas {personalData.siteName}, ni ses administrateurs, employés, partenaires, agents, fournisseurs ou affiliés, ne pourront être tenus responsables de tout dommage indirect, accessoire, spécial, consécutif ou punitif, y compris, sans limitation, la perte de profits, de données, d'utilisation, de clientèle ou d'autres pertes immatérielles, résultant de (i) votre accès ou votre utilisation ou votre incapacité à accéder ou à utiliser le Service ; (ii) toute conduite ou contenu d'un tiers sur le Service ; (iii) tout contenu obtenu à partir du Service ; et (iv) l'accès, l'utilisation ou l'altération non autorisés de vos transmissions ou de votre contenu, que ce soit sur la base d'une garantie, d'un contrat, d'un délit (y compris la négligence) ou de toute autre théorie juridique, que nous ayons été informés ou non de la possibilité de tels dommages, et même si un recours énoncé dans les présentes s'avère avoir échoué dans son objectif essentiel.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />9. Droit Applicable</h2>
        <p>
          Ces Termes seront régis et interprétés conformément aux lois de [Votre Pays/Juridiction Compétente], sans égard à ses dispositions relatives aux conflits de lois.
        </p>
        <p>
          Notre manquement à faire respecter un droit ou une disposition de ces Termes ne sera pas considéré comme une renonciation à ces droits. Si une disposition de ces Termes est jugée invalide ou inapplicable par un tribunal, les autres dispositions de ces Termes resteront en vigueur. Ces Termes constituent l'intégralité de l'accord entre nous concernant notre Service, et remplacent et annulent tous les accords antérieurs que nous pourrions avoir entre nous concernant le Service.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />10. Modifications</h2>
        <p>
          Nous nous réservons le droit, à notre seule discrétion, de modifier ou de remplacer ces Termes à tout moment. Si une révision est importante, nous nous efforcerons de fournir un préavis d'au moins 30 jours avant l'entrée en vigueur des nouveaux termes. Ce qui constitue un changement important sera déterminé à notre seule discrétion.
        </p>
        <p>
          En continuant à accéder ou à utiliser notre Service après l'entrée en vigueur de ces révisions, vous acceptez d'être lié par les termes révisés. Si vous n'acceptez pas les nouveaux termes, veuillez cesser d'utiliser le Service.
        </p>

        <h2 className="flex items-center"><FileText className="mr-2 h-6 w-6 text-primary" />11. Nous Contacter</h2>
        <p>
          Si vous avez des questions concernant ces Termes, veuillez nous contacter à <a href={`mailto:legal@${personalData.siteName.toLowerCase()}.com`} className="text-primary hover:underline">legal@{personalData.siteName.toLowerCase()}.com</a>.
        </p>
      </motion.div>
    </div>
  );
};

export default TermsConditionsPage;