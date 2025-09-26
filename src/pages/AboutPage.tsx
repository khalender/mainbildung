import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '@/components/TeamMember';
import { Card, CardContent } from '@/components/ui/card';
import { History, Target, Users } from 'lucide-react';
import headerImage from '@/assets/picures/504086470_24052933317647690_7044428351615090411_n.jpg';
import missionImage from '@/assets/picures/505368845_24070297402577948_841066946591203818_n.jpg';
import memberMehmet from '@/assets/picures/505279492_24070297559244599_8124513859225503294_n.jpg';
import memberSarah from '@/assets/picures/508693556_24142174295390258_8252334276413819860_n.jpg';
import memberAhmet from '@/assets/picures/508763183_24144110428529978_4734436101554217121_n.jpg';
import memberAnna from '@/assets/picures/505197950_24063172533290435_2186439613263688435_n.jpg';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      key: 'mehmet',
      name: "Dr. Mehmet Özkan",
      email: "m.oezkan@mainbildung.de",
      image: memberMehmet,
    },
    {
      key: 'sarah',
      name: "Sarah Weber",
      email: "s.weber@mainbildung.de",
      image: memberSarah,
    },
    {
      key: 'ahmet',
      name: "Ahmet Yılmaz",
      email: "a.yilmaz@mainbildung.de",
      image: memberAhmet,
    },
    {
      key: 'anna',
      name: "Dr. Anna Schmidt",
      email: "a.schmidt@mainbildung.de",
      image: memberAnna,
    },
  ];

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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <History className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900">
                  {t('about.history')}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
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
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2010 - {t('about.timeline.founded')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2015 - {t('about.timeline.firstEU')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2018 - {t('about.timeline.expanded')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2020 - {t('about.timeline.digital')}</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-secondary-400 rounded-full mr-4"></div>
                  <span className="font-semibold">2024 - {t('about.timeline.renewed')}</span>
                </div>
              </div>
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              {t('about.teamTitle')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              {t('about.teamSubtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={t(`about.team.members.${member.key}.role`)}
                bio={t(`about.team.members.${member.key}.bio`)}
                email={member.email}
                image={member.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">500+</div>
              <div className="text-primary-100">{t('about.stats.peopleSupported')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">{t('about.stats.euProjects')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">8</div>
              <div className="text-primary-100">{t('about.stats.partnerCountries')}</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">14</div>
              <div className="text-primary-100">{t('about.stats.yearsExperience')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};