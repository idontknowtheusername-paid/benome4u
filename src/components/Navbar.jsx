
import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Home, Car, Briefcase, ShoppingBag, UserCircle, Settings, Sun, Moon, Search, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { personalData } from '@/lib/personalData';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const navItems = [
    { name: 'Immobilier', path: '/immobilier', icon: <Home className="mr-2 h-4 w-4" /> },
    { name: 'Automobile', path: '/automobile', icon: <Car className="mr-2 h-4 w-4" /> },
    { name: 'Services', path: '/services', icon: <Briefcase className="mr-2 h-4 w-4" /> },
    { name: 'Marketplace', path: '/marketplace', icon: <ShoppingBag className="mr-2 h-4 w-4" /> },
  ];

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "-100%" },
    open: { opacity: 1, x: "0%", transition: { duration: 0.3, ease: "easeInOut" } }
  };
  
  const navLinkClasses = "text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium flex items-center";
  const activeNavLinkClasses = "text-primary bg-primary/10";

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled || isOpen ? 'bg-background/95 shadow-lg backdrop-blur-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link to="/" className="flex items-center space-x-2">
              <Zap className="h-10 w-auto text-primary" />
              <span className="text-2xl font-bold gradient-text">{personalData.siteName}</span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Changer de thème">
              {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Rechercher">
               <Search className="h-5 w-5" />
            </Button>
            <Button asChild className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link to="/admin-dashboard">
                <UserCircle className="mr-2 h-4 w-4" /> Connexion / Inscription
              </Link>
            </Button>
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Ouvrir le menu">
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden fixed inset-0 top-20 bg-background/95 backdrop-blur-md z-40 p-4 space-y-3 border-t border-border"
          >
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) => `${navLinkClasses} text-base w-full justify-start ${isActive ? activeNavLinkClasses : ''}`}
              >
                {item.icon}
                {item.name}
              </NavLink>
            ))}
            <div className="border-t border-border pt-3 space-y-3">
                <NavLink to="/admin-dashboard" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} text-base w-full justify-start ${isActive ? activeNavLinkClasses : ''}`}>
                    <UserCircle className="mr-2 h-4 w-4" /> Connexion / Inscription
                </NavLink>
                 <NavLink to="/admin-dashboard" onClick={() => setIsOpen(false)} className={({isActive}) => `${navLinkClasses} text-base w-full justify-start ${isActive ? activeNavLinkClasses : ''}`}>
                    <Settings className="mr-2 h-4 w-4" /> Mon Compte
                </NavLink>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
