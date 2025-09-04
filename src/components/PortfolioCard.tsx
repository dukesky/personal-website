'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface PortfolioCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies?: string[];
  projectCount?: number;
}

export default function PortfolioCard({ 
  title, 
  description, 
  image, 
  link, 
  technologies = [],
  projectCount = 0
}: PortfolioCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="group flex-shrink-0 w-80 h-80"
    >
      <Link href={link} className="block w-full h-full bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
        {/* Image Section with White Background - Top Half */}
        <div className="relative h-40 bg-white p-6 flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          
          {/* Project Count Badge */}
          {projectCount > 0 && (
            <div className="absolute top-2 right-2 bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              <span className="text-xs font-semibold">{projectCount}</span>
            </div>
          )}
          
          {/* Hover Arrow */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <ArrowUpRight className="w-3 h-3 text-white" />
            </div>
          </div>
        </div>

        {/* Content Section Below Image - Bottom Half */}
        <div className="h-40 p-4 flex flex-col">
          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-xs leading-relaxed mb-3 flex-1 line-clamp-3">
            {description}
          </p>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1 mb-2">
                {technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    +{technologies.length - 3}
                  </span>
                )}
              </div>
              
              {/* Action Text */}
              <div className="flex items-center text-blue-600 text-xs font-medium group-hover:text-blue-700 transition-colors duration-300">
                <span>Explore Projects</span>
                <ArrowUpRight className="w-3 h-3 ml-1 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

