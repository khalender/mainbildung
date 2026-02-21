import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Award, BookOpen, Heart, Globe } from 'lucide-react';
import experienceHeroImage from '@/assets/pictures/505528201_24070297425911279_220368229625263186_n.jpg';

interface ExperiencePageProps {
  onNavigate?: (path: string) => void;
}

export const ExperiencePage: React.FC<ExperiencePageProps> = () => {
  const { t } = useTranslation();

  const achievements = [
    {
      title: t('experience.achievements.digitalSkills.title'),
      description: t('experience.achievements.digitalSkills.description'),
      icon: BookOpen,
      category: t('experience.categories.education')
    },
    {
      title: t('experience.achievements.communityIntegration.title'),
      description: t('experience.achievements.communityIntegration.description'),
      icon: Users,
      category: t('experience.categories.integration')
    },
    {
      title: t('experience.achievements.youthPrograms.title'),
      description: t('experience.achievements.youthPrograms.description'),
      icon: Heart,
      category: t('experience.categories.youth')
    },
    {
      title: t('experience.achievements.languageSupport.title'),
      description: t('experience.achievements.languageSupport.description'),
      icon: Globe,
      category: t('experience.categories.language')
    }
  ];

  const events = [
    {
      title: t('experience.events.culturalFestival.title'),
      description: t('experience.events.culturalFestival.description')
    },
    {
      title: t('experience.events.educationWorkshop.title'),
      description: t('experience.events.educationWorkshop.description')
    },
    {
      title: t('experience.events.networkingEvent.title'),
      description: t('experience.events.networkingEvent.description')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
                {t('experience.hero.title')}
              </h1>
              <p className="text-xl text-neutral-600 mb-8 max-w-3xl">
                {t('experience.hero.subtitle')}
              </p>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary-200/50 rounded-[32px] blur-2xl" />
              <img
                src={experienceHeroImage}
                alt={t('experience.heroImageAlt')}
                className="relative w-full h-80 md:h-[26rem] object-cover rounded-[32px] shadow-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              {t('experience.achievements.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('experience.achievements.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary-100 p-3 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <Badge variant="outline">{achievement.category}</Badge>
                        </div>
                        <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                          {achievement.title}
                        </h3>
                        <p className="text-neutral-600">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              {t('experience.events.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('experience.events.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                    {event.title}
                  </h3>
                  <p className="text-neutral-600">
                    {event.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Award className="h-16 w-16 mx-auto mb-6 text-secondary-400" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {t('experience.impact.title')}
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            {t('experience.impact.description')}
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                {t('experience.impact.communities')}
              </div>
              <div className="text-primary-100">
                {t('experience.impact.communitiesLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                {t('experience.impact.families')}
              </div>
              <div className="text-primary-100">
                {t('experience.impact.familiesLabel')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary-400 mb-2">
                {t('experience.impact.success')}
              </div>
              <div className="text-primary-100">
                {t('experience.impact.successLabel')}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};