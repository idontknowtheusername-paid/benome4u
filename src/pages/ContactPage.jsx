
import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Twitter, Linkedin } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const ContactPage = () => {
  const contactInfo = [
    { icon: <Mail className="h-6 w-6" />, label: "Email", value: "contact@example.com", href: "mailto:contact@example.com" },
    { icon: <Phone className="h-6 w-6" />, label: "Téléphone", value: "+33 6 12 34 56 78", href: "tel:+33612345678" },
    { icon: <MapPin className="h-6 w-6" />, label: "Adresse", value: "Paris, France", href: "https://maps.google.com/?q=Paris,France" },
  ];
  
  const socialLinks = [
    { icon: <Github className="h-6 w-6" />, label: "GitHub", href: "https://github.com" },
    { icon: <Twitter className="h-6 w-6" />, label: "Twitter", href: "https://twitter.com" },
    { icon: <Linkedin className="h-6 w-6" />, label: "LinkedIn", href: "https://linkedin.com" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">
          Contactez <span className="gradient-text">moi</span>
        </h1>
        <p className="text-muted-foreground">
          Vous avez un projet en tête ou une question ? N'hésitez pas à me contacter !
        </p>
      </motion.div>
      
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-2xl font-bold mb-6">Informations de contact</h2>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-4 rounded-lg glass-effect hover:border-primary transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="p-3 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-medium">{item.label}</h3>
                      <p className="text-muted-foreground">{item.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-6">Réseaux sociaux</h2>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-4 rounded-full bg-secondary hover:bg-primary/20 transition-colors"
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
            
            <div className="relative aspect-video rounded-lg overflow-hidden gradient-border">
              <img  
                className="w-full h-full object-cover"
                alt="Carte de localisation"
               src="https://images.unsplash.com/photo-1569336415962-a4bd9f69c07a" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
