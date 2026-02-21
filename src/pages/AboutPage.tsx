import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { History, Target, Users } from 'lucide-react';
import headerImage from '@/assets/pictures/504086470_24052933317647690_7044428351615090411_n.jpg';
import missionImage from '@/assets/pictures/505368845_24070297402577948_841066946591203818_n.jpg';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-800 mb-6">
              {t('about.title')}
            </h1>
            <p className="text-xl text-neutral-600 leading-relaxed">
              {t('about.subtitle')}
            </p>
          </div>
          <div className="relative order-first lg:order-last">
            <div className="absolute -inset-4 bg-primary-200/50 rounded-[32px] blur-2xl" />
            <img
              src={headerImage}
              alt={t('about.headerImageAlt')}
              className="relative rounded-[32px] shadow-2xl w-full h-72 object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                <History className="h-6 w-6 text-primary-600" />
              </div>
              <h2 className="text-3xl font-heading font-bold text-neutral-900">
                {t('about.history')}
              </h2>
            </div>
            <div className="space-y-4 text-neutral-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                {t('about.historyText')}
              </p>
              <p>
                {t('about.historyText2')}
              </p>
              <p>
                {t('about.historyText3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-2">
              <div className="relative mb-8">
                <div className="absolute -inset-4 bg-secondary-200/50 rounded-[32px] blur-2xl" />
                <img
                  src={missionImage}
                  alt={t('about.missionImageAlt')}
                  className="relative rounded-[32px] shadow-xl w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="bg-white rounded-xl shadow-lg p-6">
                <p className="text-neutral-700 leading-relaxed">
                  {t('about.missionExtraHighlight')}
                </p>
              </div>
            </div>
            <div className="order-2 lg:order-1">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Target className="h-8 w-8 text-primary-600 mr-3" />
                      <h3 className="text-xl font-heading font-semibold">{t('about.visionTitle')}</h3>
                    </div>
                    <p className="text-neutral-700">{t('about.visionText')}</p>
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-secondary-500 mr-3" />
                      <h3 className="text-xl font-heading font-semibold">{t('about.valuesTitle')}</h3>
                    </div>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• {t('about.values.inclusivity')}</li>
                      <li>• {t('about.values.excellence')}</li>
                      <li>• {t('about.values.empowerment')}</li>
                      <li>• {t('about.values.sustainability')}</li>
                      <li>• {t('about.values.transparency')}</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};