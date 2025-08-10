'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <a href="#home" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
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
                <a href="/" className="text-blue-600 font-medium">Home</a>
                <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="/portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
                <a href="/projects" className="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
                <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              </div>
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium mr-12"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900">
                On the Way to
                <span className="block text-blue-600">A Pro Data Scientist</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Data Scientist at JM Eagle, USC graduate specializing in machine learning, 
                cloud deployment, and building intelligent pricing platforms.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="/files/Resume_Tian_Zhang.pdf"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resume
                </a>
                <a 
                  href="/about"
                  className="inline-flex items-center px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
                >
                  Learn More About Me
                </a>
                <a 
                  href="/contact"
                  className="inline-flex items-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <Image
                src="/figs/dog_way_to_ds.jpg"
                alt="Data Science Journey"
                width={600}
                height={400}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              I am a Data Scientist passionate about building intelligent solutions and deploying 
              machine learning models in production environments.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">🎓</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Education</h3>
              <p className="text-gray-600">M.S. from University of Southern California (USC)</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">💼</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Current Role</h3>
              <p className="text-gray-600">Data Scientist at JM Eagle</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">🚀</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Expertise</h3>
              <p className="text-gray-600">ML, Cloud Deployment, Python, SQL</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 grid lg:grid-cols-2 gap-8 items-center"
          >
            <div>
              <Image
                src="/figs/Tian_Zhang.jpg"
                alt="Tian Zhang"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900">My Journey</h3>
              <p className="text-gray-600 leading-relaxed">
                I am a new grad with <strong>master</strong> degree from <strong>University of Southern California (USC)</strong> 
                at 2019. Currently I work as a <strong>Data Scientist</strong> at JM Eagle Manufacturing, 
                in charge of Pricing Quotation Platform.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My current work is about quotation, aiming to give perfect price recommendation for different quote requests. 
                Our quotation platform is daily trained and keeps updated with the newest price trends.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I'm fluent with Python and SQL, and have experience building machine learning models and deploying 
                them into real use based on Cloud Services like AWS SageMaker, Lambda, ECR and S3.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Portfolio</h2>
            <p className="text-xl text-gray-600">Explore my work in machine learning, engineering, and web development</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <a href="/portfolio" className="block p-6">
                <Image
                  src="/figs/Machine Learning.png"
                  alt="Machine Learning"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Machine Learning</h3>
                <ul className="text-gray-600 space-y-1 text-sm mb-4">
                  <li>• Supervised Learning</li>
                  <li>• Image Processing</li>
                  <li>• Deploy ML Model on Cloud</li>
                  <li>• Natural Language Processing</li>
                </ul>
                <div className="text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  View Portfolio →
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <a href="/projects" className="block p-6">
                <Image
                  src="/figs/Robotics.png"
                  alt="Electrical Engineering"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Electrical Engineering</h3>
                <ul className="text-gray-600 space-y-1 text-sm mb-4">
                  <li>• Robotic Design</li>
                  <li>• Sensor Networks</li>
                  <li>• Control System</li>
                  <li>• Circuit Design</li>
                </ul>
                <div className="text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  View Projects →
                </div>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
            >
              <a href="/about" className="block p-6">
                <Image
                  src="/figs/Web_Develop.png"
                  alt="Web & App Design"
                  width={64}
                  height={64}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">Web & App Design</h3>
                <ul className="text-gray-600 space-y-1 text-sm mb-4">
                  <li>• Web Scraping</li>
                  <li>• Web Development</li>
                  <li>• Android Development</li>
                  <li>• Modern UI/UX</li>
                </ul>
                <div className="text-blue-600 text-sm font-medium group-hover:text-blue-800 transition-colors">
                  Learn About Me →
                </div>
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-xl text-gray-600">Let's connect and discuss opportunities</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="mailto:0tianzhang0@gmail.com"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tian-zhang-87b4a0165/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="https://github.com/dukesky"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="/contact"
              className="flex items-center space-x-2 px-6 py-3 border border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors"
            >
              <span>Contact Form →</span>
            </a>
          </motion.div>
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
