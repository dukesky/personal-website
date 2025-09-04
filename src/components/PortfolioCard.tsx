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
      className="group w-full h-80"
    >
      <Link href={link} className="block w-full h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 relative bg-white">
        {/* Background Image - Full Display */}
        <div className="relative h-40 bg-gray-50 flex items-center justify-center">
          <Image
            src={image}
            alt={title}
            width={192}
            height={96}
            className="w-3/5 h-3/5 object-contain transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col h-40">
          {/* Project Count Badge */}
          {projectCount > 0 && (
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full w-fit mb-3">
              <span className="text-sm font-semibold">{projectCount} projects</span>
            </div>
          )}
          
          <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
            {description}
          </p>

          {/* Technologies */}
          {technologies.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-2 mb-3">
                {technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                    +{technologies.length - 3}
                  </span>
                )}
              </div>
              
              {/* Action Text */}
              <div className="flex items-center text-blue-600 text-sm font-medium group-hover:text-blue-700 transition-colors duration-300">
                <span>Explore Projects</span>
                <ArrowUpRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </div>
            </div>
          )}
        </div>
      </Link>
    </motion.div>
  );
}

