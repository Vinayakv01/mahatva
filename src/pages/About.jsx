import { Link } from 'react-router-dom';
import { companyInfo } from '../data/dummyData';
import aboutImage from '../assets/aboutimage.png';

const About = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About {companyInfo.name}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyInfo.description}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in {companyInfo.founded}, Mahatva Engineering began as a small family business 
                with a vision to provide high-quality sealing solutions to local manufacturers. With over 10+ years of experience, 
                we have grown into a trusted leader in the sealing industry, serving customers worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our commitment to innovation, quality, and customer service has been the driving force behind 
                our success. We continuously invest in research and development to bring cutting-edge sealing 
                technologies to the market.
              </p>
              <p className="text-lg text-gray-600">
                Today, we are proud to be a trusted partner for thousands of companies worldwide, from small 
                local businesses to multinational corporations, providing them with reliable sealing solutions 
                that keep their operations running smoothly.
              </p>
            </div>
            <div>
              <img
                src={aboutImage}
                alt="Company History"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F25C05] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Quality Excellence</h3>
              <p className="text-gray-600">
                We maintain the highest standards in manufacturing and quality control, ensuring every product meets our rigorous specifications.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F25C05] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Innovation</h3>
              <p className="text-gray-600">
                We continuously invest in research and development to bring innovative sealing solutions to the market.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <div className="w-16 h-16 bg-[#F25C05] rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Customer Focus</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. We build lasting relationships through exceptional service.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our sealing solutions can help your business succeed
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-[#F25C05] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              to="/products"
              className="border-2 border-[#F25C05] text-[#F25C05] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F25C05] hover:text-white transition-colors"
            >
              View Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
