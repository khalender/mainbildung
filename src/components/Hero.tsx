import React from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import heroImage from '@/assets/picures/509303354_24168903416050679_2714965253572902863_n.jpg';

interface HeroProps {
  onProjectsClick?: () => void;
  onPartnerClick?: () => void;
  onSupportClick?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onProjectsClick,
  onPartnerClick,
  onSupportClick,
}) => {
  const { t } = useTranslation();
  const slogan = t('home.slogan');
  const sloganTranslation = t('home.sloganTranslation');
  const showTranslation = sloganTranslation && sloganTranslation !== slogan;

  return (
    <section className="relative bg-gradient-to-br from-primary-50 to-white py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          {/* Main Slogan */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-primary-800 mb-4 leading-tight">
              {slogan}
            </h1>
            {showTranslation && (
              <p className="text-xl md:text-2xl text-neutral-600 font-medium">
                {sloganTranslation}
              </p>
            )}
          </div>

          {/* Introduction */}
          <div className="mb-12 max-w-4xl mx-auto lg:mx-0">
            <p className="text-lg text-neutral-700 leading-relaxed">
              {t('home.intro')}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center lg:items-start">
            <Button
              size="lg"
              onClick={onProjectsClick}
              className="group min-w-[200px]"
            >
              {t('home.buttons.projects')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              variant="outline"
              size="lg"
              onClick={onPartnerClick}
              className="min-w-[200px]"
            >
              {t('home.buttons.partner')}
            </Button>

            <Button
              variant="secondary"
              size="lg"
              onClick={onSupportClick}
              className="min-w-[200px]"
            >
              {t('home.buttons.support')}
            </Button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="w-full lg:w-1/2">
          <div className="relative">
            <div className="absolute -inset-4 bg-secondary-200 rounded-[32px] opacity-40 blur-xl"></div>
            <img
              src={heroImage}
              alt={t('home.heroImageAlt')}
              className="relative w-full h-80 md:h-[26rem] lg:h-[28rem] object-cover rounded-[32px] shadow-xl"
              loading="lazy"
            />
            <div className="absolute -bottom-6 -left-6 hidden sm:block bg-white/90 backdrop-blur-sm px-6 py-4 rounded-2xl shadow-lg border border-white/60">
              <p className="text-sm font-medium text-neutral-700">{t('home.heroImageCaption')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-secondary-400 rounded-full opacity-20 animate-pulse" />
      <div className="absolute bottom-10 right-10 w-16 h-16 bg-primary-400 rounded-full opacity-20 animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/4 w-12 h-12 bg-secondary-300 rounded-full opacity-15 animate-pulse delay-500" />
    </section>
  );
};