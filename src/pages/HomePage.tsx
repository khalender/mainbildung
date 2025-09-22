import React from 'react';
import { useTranslation } from 'react-i18next';
import { Hero } from '@/components/Hero';
import { ProjectCard } from '@/components/ProjectCard';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Globe, Heart } from 'lucide-react';

interface HomePageProps {
  onNavigate?: (path: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const featuredProjects = [
    {
      title: "Digital Integration Program",
      description: "Supporting migrants and refugees with digital skills training and integration support.",
      tags: ["Integration", "Digital Skills", "EU Funded"],
      status: "active" as const,
    },
    {
      title: "Community Bridge Initiative",
      description: "Building bridges between different communities through education and cultural exchange.",
      tags: ["Community", "Education", "Cultural Exchange"],
      status: "active" as const,
    },
    {
      title: "Youth Empowerment Project",
      description: "Empowering disadvantaged youth through mentorship and skill development programs.",
      tags: ["Youth", "Mentorship", "Skills"],
      status: "planned" as const,
    },
  ];

  const handleHeroNavigation = (section: string) => {
    switch (section) {
      case 'projects':
        onNavigate?.('/projects');
        break;
      case 'partner':
        onNavigate?.('/partnership');
        break;
      case 'support':
        onNavigate?.('/membership');
        break;
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        onProjectsClick={() => handleHeroNavigation('projects')}
        onPartnerClick={() => handleHeroNavigation('partner')}
        onSupportClick={() => handleHeroNavigation('support')}
      />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Why Choose Mainbildung?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We bring years of experience, EU partnership expertise, and a deep commitment to social inclusion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Community Focus
              </h3>
              <p className="text-neutral-600">
                Deep understanding of migrant and refugee communities, with culturally sensitive approaches to integration.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                EU Partnership
              </h3>
              <p className="text-neutral-600">
                Proven track record as a reliable EU project partner with extensive experience in international collaboration.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-3">
                Social Impact
              </h3>
              <p className="text-neutral-600">
                Committed to creating lasting positive change through education, integration, and social inclusion initiatives.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Discover our current and upcoming initiatives that are making a difference in our community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                tags={project.tags}
                status={project.status}
              />
            ))}
          </div>

          <div className="text-center">
            <Button
              size="lg"
              onClick={() => onNavigate?.('/projects')}
              className="group"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-xl text-primary-100 mb-8 leading-relaxed">
            Join us in building bridges, creating opportunities, and shaping a more inclusive future for everyone.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              onClick={() => onNavigate?.('/partnership')}
              className="min-w-[200px]"
            >
              Become a Partner
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => onNavigate?.('/membership')}
              className="min-w-[200px] border-white text-white hover:bg-white hover:text-primary-600"
            >
              Support Our Mission
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};