'use client';

import { motion } from 'framer-motion';
import { Download, User, FolderOpen, MessageCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useHeroContent } from '@/hooks/useContent';

export default function HeroSection() {
  const hero = useHeroContent();

  const getButtonIcon = (icon?: string) => {
    const iconClass = "w-5 h-5 stroke-2";
    switch (icon) {
      case 'download':
        return <Download className={iconClass} />;
      case 'user':
        return <User className={iconClass} />;
      case 'folder':
        return <FolderOpen className={iconClass} />;
      case 'message':
        return <MessageCircle className={iconClass} />;
      default:
        return null;
    }
  };

  const getButtonStyle = (type?: string) => {
    // Floating card style - no borders, clean shadows
    return 'bg-white/90 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300';
  };

  const getTextColor = (type?: string) => {
    switch (type) {
      case 'primary':
        return 'text-purple-600'; // Purple for download
      case 'secondary':
        return 'text-blue-600'; // Blue for about
      case 'tertiary':
        return 'text-blue-600'; // Blue for works
      case 'outline':
        return 'text-blue-600'; // Blue for contact
      default:
        return 'text-blue-600';
    }
  };

  return (
    <section id="home" className="pt-32 pb-16 min-h-screen flex items-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/figs/main_page_1.png"
          alt="AI and Machine Learning Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/20"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h1 className="text-7xl lg:text-12xl font-bold text-white mb-10 leading-tight">
              {hero.title}
            </h1>
            {hero.subtitle && (
              <p className="text-4xl lg:text-5xl text-gray-200 font-medium max-w-4xl mx-auto leading-relaxed">
                {hero.subtitle}
              </p>
            )}
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-20"
          >
            <p className="text-3xl lg:text-4xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
              {hero.description}
            </p>
          </motion.div>

          {/* Floating Action Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-[25px] max-w-5xl mx-auto"
          >
            {hero.buttons.map((button, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                whileHover={{ 
                  y: -6,
                  scale: 1.03,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                className="group"
              >
                <Link 
                  href={button.href}
                                  className={`inline-flex items-center px-10 py-7 rounded-2xl transition-all duration-300 text-lg font-medium ${
                  getButtonStyle(button.type)
                }`}
                >
                  <span className={`mr-3 group-hover:scale-105 transition-transform duration-200 ${getTextColor(button.type)}`}>
                    {getButtonIcon(button.icon)}
                  </span>
                  <span className={`${getTextColor(button.type)} font-semibold`}>
                    {button.text}
                  </span>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
