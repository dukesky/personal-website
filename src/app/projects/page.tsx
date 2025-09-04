'use client';

import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, GitBranch } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects() {
  const projects = [
    {
      title: 'Machine Learning Copycat',
      description: 'A comprehensive machine learning project implementing various algorithms for pattern recognition and data analysis.',
      longDescription: 'This project demonstrates the implementation of multiple machine learning algorithms from scratch, including neural networks, decision trees, and ensemble methods. The focus is on understanding the mathematical foundations and practical applications of ML techniques.',
      image: '/figs/ml_copycat.jpg',
      technologies: ['Python', 'NumPy', 'Pandas', 'scikit-learn', 'Matplotlib'],
      github: 'https://github.com/dukesky',
      demo: null,
      category: 'Machine Learning',
      featured: true,
      stats: {
        stars: 15,
        forks: 8,
        commits: 127
      }
    },
    {
      title: 'Deep Learning Image Enhancement',
      description: 'Advanced image super-resolution using Fast Super-Resolution Convolutional Neural Networks (FSRCNN).',
      longDescription: 'Implementation of state-of-the-art FSRCNN architecture for real-time image enhancement. The project includes custom training pipelines, data augmentation techniques, and optimization for deployment.',
      image: '/figs/ml_fsrcnn.jpg',
      technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CUDA'],
      github: 'https://github.com/dukesky',
      demo: null,
      category: 'Deep Learning',
      featured: true,
      stats: {
        stars: 23,
        forks: 12,
        commits: 89
      }
    },
    {
      title: 'Robotic Control Systems',
      description: 'Advanced control algorithms for robotic systems with real-time sensor integration.',
      longDescription: 'Development of sophisticated control systems for robotic applications, including snake-like locomotion, sensor fusion, and adaptive control algorithms. The project combines theoretical control theory with practical hardware implementation.',
      image: '/figs/snake_1.jpg',
      technologies: ['C++', 'Arduino', 'ROS', 'MATLAB', 'Embedded Systems'],
      github: 'https://github.com/dukesky',
      demo: null,
      category: 'Robotics',
      featured: false,
      stats: {
        stars: 8,
        forks: 4,
        commits: 156
      }
    },
    {
      title: 'Natural Language Processing Suite',
      description: 'Comprehensive NLP toolkit for text analysis, sentiment analysis, and language understanding.',
      longDescription: 'A complete natural language processing suite featuring multiple models for text classification, sentiment analysis, named entity recognition, and text summarization. Includes pre-trained models and custom training pipelines.',
      image: '/figs/languages.jpg',
      technologies: ['Python', 'NLTK', 'spaCy', 'Transformers', 'BERT'],
      github: 'https://github.com/dukesky',
      demo: null,
      category: 'NLP',
      featured: false,
      stats: {
        stars: 31,
        forks: 18,
        commits: 203
      }
    },
    {
      title: 'Computer Vision Applications',
      description: 'Real-time computer vision applications including object detection and facial recognition.',
      longDescription: 'Collection of computer vision applications built with modern deep learning frameworks. Features include real-time object detection, facial recognition systems, and emotion analysis with optimized inference pipelines.',
      image: '/figs/emotions.jpg',
      technologies: ['Python', 'OpenCV', 'PyTorch', 'YOLO', 'MediaPipe'],
      github: 'https://github.com/dukesky',
      demo: null,
      category: 'Computer Vision',
      featured: false,
      stats: {
        stars: 19,
        forks: 11,
        commits: 92
      }
    },
    {
      title: 'Data Science Portfolio',
      description: 'Collection of data science projects showcasing various analytical techniques and visualizations.',
      longDescription: 'Comprehensive portfolio of data science projects including exploratory data analysis, statistical modeling, predictive analytics, and interactive visualizations. Each project demonstrates different aspects of the data science workflow.',
      image: '/figs/summary_ml.jpg',
      technologies: ['Python', 'R', 'Jupyter', 'Plotly', 'Streamlit'],
      github: 'https://github.com/dukesky',
      demo: null,
      category: 'Data Science',
      featured: false,
      stats: {
        stars: 27,
        forks: 15,
        commits: 178
      }
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const allProjects = projects;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
              My <span className="text-blue-600">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Detailed showcase of my technical projects, research work, and open-source contributions
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-gray-600">Highlighted projects showcasing my core expertise</p>
          </motion.div>

          <div className="space-y-12">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`grid lg:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <div className="relative h-64 lg:h-80 rounded-lg overflow-hidden shadow-xl">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                
                <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div>
                    <span className="text-blue-600 font-medium text-sm">{project.category}</span>
                    <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {project.longDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center space-x-6 text-sm text-gray-500">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4" />
                      <span>{project.stats.stars}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <GitBranch className="w-4 h-4" />
                      <span>{project.stats.forks}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <span>{project.stats.commits} commits</span>
                    </div>
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-gray-900 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Code</span>
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">All Projects</h2>
            <p className="text-gray-600">Complete collection of my technical work and contributions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-48">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  {project.featured && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    </div>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-blue-600 font-medium text-sm">{project.category}</span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3" />
                        <span>{project.stats.stars}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GitBranch className="w-3 h-3" />
                        <span>{project.stats.forks}</span>
                      </div>
                    </div>
                    
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                    </a>
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
