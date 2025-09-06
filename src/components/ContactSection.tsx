'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare } from 'lucide-react';
import Link from 'next/link';
import { useContent } from '@/hooks/useContent';

const iconMap = {
  mail: Mail,
  linkedin: Linkedin,
  github: Github,
  'message-square': MessageSquare,
};

export default function ContactSection() {
  const { contact } = useContent();

  return (
    <section id="contact" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{contact.hero.title}</h2>
          <p className="text-xl text-gray-600">{contact.hero.description}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-8"
        >
          {contact.links.map((link, index) => {
            const IconComponent = link.icon ? iconMap[link.icon as keyof typeof iconMap] : null;
            
            return (
              <Link
                key={index}
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                className={`flex items-center space-x-3 px-8 py-4 rounded-xl transition-all duration-300 min-w-[180px] justify-center ${
                  link.color === 'blue-600' ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl' :
                  link.color === 'blue-700' ? 'bg-blue-700 text-white hover:bg-blue-800 shadow-lg hover:shadow-xl' :
                  link.color === 'gray-800' ? 'bg-gray-800 text-white hover:bg-gray-900 shadow-lg hover:shadow-xl' :
                  link.color === 'outline' ? 'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-lg hover:shadow-xl' :
                  'bg-white border-2 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 shadow-lg hover:shadow-xl'
                }`}
              >
                {IconComponent && <IconComponent className="w-6 h-6" />}
                <span className="font-medium">{link.text}</span>
              </Link>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
