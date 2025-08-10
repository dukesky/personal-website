'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Tag } from 'lucide-react';
import Image from 'next/image';

export default function Portfolio() {
  const projects = [
    {
      title: 'Pricing Quotation Platform',
      category: 'Machine Learning',
      description: 'AI-powered pricing platform for JM Eagle Manufacturing with daily training and real-time price recommendations.',
      image: '/figs/ml_news.jpg',
      technologies: ['Python', 'AWS SageMaker', 'SQL', 'Lambda', 'S3'],
      features: [
        'Real-time price optimization',
        'Daily model retraining',
        'Cloud-based deployment',
        'Automated quote generation'
      ],
      status: 'Production'
    },
    {
      title: 'Image Super-Resolution with FSRCNN',
      category: 'Deep Learning',
      description: 'Implementation of Fast Super-Resolution Convolutional Neural Network for image enhancement.',
      image: '/figs/ml_fsrcnn.jpg',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'NumPy'],
      features: [
        'Real-time image enhancement',
        'Multiple scaling factors',
        'Optimized for speed',
        'High-quality results'
      ],
      status: 'Completed'
    },
    {
      title: 'News Classification System',
      category: 'Natural Language Processing',
      description: 'Automated news categorization system using machine learning and NLP techniques.',
      image: '/figs/news.jpg',
      technologies: ['Python', 'scikit-learn', 'NLTK', 'Pandas'],
      features: [
        'Multi-class classification',
        'Text preprocessing pipeline',
        'Feature extraction',
        'Performance optimization'
      ],
      status: 'Completed'
    },
    {
      title: 'Robotic Snake Control System',
      category: 'Robotics',
      description: 'Advanced control system for robotic snake locomotion with sensor integration.',
      image: '/figs/robot_snake.jpg',
      technologies: ['C++', 'Arduino', 'Sensors', 'Control Theory'],
      features: [
        'Serpentine locomotion',
        'Sensor feedback control',
        'Real-time processing',
        'Adaptive algorithms'
      ],
      status: 'Research'
    },
    {
      title: 'Emotion Recognition System',
      category: 'Computer Vision',
      description: 'Deep learning model for facial emotion recognition with real-time processing capabilities.',
      image: '/figs/emotions.jpg',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'CNN'],
      features: [
        'Real-time emotion detection',
        'Multiple emotion classes',
        'High accuracy model',
        'Video stream processing'
      ],
      status: 'Completed'
    },
    {
      title: 'Language Processing Pipeline',
      category: 'Natural Language Processing',
      description: 'Comprehensive NLP pipeline for text analysis and language understanding.',
      image: '/figs/languages.jpg',
      technologies: ['Python', 'spaCy', 'BERT', 'Transformers'],
      features: [
        'Multi-language support',
        'Sentiment analysis',
        'Entity recognition',
        'Text summarization'
      ],
      status: 'In Progress'
    }
  ];

  const categories = ['All', 'Machine Learning', 'Deep Learning', 'Natural Language Processing', 'Computer Vision', 'Robotics'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Image 
                src="/figs/head_logo.png" 
                alt="Tian Zhang" 
                width={32} 
                height={32}
                className="rounded-full"
              />
              <span className="text-xl font-bold text-gray-900">Tian Zhang</span>
            </a>
            <div className="flex items-center space-x-8">
              <div className="hidden md:flex space-x-8">
                <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="/portfolio" className="text-blue-600 font-medium">Portfolio</a>
                <a href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mr-8"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              My <span className="text-blue-600">Portfolio</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore my work in machine learning, data science, and intelligent system development
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === 'Production' ? 'bg-green-100 text-green-800' :
                      project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                      project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-blue-600 font-medium">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {project.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Details
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Designed by <strong>Tian Zhang</strong> • Modern Personal Website v3.0 • 2024
          </p>
        </div>
      </footer>
    </div>
  );
}
