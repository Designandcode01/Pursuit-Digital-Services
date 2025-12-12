'use client';

import { Icons } from './icons';

const socialLinks = [
  { href: 'https://x.com/SAMGraphics6', icon: Icons.twitter, label: 'Twitter / X' },
  { href: 'https://github.com/Designandcode01', icon: Icons.gitHub, label: 'GitHub' },
  { href: 'https://linkedin.com', icon: Icons.linkedin, label: 'LinkedIn' },
  { href: 'https://instagram.com', icon: Icons.instagram, label: 'Instagram' },
  { href: 'mailto:info@pursuitdigital.com', icon: Icons.mail, label: 'Email' },
];

export default function FooterSocialLinks() {
  return (
    <div className='flex space-x-4 mb-6'>
      {socialLinks.map((social) => {
        const Icon = social.icon;
        // Skip if icon is undefined
        if (!Icon) return null;
        
        return (
          <a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.label}
            className='p-2 rounded-full bg-gray-100 hover:bg-linear-to-r hover:from-purple-50 hover:via-pink-50 hover:to-red-50 text-gray-600 hover:text-purple-600 transition-all duration-200 hover:scale-110'
          >
            <Icon className="h-5 w-5" />
          </a>
        );
      })}
    </div>
  );
}