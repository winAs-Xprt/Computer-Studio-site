import React from 'react';
import { CheckCircle, Users, Trophy, ThumbsUp } from 'lucide-react';

const About = () => {
  return (
    <div className="pt-16">
      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechPro Solutions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2009, we've been at the forefront of digital innovation, helping businesses transform and thrive in the
              digital age.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Team Photo"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6">
                We're dedicated to empowering businesses with innovative technology solutions that drive growth,
                efficiency, and success. Our team of experts works tirelessly to deliver exceptional results and
                maintain long-lasting partnerships with our clients.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-700">Expert team of certified professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-700">Customized solutions for your business needs</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-2" />
                  <span className="text-gray-700">24/7 support and maintenance</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div>
              <Trophy className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">150+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div>
              <ThumbsUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">15+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div>
              <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <div className="text-4xl font-bold text-gray-900 mb-2">50+</div>
              <div className="text-gray-600">Team Members</div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Journey</h2>
          <div className="space-y-8">
            <div className="flex">
              <div className="w-32 text-right pr-4">
                <div className="text-lg font-bold text-blue-600">2009</div>
              </div>
              <div className="w-0.5 bg-blue-600"></div>
              <div className="flex-1 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Company Founded</h3>
                <p className="text-gray-600">Started as a small IT consulting firm with a team of 5 experts.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-32 text-right pr-4">
                <div className="text-lg font-bold text-blue-600">2015</div>
              </div>
              <div className="w-0.5 bg-blue-600"></div>
              <div className="flex-1 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Expansion</h3>
                <p className="text-gray-600">Expanded services to include digital marketing and web development.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-32 text-right pr-4">
                <div className="text-lg font-bold text-blue-600">2020</div>
              </div>
              <div className="w-0.5 bg-blue-600"></div>
              <div className="flex-1 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Global Reach</h3>
                <p className="text-gray-600">Established presence in multiple countries with over 50 team members.</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-32 text-right pr-4">
                <div className="text-lg font-bold text-blue-600">2024</div>
              </div>
              <div className="w-0.5 bg-blue-600"></div>
              <div className="flex-1 pl-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Innovation Leader</h3>
                <p className="text-gray-600">Recognized as a leading provider of innovative IT solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "TechPro Solutions transformed our business with their innovative IT solutions. Their team's expertise and
                dedication are unmatched."
              </p>
              <div className="font-semibold text-gray-900">John Smith</div>
              <div className="text-gray-600">CEO, Tech Corp</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The level of support and technical expertise we receive from TechPro is exceptional. They're truly invested
                in our success."
              </p>
              <div className="font-semibold text-gray-900">Sarah Johnson</div>
              <div className="text-gray-600">CTO, Digital Solutions</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Working with TechPro has been a game-changer for our company. Their solutions have helped us stay ahead
                of the competition."
              </p>
              <div className="font-semibold text-gray-900">Michael Brown</div>
              <div className="text-gray-600">Director, Innovation Labs</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;