import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, LinkedinIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image?: string;
  email?: string;
  linkedin?: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  bio,
  image,
  email,
  linkedin,
}) => {
  return (
    <Card className="text-center hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6">
        {/* Profile Image */}
        <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-neutral-200">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-primary-100 text-primary-600 text-2xl font-bold">
              {name.charAt(0)}
            </div>
          )}
        </div>

        {/* Name and Role */}
        <h3 className="text-xl font-heading font-semibold text-neutral-900 mb-1">
          {name}
        </h3>
        <p className="text-primary-600 font-medium mb-3">{role}</p>

        {/* Bio */}
        <p className="text-neutral-600 text-sm leading-relaxed mb-4">
          {bio}
        </p>

        {/* Contact Links */}
        {(email || linkedin) && (
          <div className="flex justify-center gap-3">
            {email && (
              <a
                href={`mailto:${email}`}
                className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 transition-colors"
                aria-label={`Email ${name}`}
              >
                <Mail className="h-4 w-4" />
              </a>
            )}
            {linkedin && (
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-neutral-100 hover:bg-primary-100 text-neutral-600 hover:text-primary-600 transition-colors"
                aria-label={`${name} on LinkedIn`}
              >
                <LinkedinIcon className="h-4 w-4" />
              </a>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};