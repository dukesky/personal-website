'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import PortfolioCard from './PortfolioCard';
import { useContent } from '@/hooks/useContent';

export default function PortfolioSection() {
  const { portfolio } = useContent();

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {portfolio.badge}
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            {portfolio.hero.title.split(' ')[0]} <span className="text-blue-600">{portfolio.hero.title.split(' ')[1]}</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {portfolio.hero.description}
          </p>
        </motion.div>

        {/* Portfolio Cards - Horizontal Layout with Navigation */}
        <div className="relative">
          {/* Cards Container */}
          <div className="flex space-x-6 overflow-hidden">
            {portfolio.cards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="w-1/3 flex-shrink-0"
              >
                <PortfolioCard
                  title={card.title}
                  description={card.description}
                  image={card.image}
                  link={card.link}
                  technologies={card.technologies}
                  projectCount={card.projectCount}
                />
              </motion.div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>
          
          <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
            <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors duration-200">
              <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6">{portfolio.callToAction.text}</p>
          <Link
            href={portfolio.callToAction.buttonLink}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
          >
            {portfolio.callToAction.buttonText}
            <ArrowUpRight className="w-4 h-4 ml-2" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
