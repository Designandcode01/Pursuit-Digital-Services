// components/floating-share-bar.tsx
'use client';

import { Share2, X, Twitter, Linkedin, Facebook, Link as LinkIcon } from 'lucide-react';
import { useState } from 'react';

interface FloatingShareBarProps {
  title: string;
  url: string;
}

export function FloatingShareBar({ title, url }: FloatingShareBarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-4 z-50 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition-colors"
        aria-label={isOpen ? 'Close share menu' : 'Open share menu'}
      >
        {isOpen ? <X size={24} /> : <Share2 size={24} />}
      </button>

      {/* Share menu */}
      {isOpen && (
        <div className="fixed right-4 bottom-20 z-50 p-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl border">
          <div className="space-y-3">
            <h4 className="font-semibold">Share this post</h4>
            <div className="flex space-x-3">
              <a
                href={shareLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-200"
                aria-label="Share on Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={shareLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-50 text-blue-700 hover:bg-blue-100"
                aria-label="Share on LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={shareLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-blue-100 text-blue-800 hover:bg-blue-200"
                aria-label="Share on Facebook"
              >
                <Facebook size={20} />
              </a>
              <button
                onClick={copyToClipboard}
                className="p-2 rounded-full bg-gray-100 hover:bg-gray-200"
                aria-label="Copy link"
              >
                <LinkIcon size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}