
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Send, ArrowRight, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { personalData } from '@/lib/personalData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    {
      title: "Explorer",
      links: [
        { name: "Immobilier", path: "/immobilier" },
        { name: "Automobile", path: "/automobile" },
        { name: "Services Pro", path: "/services" },
        { name: "Marketplace", path: "/marketplace" },
      ],
    },
    {
      title: "Entreprise",
      links: [
        { name: "À Propos", path: "/about" },
        { name: "Carrières", path: "/careers" },
        { name: "Presse", path: "/press" },
        { name: "Blog", path: "/blog" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Centre d'Aide", path: "/help" },
        { name: "Contactez-nous", path: "/contact" },
        { name: "FAQ", path: "/faq" },
        { name: "Politique de Confidentialité", path: "/privacy" },
        { name: "Termes & Conditions", path: "/terms" },
      ],
    },
  ];

  const socialLinks = [
    { name: "Facebook", icon: <Facebook className="h-5 w-5" />, path: personalData.socials.facebook || "#" },
    { name: "Twitter", icon: <Twitter className="h-5 w-5" />, path: personalData.socials.twitter || "#" },
    { name: "Instagram", icon: <Instagram className="h-5 w-5" />, path: personalData.socials.instagram || "#" },
    { name: "LinkedIn", icon: <Linkedin className="h-5 w-5" />, path: personalData.socials.linkedin || "#" },
    { name: "YouTube", icon: <Youtube className="h-5 w-5" />, path: personalData.socials.youtube || "#" },
  ];

  return (
    <footer className="bg-card text-card-foreground border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 mb-12">
          {/* Logo & Newsletter */}
          <div className="md:col-span-2 lg:col-span-1 xl:col-span-2 pr-4">
            <Link to="/" className="flex items-center space-x-2 mb-6">
               <Zap className="h-10 w-auto text-primary" />
              <span className="text-2xl font-bold gradient-text">{personalData.siteName}</span>
            </Link>
            <p className="text-muted-foreground text-sm mb-6">
              La plateforme N°1 en Afrique de l'Ouest pour l'immobilier, l'automobile, les services et bien plus.
            </p>
            <p className="font-semibold mb-2 text-sm">Restez informé de nos nouveautés :</p>
            <form className="flex items-center gap-2">
              <Input type="email" placeholder="Votre adresse e-mail" className="flex-grow" />
              <Button type="submit" size="icon" className="bg-primary hover:bg-primary/90">
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <p className="font-semibold mb-4">{section.title}</p>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center group"
                    >
                      {link.name}
                      <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-muted-foreground mb-4 md:mb-0">
            &copy; {currentYear} {personalData.siteName}. Tous droits réservés. Conçu avec ❤️ en Afrique.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social) => (
              <Link
                key={social.name}
                to={social.path}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;