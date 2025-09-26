import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  link?: string;
  tags?: string[];
  status?: 'active' | 'completed' | 'planned';
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  tags = [],
  status = 'active',
}) => {
  const { t } = useTranslation();
  const statusColors = {
    active: 'bg-green-100 text-green-800',
    completed: 'bg-blue-100 text-blue-800',
    planned: 'bg-yellow-100 text-yellow-800',
  };

  const statusLabel = {
    active: t('common.status.active'),
    completed: t('common.status.completed'),
    planned: t('common.status.planned'),
  }[status];

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      {image && (
        <div className="w-full h-48 overflow-hidden rounded-t-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <CardHeader>
        <div className="flex justify-between items-start mb-2">
          <CardTitle className="text-xl font-heading">{title}</CardTitle>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[status]}`}>
            {statusLabel}
          </span>
        </div>
        <CardDescription className="text-neutral-600">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-primary-100 text-primary-700 rounded-md text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {link && (
          <Button variant="outline" size="sm" className="w-full group">
            {t('common.learnMore')}
            <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        )}
      </CardContent>
    </Card>
  );
};