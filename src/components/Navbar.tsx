import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe } from 'lucide-react';
import logo from '@/assets/pictures/logo.jpg';

interface NavbarProps {
  onNavigate?: (path: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const languages = [
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'en', name: 'English', flag: '🇬🇧' },
    { code: 'tr', name: 'Türkçe', flag: '🇹🇷' },
  ];

  const navigationItems = [
    { key: 'home', path: '/' },
    { key: 'about', path: '/about' },
    { key: 'experience', path: '/experience' },
    { key: 'projects', path: '/projects' },
    { key: 'partnership', path: '/partnership' },
    { key: 'membership', path: '/membership' },
    { key: 'news', path: '/news' },
    { key: 'contact', path: '/contact' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsLanguageMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    if (onNavigate) {
      onNavigate(path);
    }
    setIsMenuOpen(false);
  };

  // Use the base language (e.g., "en" from "en-US") so selection highlights correctly
  const baseLang = (i18n.language || '').split('-')[0];
  const currentLanguage = languages.find(lang => lang.code === baseLang) || languages[0];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => handleNavigation('/')}
              className="flex items-center space-x-2 text-xl font-heading font-bold text-primary-600 hover:text-primary-700 transition-colors"
            >
              <img
                src={logo}
                alt="Mainbildung Förderverein e.V. Logo"
                className="h-10 w-auto"
              />
              <span className="hidden sm:block">
                Mainbildung<br/>
                Förderverein e.V.
              </span>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.path)}
                  className="text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>

          {/* Language Switcher & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <div className="relative">
              <button
                onClick={() => setIsLanguageMenuOpen(!isLanguageMenuOpen)}
                className="flex items-center space-x-2 text-neutral-600 hover:text-primary-600 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                <Globe className="h-4 w-4" />
                <span>{currentLanguage.flag}</span>
                <span className="hidden sm:inline">{currentLanguage.name}</span>
              </button>

              {/* Language Dropdown */}
              {isLanguageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {languages.map((language) => (
                    <button
                      key={language.code}
                      onClick={() => handleLanguageChange(language.code)}
                      className={`flex items-center space-x-3 w-full px-4 py-2 text-sm hover:bg-neutral-100 transition-colors ${
                        baseLang === language.code ? 'bg-primary-50 text-primary-600' : 'text-neutral-700'
                      }`}
                    >
                      <span>{language.flag}</span>
                      <span>{language.name}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-neutral-600 hover:text-primary-600 p-2 rounded-md transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => handleNavigation(item.path)}
                  className="text-neutral-600 hover:text-primary-600 block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
                >
                  {t(`nav.${item.key}`)}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Overlay for language menu */}
      {isLanguageMenuOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsLanguageMenuOpen(false)}
        />
      )}
    </nav>
  );
};