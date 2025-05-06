
import React from 'react';
import { LucideIcon } from 'lucide-react';

interface SocialIconProps {
  icon: LucideIcon;
  platform: string;
}

const SocialIcon = ({ icon: Icon, platform }: SocialIconProps) => {
  return (
    <a 
      href="#" 
      className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-700 transition-colors"
      aria-label={`Connect on ${platform}`}
    >
      <Icon size={18} />
    </a>
  );
};

export default SocialIcon;
