import React from 'react';
import { useTranslation } from 'react-i18next';
import { TeamMember } from '@/components/TeamMember';
import { Card, CardContent } from '@/components/ui/card';
import { History, Target, Users } from 'lucide-react';

interface AboutPageProps {
  onNavigate?: (path: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = () => {
  const { t } = useTranslation();
  const teamMembers = [
    {
      name: "Dr. Mehmet Özkan",
      role: "Executive Director",
      bio: "Educational leader with 15+ years experience in integration programs and EU project management.",
      email: "m.oezkan@mainbildung.de",
    },
    {
      name: "Sarah Weber",
      role: "Project Coordinator",
      bio: "Specialist in community outreach and multicultural program development with focus on refugee integration.",
      email: "s.weber@mainbildung.de",
    },
    {
      name: "Ahmet Yılmaz",
      role: "Community Liaison",
      bio: "Bridge-builder between Turkish and German communities, expert in cultural mediation and language support.",
      email: "a.yilmaz@mainbildung.de",
    },
    {
      name: "Dr. Anna Schmidt",
      role: "Research & Development",
      bio: "Academic researcher specializing in integration studies and EU policy development for social inclusion.",
      email: "a.schmidt@mainbildung.de",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Header Section */}
      <section className="bg-gradient-to-br from-primary-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-primary-800 mb-6">
            {t('about.title')}
          </h1>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Building bridges through education, fostering integration, and creating opportunities for all.
          </p>
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
                  Founded in Würzburg, our organization began as a local educational initiative serving the Turkish-German community. Over the years, we have expanded our reach and expertise, becoming a trusted partner for European Union projects focused on integration, digital literacy, and social inclusion.
                </p>
                <p>
                  Our journey from a community-based educational institution to an internationally recognized EU project partner reflects our commitment to growth, learning, and adaptation to serve our communities better.
                </p>
              </div>
            </div>
            <div className="bg-neutral-100 rounded-lg p-8">
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2010 - Founded as educational institution</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2015 - First EU project partnership</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2018 - Expanded to integration programs</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-primary-600 rounded-full mr-4"></div>
                  <span className="font-semibold">2020 - Digital skills focus</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-secondary-400 rounded-full mr-4"></div>
                  <span className="font-semibold">2024 - Renewed mission & vision</span>
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
            <div className="order-2 lg:order-1">
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center">
                      <Target className="h-8 w-8 text-primary-600 mr-3" />
                      <h3 className="text-xl font-heading font-semibold">Our Vision</h3>
                    </div>
                    <p className="text-neutral-700">
                      A society where every individual, regardless of their background, has equal access to education, opportunities, and the tools needed to thrive in an interconnected world.
                    </p>
                    <div className="flex items-center">
                      <Users className="h-8 w-8 text-secondary-500 mr-3" />
                      <h3 className="text-xl font-heading font-semibold">Our Values</h3>
                    </div>
                    <ul className="space-y-2 text-neutral-700">
                      <li>• Inclusivity and cultural diversity</li>
                      <li>• Educational excellence and innovation</li>
                      <li>• Community empowerment and participation</li>
                      <li>• Sustainable social impact</li>
                      <li>• Transparency and accountability</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                  <Target className="h-6 w-6 text-primary-600" />
                </div>
                <h2 className="text-3xl font-heading font-bold text-neutral-900">
                  {t('about.mission')}
                </h2>
              </div>
              <div className="space-y-4 text-neutral-700 leading-relaxed">
                <p>
                  {t('about.missionText')}
                </p>
                <p>
                  We are committed to creating sustainable programs that address the real needs of our communities while fostering cross-cultural understanding and cooperation. Through our EU partnerships, we leverage international expertise and resources to maximize our impact.
                </p>
                <p>
                  Our approach combines traditional educational methods with innovative digital solutions, ensuring that our programs are both accessible and effective for diverse learning styles and backgrounds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              {t('about.team')}
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Meet the dedicated professionals who drive our mission forward with passion, expertise, and commitment to social change.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                email={member.email}
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
              <div className="text-primary-100">People Supported</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
              <div className="text-primary-100">EU Projects</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">8</div>
              <div className="text-primary-100">Partner Countries</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">14</div>
              <div className="text-primary-100">Years Experience</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};