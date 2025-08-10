'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Code, Database, Cloud, Brain } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  const skills = [
    { name: 'Python', level: 95, icon: '🐍' },
    { name: 'SQL', level: 90, icon: '🗃️' },
    { name: 'Machine Learning', level: 85, icon: '🤖' },
    { name: 'AWS', level: 80, icon: '☁️' },
    { name: 'Data Analysis', level: 90, icon: '📊' },
    { name: 'Deep Learning', level: 75, icon: '🧠' }
  ];

  const experiences = [
    {
      title: 'Data Scientist',
      company: 'JM Eagle Manufacturing',
      period: '2019 - Present',
      description: 'Lead the Pricing Quotation Platform development, implementing ML models for price recommendations with daily training and real-time updates.',
      icon: <Briefcase className="w-6 h-6" />
    },
    {
      title: 'Master of Science',
      company: 'University of Southern California (USC)',
      period: '2017 - 2019',
      description: 'Specialized in Data Science and Machine Learning with focus on practical applications and cloud deployment.',
      icon: <GraduationCap className="w-6 h-6" />
    }
  ];

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
                <a href="/about" className="text-blue-600 font-medium">About</a>
                <a href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
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
              About <span className="text-blue-600">Me</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Data Scientist passionate about building intelligent solutions and deploying 
              machine learning models in production environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Image
                src="/figs/Tian_Zhang.jpg"
                alt="Tian Zhang"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-gray-900">My Journey</h2>
              <p className="text-gray-600 leading-relaxed">
                I am a Data Scientist with a <strong>Master's degree from USC (2019)</strong>, currently working at 
                <strong> JM Eagle Manufacturing</strong> where I lead the Pricing Quotation Platform development.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My expertise lies in building machine learning models that solve real-world business problems. 
                I specialize in pricing optimization, data analysis, and deploying ML solutions using cloud technologies 
                like AWS SageMaker, Lambda, and S3.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm passionate about the intersection of data science and practical business applications, 
                always looking for ways to turn data insights into actionable solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience</h2>
            <p className="text-xl text-gray-600">My professional journey</p>
          </motion.div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-600"
              >
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900">{exp.title}</h3>
                    <p className="text-blue-600 font-medium">{exp.company}</p>
                    <p className="text-gray-500 text-sm mb-2">{exp.period}</p>
                    <p className="text-gray-600">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">Technologies and tools I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-lg font-semibold text-gray-900">{skill.name}</h3>
                  <span className="text-2xl">{skill.icon}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    viewport={{ once: true }}
                    className="bg-blue-600 h-3 rounded-full"
                  />
                </div>
                <p className="text-sm text-gray-600 mt-2">{skill.level}% proficiency</p>
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
