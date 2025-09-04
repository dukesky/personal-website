'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <Image 
              src="/figs/head_logo.png" 
              alt="Tian Zhang" 
              width={32} 
              height={32}
              className="rounded-full"
            />
            <span className="text-xl font-bold text-gray-900">Tian Zhang</span>
          </Link>
          <div className="flex items-center space-x-8">
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</Link>
              <Link href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</Link>
              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</Link>
            </div>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mr-8"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}