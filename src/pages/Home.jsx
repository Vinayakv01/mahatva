import { Link } from 'react-router-dom';
import { products, companyInfo } from '../data/dummyData';
import ProductCard from '../components/ProductCard';
import HeroSection from '../components/HeroSection';

const Home = () => {
  const featuredProducts = products.slice(0, 3);

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Product Highlights */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover our most popular sealing solutions trusted by industry leaders worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link
              to="/products"
              className="bg-[#F25C05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              View All Products
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About {companyInfo.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {companyInfo.description}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F25C05]">{companyInfo.founded}</div>
                  <div className="text-gray-600">Founded</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F25C05]">{companyInfo.employees}</div>
                  <div className="text-gray-600">Employees</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F25C05]">{companyInfo.countries}</div>
                  <div className="text-gray-600">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#F25C05]">1000+</div>
                  <div className="text-gray-600">Products</div>
                </div>
              </div>
              <Link
                to="/about"
                className="bg-[#F25C05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Read More
              </Link>
            </div>
            <div>
              <img
                src="/Dummy Image.PNG"
                alt="Manufacturing Facility"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Contact our expert team for personalized sealing solutions and competitive quotes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-[#F25C05] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
              >
                Contact Us
              </Link>
              <a
                href={`tel:${companyInfo.phone}`}
                className="border-2 border-[#F25C05] text-[#F25C05] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-[#F25C05] hover:text-white transition-colors"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
