'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useContent } from '@/hooks/useContent';

export default function AboutSection() {
  const { about } = useContent();
  const { hero } = useContent();

  return (
    <section id="about" className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/figs/main_page_2.png"
          alt="AI and Machine Learning Background"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
        </motion.div>

        {/* Four Vertical Blocks - Full Width Layout */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full min-h-screen mb-16"
        >
          {/* Box 1: USC - Left Quarter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute left-0 top-1/6 w-1/4 h-1/2 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mx-4 h-80 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🎓</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Education</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Graduate from University of Southern California, major in Electrical Engineering
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 2: JM Eagle - Left Mid Quarter */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="absolute left-1/4 top-1/3 w-1/4 h-1/2 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mx-4 h-80 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🏭</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">JM Eagle</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Join JM Eagle to use Machine Learning empower traditional industry
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 3: Walmart - Right Mid Quarter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="absolute left-1/2 top-1/6 w-1/4 h-1/2 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mx-4 h-80 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛒</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Walmart</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Join Walmart to apply deep learning and LLM to empower ecommerce search
                </p>
              </div>
            </div>
          </motion.div>

          {/* Box 4: Snap - Right Quarter */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="absolute left-3/4 top-1/3 w-1/4 h-1/2 flex items-center justify-center"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg mx-4 h-80 flex flex-col justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">📱</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">Snap</h4>
                <p className="text-gray-700 text-base leading-relaxed">
                  Join Snap to apply Agentic AI to empower the way people connect
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>


      </div>
    </section>
  );
}
