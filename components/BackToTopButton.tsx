'use client';

import { Icons } from './icons';

export default function BackToTopButton() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      className='inline-flex items-center text-sm text-gray-600 hover:text-purple-600 transition-colors duration-200'
      aria-label='Scroll to top'
    >
      <Icons.arrowUp className='h-4 w-4 mr-1' />
      Back to top
    </button>
  );
}