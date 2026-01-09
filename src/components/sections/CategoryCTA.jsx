import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CategoryCTA = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full translate-x-1/3 translate-y-1/3"></div>
      </div>

      <div className="container mx-auto px-4 max-w-[1200px] relative z-10">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Need Help Finding the <span className="text-accent">Right Seal?</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Our technical team is ready to assist you in selecting the perfect mechanical seal for your application
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Card */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Call Us</h3>
            <p className="text-gray-200 mb-4">Speak with our experts</p>
            <a
              href="tel:+919967205923"
              className="text-accent hover:text-white transition-colors font-semibold"
            >
              +91 9967205923
            </a>
          </div>

          {/* Email Card */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Email Us</h3>
            <p className="text-gray-200 mb-4">Get technical support</p>
            <div className="flex flex-col">
              <a
                href="mailto:mhtv.engineering1@gmail.com"
                className="text-accent hover:text-white transition-colors font-semibold break-all"
              >
                mhtv.engineering1@gmail.com
              </a>
              <a
                href="mailto:info@mahatvaengieneering.com"
                className="text-accent hover:text-white transition-colors font-semibold break-all"
              >
                info@mahatvaengieneering.com
              </a>
            </div>
          </div>

          {/* Quote Card */}
          <div
            className="bg-white/10 backdrop-blur-sm rounded-lg p-8 text-center hover:bg-white/20 transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRight className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Get a Quote</h3>
            <p className="text-gray-200 mb-4">Request pricing information</p>
            <Link
              to="/contact"
              className="text-accent hover:text-white transition-colors font-semibold"
            >
              Request Quote
            </Link>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12" data-aos="fade-up" data-aos-delay="400">
          <Link
            to="/products"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-accent hover:bg-orange-dark text-white font-semibold rounded-md transition-colors"
          >
            View All Products
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-semibold rounded-md transition-colors"
          >
            Contact Us
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategoryCTA;

