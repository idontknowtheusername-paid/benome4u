import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import { AnimatePresence } from 'framer-motion';

// Layouts
import MainLayout from '@/layouts/MainLayout';

// Pages
import HomePage from '@/pages/HomePage'; 
import RealEstatePage from '@/pages/marketplace/RealEstatePage';
import AutomobilePage from '@/pages/marketplace/AutomobilePage';
import ServicesPage from '@/pages/marketplace/ServicesPage';
import GeneralMarketplacePage from '@/pages/marketplace/GeneralMarketplacePage';
import AdminDashboardPage from '@/pages/admin/AdminDashboardPage'; 
import NotFoundPage from '@/pages/NotFoundPage';

// Static Pages
import AboutPage from '@/pages/AboutPage'; 
import ContactPage from '@/pages/ContactPage'; 
import CareersPage from '@/pages/static/CareersPage';
import PressPage from '@/pages/static/PressPage';
import HelpCenterPage from '@/pages/static/HelpCenterPage';
import FAQPage from '@/pages/static/FAQPage';
import PrivacyPolicyPage from '@/pages/static/PrivacyPolicyPage';
import TermsConditionsPage from '@/pages/static/TermsConditionsPage';


// Portfolio/Blog specific pages 
import BlogPage from '@/pages/BlogPage'; 
import ProjectsPage from '@/pages/ProjectsPage'; 
import BlogPostPage from '@/pages/BlogPostPage'; 
import ProjectDetailPage from '@/pages/ProjectDetailPage';
import AdminPortfolioPage from '@/pages/AdminPage';


function App() {
  return (
    <Router>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<HomePage />} />
            
            {/* Marketplace Sections */}
            <Route path="immobilier" element={<RealEstatePage />} />
            <Route path="automobile" element={<AutomobilePage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="marketplace" element={<GeneralMarketplacePage />} />
            
            {/* Admin Routes */}
            <Route path="admin-dashboard" element={<AdminDashboardPage />} />
            <Route path="admin-portfolio" element={<AdminPortfolioPage />} />

            {/* Static/Informational Pages */}
            <Route path="a-propos" element={<AboutPage />} /> 
            <Route path="contactez-nous" element={<ContactPage />} />
            <Route path="careers" element={<CareersPage />} />
            <Route path="press" element={<PressPage />} />
            <Route path="help" element={<HelpCenterPage />} />
            <Route path="faq" element={<FAQPage />} />
            <Route path="privacy" element={<PrivacyPolicyPage />} />
            <Route path="terms" element={<TermsConditionsPage />} />
            
            {/* Blog/Content Section */}
            <Route path="blog" element={<BlogPage />} />
            <Route path="blog/:id" element={<BlogPostPage />} />
            
            {/* Projects Section */}
            <Route path="showcase" element={<ProjectsPage />} /> 
            <Route path="showcase/:id" element={<ProjectDetailPage />} />
            
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </AnimatePresence>
      <Toaster />
    </Router>
  );
}

export default App;