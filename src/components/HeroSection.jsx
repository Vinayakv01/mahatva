import { Link } from 'react-router-dom';
import { companyInfo } from '../data/dummyData';

const HeroSection = ({ title, subtitle, showButtons = true }) => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-orange-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {title || companyInfo.tagline}
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            {subtitle || "With over 30 years of experience, we provide high-quality sealing solutions to industries worldwide. Trusted by manufacturers across 25+ countries."}
          </p>
          {showButtons && (
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/products"
                className="bg-[#F25C05] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                View Products
              </Link>
              <Link
                to="/contact"
                className="border-2 border-[#F25C05] text-[#F25C05] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F25C05] hover:text-white transition-colors"
              >
                Get Quote
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
