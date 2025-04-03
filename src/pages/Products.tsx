import React, { useState } from 'react';
import { Camera, Laptop, Server, Search, Filter, Star } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'cctv', name: 'CCTV & Security' },
    { id: 'computers', name: 'Computers & Laptops' },
    { id: 'networking', name: 'Networking & IT' },
  ];

  const products = [
    {
      id: 1,
      name: 'Pro Security Camera System',
      category: 'cctv',
      price: 599.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1557862921-37829c790f19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced 4K surveillance system with night vision and motion detection.',
      features: ['4K Resolution', 'Night Vision', 'Motion Detection', 'Cloud Storage'],
    },
    {
      id: 2,
      name: 'Business Laptop Pro',
      category: 'computers',
      price: 1299.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'High-performance laptop for business professionals.',
      features: ['Intel i7', '16GB RAM', '512GB SSD', 'NVIDIA Graphics'],
    },
    {
      id: 3,
      name: 'Enterprise Network Switch',
      category: 'networking',
      price: 799.99,
      rating: 4.7,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Managed network switch for enterprise deployments.',
      features: ['48 Ports', 'PoE+', '10GbE Uplinks', 'Layer 3 Switching'],
    },
    {
      id: 4,
      name: 'Biometric Access Control',
      category: 'cctv',
      price: 399.99,
      rating: 4.6,
      image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Advanced biometric access control system.',
      features: ['Fingerprint Scanner', 'Face Recognition', 'Mobile Access', 'Time Attendance'],
    },
    {
      id: 5,
      name: 'Desktop Workstation',
      category: 'computers',
      price: 1899.99,
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'High-end desktop workstation for professional use.',
      features: ['AMD Threadripper', '64GB RAM', '2TB NVMe', 'RTX 4080'],
    },
    {
      id: 6,
      name: 'Enterprise Firewall',
      category: 'networking',
      price: 1499.99,
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
      description: 'Next-generation firewall for enterprise security.',
      features: ['IPS/IDS', 'VPN Support', 'Traffic Shaping', 'Threat Prevention'],
    },
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-6">Our Products</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover our range of high-quality IT equipment, security solutions, and networking hardware.
            </p>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex items-center space-x-4">
              <Filter className="h-5 w-5 text-gray-500" />
              <div className="flex space-x-2">
                {categories.map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      selectedCategory === category.id
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative">
              <Search className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border rounded-md w-full md:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                    <div className="flex items-center">
                      <Star className="h-5 w-5 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {product.features.map((feature, index) => (
                        <li key={index} className="text-sm text-gray-600">• {feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-900">${product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-300">
                      Inquire Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-lg px-6 py-12 md:py-16 md:px-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Need Help Choosing the Right Products?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Our experts are here to help you find the perfect solutions for your business needs.
              </p>
              <button className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-medium hover:bg-blue-50 transition duration-300">
                Get Expert Advice
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;