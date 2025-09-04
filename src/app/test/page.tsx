'use client';

import { motion } from 'framer-motion';
import PortfolioCard from '../components/PortfolioCard';

export default function TestPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Test Page</h2>
        <div className="flex overflow-x-auto space-x-8 pb-8">
          <PortfolioCard
            title="Machine Learning"
            description="Supervised Learning, Image Processing, and more."
            image="/figs/Machine Learning.png"
            link="/portfolio"
          />
          <PortfolioCard
            title="Electrical Engineering"
            description="Robotic Design, Sensor Networks, and more."
            image="/figs/Robotics.png"
            link="/projects"
          />
          <PortfolioCard
            title="Web & App Design"
            description="Web Scraping, Web Development, and more."
            image="/figs/Web_Develop.png"
            link="/about"
          />
        </div>
      </div>
    </div>
  );
}