import React from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { HomePage } from '@/pages/HomePage';
import { AboutPage } from '@/pages/AboutPage';
import { ExperiencePage } from '@/pages/ExperiencePage';
import { ProjectsPage } from '@/pages/ProjectsPage';
import { DatenschutzPage } from '@/pages/DatenschutzPage';
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
        <Route path="/legal/impressum" element={
  <div className="p-8 max-w-4xl mx-auto">
    <h1 className="text-3xl font-bold mb-8">Impressum</h1>
    
    <div className="space-y-6 text-left">
      <section>
        <p className="font-semibold">Main-Bildung Förderverein e.V.</p>
        <p>Hessenstraße 129</p>
        <p>97078 Würzburg</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Vertreten durch:</h2>
        <p>Recep Bedir (1. Vorsitzender)</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Kontakt:</h2>
        <p>
          Telefon: <a href="tel:+491712707271" className="text-blue-600 hover:underline">+49 171 2707271</a><br />
          E-Mail: <a href="mailto:info@main-bildung.de" className="text-blue-600 hover:underline">info@main-bildung.de</a><br />
          Website: <a href="https://www.main-bildung.de" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">www.main-bildung.de</a>
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Registereintrag:</h2>
        <p>
          Eintragung im Vereinsregister.<br />
          Registergericht: Amtsgericht Würzburg<br />
          Registernummer: VR 2011
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Steuernummer:</h2>
        <p>St-Nr. 257 109 80775</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:</h2>
        <p>
          Recep Bedir<br />
          Hessenstraße 129<br />
          97078 Würzburg
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">EU-Streitschlichtung:</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
          Unsere E-Mail-Adresse finden Sie oben im Impressum.
        </p>
      </section>
    </div>
  </div>
} />
        <Route path="/legal/datenschutz" element={<DatenschutzPage />} />
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