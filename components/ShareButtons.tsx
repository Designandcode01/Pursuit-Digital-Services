// components/share-buttons.tsx
'use client';

import { 
  Twitter, 
  Linkedin, 
  Facebook, 
  Link as LinkIcon, 
  Mail,
  MessageCircle,
  Share2 
} from 'lucide-react';
import { useState } from 'react';

interface ShareButtonsProps {
  title: string;
  url: string;
  className?: string;
  showLabels?: boolean;
}

export function ShareButtons({ 
  title, 
  url, 
  className = '',
  showLabels = false 
}: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
    telegram: `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    email: `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent('Check out this article: ' + url)}`,
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const platforms = [
    { key: 'twitter', icon: Twitter, label: 'Twitter', color: 'hover:bg-blue-50 hover:text-blue-600' },
    { key: 'linkedin', icon: Linkedin, label: 'LinkedIn', color: 'hover:bg-blue-100 hover:text-blue-700' },
    { key: 'facebook', icon: Facebook, label: 'Facebook', color: 'hover:bg-blue-50 hover:text-blue-800' },
    { key: 'whatsapp', icon: MessageCircle, label: 'WhatsApp', color: 'hover:bg-green-50 hover:text-green-600' },
    // { key: 'telegram', icon: Send, label: 'Telegram', color: 'hover:bg-blue-50 hover:text-blue-500' },
    { key: 'email', icon: Mail, label: 'Email', color: 'hover:bg-gray-100 hover:text-gray-700' },
  ];

  return (
    <div className={`space-y-3 ${className}`}>
      {showLabels && <h4 className="font-medium">Share this post:</h4>}
      
      <div className="flex flex-wrap gap-2">
        {platforms.map(({ key, icon: Icon, label, color }) => (
          <a
            key={key}
            href={shareLinks[key as keyof typeof shareLinks]}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${color}`}
            aria-label={`Share on ${label}`}
          >
            <Icon size={18} />
            {showLabels && <span className="text-sm">{label}</span>}
          </a>
        ))}
        
        <button
          onClick={copyToClipboard}
          className={`flex items-center gap-2 px-3 py-2 rounded-lg border transition-colors ${
            copied 
              ? 'bg-green-50 text-green-600 border-green-200' 
              : 'hover:bg-gray-100 hover:text-gray-700'
          }`}
          aria-label="Copy link"
        >
          <LinkIcon size={18} />
          {showLabels && (
            <span className="text-sm">
              {copied ? 'Copied!' : 'Copy Link'}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}










// // components/share-buttons.tsx
// 'use client';

// export function ShareButtons({ title, url }: { title: string; url: string }) {
//   const shareLinks = {
//     twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
//     linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
//     facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
//   };

//   return (
//     <div className="flex space-x-2">
//       {Object.entries(shareLinks).map(([platform, link]) => (
//         <a
//           key={platform}
//           href={link}
//           target="_blank"
//           rel="noopener noreferrer"
//           className="p-2 rounded hover:bg-gray-100"
//         >
//           Share on {platform}
//         </a>
//       ))}
//     </div>
//   );
// }