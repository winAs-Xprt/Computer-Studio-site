import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Globe, Shield, Server, Cloud, Megaphone, ArrowRight, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive IT solutions and digital services to transform your business and drive growth
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web & App Development */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <Code className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web & App Development</h3>
              <p className="text-gray-600 mb-6">
                Custom software solutions tailored to your business needs, from responsive websites to complex enterprise applications.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Custom Web Applications</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Mobile App Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>E-commerce Solutions</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Digital Marketing */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <Megaphone className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Digital Marketing</h3>
              <p className="text-gray-600 mb-6">
                Strategic marketing solutions to boost your online presence and drive meaningful engagement with your audience.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>SEO Optimization</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Social Media Marketing</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Content Strategy</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* IT Solutions */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <Server className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">IT Solutions & Support</h3>
              <p className="text-gray-600 mb-6">
                Comprehensive IT support and management services to keep your business running smoothly and securely.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>24/7 Technical Support</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Network Management</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Data Backup & Recovery</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Cloud Solutions */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <Cloud className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Solutions</h3>
              <p className="text-gray-600 mb-6">
                Secure and scalable cloud services to modernize your operations and improve efficiency.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Cloud Migration</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Cloud Infrastructure</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Cloud Security</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Cybersecurity */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <Shield className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cybersecurity</h3>
              <p className="text-gray-600 mb-6">
                Advanced security measures to protect your business from evolving cyber threats.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Security Audits</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Threat Prevention</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Employee Training</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>

            {/* Web Development */}
            <div className="bg-gray-50 rounded-lg p-8 hover:shadow-lg transition duration-300">
              <Globe className="h-12 w-12 text-blue-600 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Professional web development services to create stunning, responsive websites that drive results.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>CMS Development</span>
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span>Website Maintenance</span>
                </li>
              </ul>
              <Link to="/contact" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                Learn More <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg px-6 py-12 md:py-16 md:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Get in touch with us today for a free consultation and let's discuss how we can help you achieve your goals.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition duration-300"
              >
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;