import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Facebook, Twitter, LinkedinIcon } from 'lucide-react';

interface FooterProps {
  onNavigate?: (path: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const quickLinks = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'projects', path: '/projects' },
    { key: 'partnership', path: '/partnership' },
    { key: 'contact', path: '/contact' },
  ];

  const legalLinks = [
    { key: 'impressum', path: '/legal/impressum' },
    { key: 'datenschutz', path: '/legal/datenschutz' },
    { key: 'cookies', path: '/legal/cookies' },
  ];

  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-heading font-bold text-white mb-4">
              Mainbildung Förderverein e.V.
            </h3>
            <p className="text-neutral-300 mb-6 leading-relaxed">
              {t('footer.description')}
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <span className="text-neutral-300">
                  Würzburg, Germany
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <a
                  href="mailto:info@main-bildung.de"
                  className="text-neutral-300 hover:text-primary-400 transition-colors"
                >
                  info@main-bildung.de
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-left"
                  >
                    {t(`nav.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Social */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              {t('nav.legal')}
            </h4>
            <ul className="space-y-2 mb-6">
              {legalLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={() => handleNavigation(link.path)}
                    className="text-neutral-300 hover:text-primary-400 transition-colors text-left"
                  >
                    {t(`legal.${link.key}`)}
                  </button>
                </li>
              ))}
            </ul>

            {/* Social Media */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-3">
                {t('footer.followUs')}
              </h5>
              <div className="flex space-x-3">
                <a
                  href="#"
                  className="p-2 bg-neutral-800 rounded-full hover:bg-primary-600 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-neutral-800 rounded-full hover:bg-primary-600 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  className="p-2 bg-neutral-800 rounded-full hover:bg-primary-600 transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm">
            © {new Date().getFullYear()} Mainbildung Förderverein e.V. All rights reserved.
          </p>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-4 bg-primary-600 rounded-sm flex items-center justify-center">
                <div className="grid grid-cols-3 gap-0.5">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className="w-0.5 h-0.5 bg-secondary-400 rounded-full"></div>
                  ))}
                </div>
              </div>
              <span className="text-neutral-400 text-xs">{t('footer.euPartner')}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};