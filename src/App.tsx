import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import '@/i18n';

const AppContent: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <Layout onNavigate={handleNavigation}>
      <Routes>
        <Route path="/" element={<HomePage onNavigate={handleNavigation} />} />
        <Route path="/about" element={<AboutPage onNavigate={handleNavigation} />} />
        <Route path="/experience" element={<ExperiencePage onNavigate={handleNavigation} />} />
        <Route path="/projects" element={<ProjectsPage onNavigate={handleNavigation} />} />
        <Route path="/partnership" element={<div className="p-8 text-center">Partnership Page - Coming Soon</div>} />
        <Route path="/membership" element={<div className="p-8 text-center">Membership Page - Coming Soon</div>} />
        <Route path="/news" element={<div className="p-8 text-center">News Page - Coming Soon</div>} />
        <Route path="/contact" element={<div className="p-8 text-center">Contact Page - Coming Soon</div>} />
        <Route path="/legal/impressum" element={<div className="p-8 text-center">Impressum - Coming Soon</div>} />
        <Route path="/legal/datenschutz" element={<div className="p-8 text-center">Datenschutz - Coming Soon</div>} />
        <Route path="/legal/cookies" element={<div className="p-8 text-center">Cookie Policy - Coming Soon</div>} />
      </Routes>
    </Layout>
  );
};

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;