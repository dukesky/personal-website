'use client';

import { useFooterContent } from '@/hooks/useContent';

export default function FooterSection() {
  const footer = useFooterContent();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-400">
          {footer.text}
        </p>
      </div>
    </footer>
  );
}
