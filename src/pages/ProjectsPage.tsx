import React from 'react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Users,
  BookOpen,
  Globe,
  Heart,
  Lightbulb,
  Target,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react';

interface ProjectsPageProps {
  onNavigate?: (path: string) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ onNavigate }) => {
  const { t } = useTranslation();

  const focusAreas = [
    {
      icon: Users,
      title: t('projects.focusAreas.integration.title'),
      description: t('projects.focusAreas.integration.description'),
      color: 'bg-primary-100 text-primary-600'
    },
    {
      icon: BookOpen,
      title: t('projects.focusAreas.education.title'),
      description: t('projects.focusAreas.education.description'),
      color: 'bg-secondary-100 text-secondary-600'
    },
    {
      icon: Globe,
      title: t('projects.focusAreas.digital.title'),
      description: t('projects.focusAreas.digital.description'),
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Heart,
      title: t('projects.focusAreas.inclusion.title'),
      description: t('projects.focusAreas.inclusion.description'),
      color: 'bg-red-100 text-red-600'
    }
  ];

  const currentProjects = [
    {
      title: t('projects.current.digitalBridge.title'),
      description: t('projects.current.digitalBridge.description'),
      status: t('projects.status.active'),
      duration: t('projects.current.digitalBridge.duration'),
      funding: 'Erasmus+',
      partners: 5,
      image: '/api/placeholder/400/250'
    },
    {
      title: t('projects.current.youthIntegration.title'),
      description: t('projects.current.youthIntegration.description'),
      status: t('projects.status.planning'),
      duration: t('projects.current.youthIntegration.duration'),
      funding: 'ESF+',
      partners: 3,
      image: '/api/placeholder/400/250'
    },
    {
      title: t('projects.current.communitySupport.title'),
      description: t('projects.current.communitySupport.description'),
      status: t('projects.status.active'),
      duration: t('projects.current.communitySupport.duration'),
      funding: 'AMIF',
      partners: 4,
      image: '/api/placeholder/400/250'
    }
  ];

  const targetGroups = [
    {
      title: t('projects.targetGroups.migrants.title'),
      description: t('projects.targetGroups.migrants.description'),
      icon: Globe
    },
    {
      title: t('projects.targetGroups.youth.title'),
      description: t('projects.targetGroups.youth.description'),
      icon: Users
    },
    {
      title: t('projects.targetGroups.families.title'),
      description: t('projects.targetGroups.families.description'),
      icon: Heart
    },
    {
      title: t('projects.targetGroups.professionals.title'),
      description: t('projects.targetGroups.professionals.description'),
      icon: BookOpen
    }
  ];

  const futurePlans = [
    {
      title: t('projects.future.aiEducation.title'),
      description: t('projects.future.aiEducation.description'),
      timeline: t('projects.future.aiEducation.timeline'),
      status: t('projects.status.concept')
    },
    {
      title: t('projects.future.greenSkills.title'),
      description: t('projects.future.greenSkills.description'),
      timeline: t('projects.future.greenSkills.timeline'),
      status: t('projects.status.proposal')
    },
    {
      title: t('projects.future.crossCultural.title'),
      description: t('projects.future.crossCultural.description'),
      timeline: t('projects.future.crossCultural.timeline'),
      status: t('projects.status.development')
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neutral-800 mb-6">
            {t('projects.hero.title')}
          </h1>
          <p className="text-xl text-neutral-600 mb-8 max-w-3xl mx-auto">
            {t('projects.hero.subtitle')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate?.('/partnership')}
              className="bg-primary-600 hover:bg-primary-700"
            >
              {t('projects.hero.partnerButton')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate?.('/contact')}
            >
              {t('projects.hero.contactButton')}
            </Button>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              {t('projects.focusAreas.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('projects.focusAreas.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {focusAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className={`w-16 h-16 rounded-full ${area.color} flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-neutral-600">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              {t('projects.current.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('projects.current.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {currentProjects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-0">
                  <div className="h-48 bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                    <Lightbulb className="h-16 w-16 text-primary-600" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant={project.status === t('projects.status.active') ? 'default' : 'secondary'}>
                        {project.status}
                      </Badge>
                      <Badge variant="outline">{project.funding}</Badge>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                      {project.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {project.description}
                    </p>
                    <div className="space-y-2 text-sm text-neutral-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        <span>{project.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{project.partners} {t('projects.partners')}</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Target Groups */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-4">
              {t('projects.targetGroups.title')}
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              {t('projects.targetGroups.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {targetGroups.map((group, index) => {
              const IconComponent = group.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8 text-primary-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-800 mb-2">
                    {group.title}
                  </h3>
                  <p className="text-neutral-600 text-sm">
                    {group.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Future Plans */}
      <section className="py-16 px-4 bg-primary-600 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              {t('projects.future.title')}
            </h2>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              {t('projects.future.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {futurePlans.map((plan, index) => (
              <Card key={index} className="bg-white/10 border-white/20 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary" className="bg-secondary-400 text-neutral-800">
                      {plan.status}
                    </Badge>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {plan.title}
                  </h3>
                  <p className="text-primary-100 mb-4">
                    {plan.description}
                  </p>
                  <div className="flex items-center gap-2 text-sm text-primary-200">
                    <Target className="h-4 w-4" />
                    <span>{plan.timeline}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <CheckCircle className="h-16 w-16 mx-auto mb-6 text-green-600" />
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-800 mb-6">
            {t('projects.cta.title')}
          </h2>
          <p className="text-xl text-neutral-600 mb-8">
            {t('projects.cta.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button 
              size="lg" 
              onClick={() => onNavigate?.('/partnership')}
              className="bg-primary-600 hover:bg-primary-700"
            >
              {t('projects.cta.partnerButton')}
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate?.('/contact')}
            >
              {t('projects.cta.learnMoreButton')}
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};