import React from 'react';
import { Link } from 'react-router-dom';
import { Server, Globe, Shield, Code, Megaphone, Cloud } from 'lucide-react';

const Home = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Your Trusted Partner for Cutting-Edge IT & Digital Solutions
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Empowering businesses with innovative web development, digital marketing, and IT services.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Get Started
            </Link>
            <Link
              to="/services"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-900 transition duration-300"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Key Offerings Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Key Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Server className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Managed IT Services</h3>
              <p className="text-gray-600">Comprehensive IT support and management for your business infrastructure.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Cloud className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cloud Solutions</h3>
              <p className="text-gray-600">Secure and scalable cloud services to modernize your operations.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cybersecurity</h3>
              <p className="text-gray-600">Advanced security measures to protect your business from threats.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Code className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Software Development</h3>
              <p className="text-gray-600">Custom software solutions tailored to your business needs.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Globe className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Web Development</h3>
              <p className="text-gray-600">Responsive and modern websites that drive business growth.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Megaphone className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital Marketing</h3>
              <p className="text-gray-600">Strategic marketing solutions to boost your online presence.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose TechPro Solutions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              With over a decade of experience, we deliver tailored IT solutions that drive business growth. Our proactive
              support, competitive pricing, and commitment to innovation make us the partner of choice for businesses across
              industries.
            </p>
            <Link
              to="/about"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Case Studies */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Case Study 1"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Revolution</h3>
                <p className="text-gray-600 mb-4">
                  Helped a retail client achieve 200% growth in online sales through our digital transformation solutions.
                </p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Case Study 2"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Cloud Migration Success</h3>
                <p className="text-gray-600 mb-4">
                  Seamlessly migrated a healthcare provider to the cloud, improving efficiency by 40%.
                </p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Case Study 3"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Security Enhancement</h3>
                <p className="text-gray-600 mb-4">
                  Implemented advanced cybersecurity measures, preventing over 1000+ potential threats.
                </p>
                <Link to="/services" className="text-blue-600 hover:text-blue-700 font-medium">
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;