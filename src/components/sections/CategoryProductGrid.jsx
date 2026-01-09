import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Sample product data with unique images for each category
const productsByCategory = {
  'o-ring-pusher-mechanical-seals-2': [
    {
      id: 101,
      name: 'Type 21 O-Ring Pusher Seal',
      model: 'ME-21',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024102414370637659433-6.png',
      category: 'O-ring Pusher',
      specifications: ['Ø12-80mm', 'Temperature: -20°C to +180°C', 'Pressure: ≤1.2MPa'],
    },
    {
      id: 102,
      name: 'Type 58U O-Ring Pusher Seal',
      model: 'ME-58U',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og202410211606016193288_png-7.webp',
      category: 'O-ring Pusher',
      specifications: ['Ø18-100mm', 'Temperature: -30°C to +200°C', 'Pressure: ≤1.6MPa'],
    },
    {
      id: 103,
      name: 'Type 155 O-Ring Pusher Seal',
      model: 'ME-155',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024110614081081094004-8.png',
      category: 'O-ring Pusher',
      specifications: ['Ø20-120mm', 'Temperature: -20°C to +180°C', 'Pressure: ≤1.0MPa'],
    },
    {
      id: 104,
      name: 'Type 202 O-Ring Pusher Seal',
      model: 'ME-202',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og20241106150206266935_png-9.webp',
      category: 'O-ring Pusher',
      specifications: ['Ø25-100mm', 'Temperature: -40°C to +220°C', 'Pressure: ≤2.0MPa'],
    },
    {
      id: 105,
      name: 'Type 301 O-Ring Pusher Seal',
      model: 'ME-301',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024110614230723743322-10.png',
      category: 'O-ring Pusher',
      specifications: ['Ø30-120mm', 'Temperature: -20°C to +180°C', 'Pressure: ≤1.5MPa'],
    },
    {
      id: 106,
      name: 'Type 409 O-Ring Pusher Seal',
      model: 'ME-409',
      image: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og202411061501011126876_png-11.webp',
      category: 'O-ring Pusher',
      specifications: ['Ø35-150mm', 'Temperature: -30°C to +200°C', 'Pressure: ≤1.8MPa'],
    },
  ],
};

const CategoryProductGrid = ({ slug }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  
  const products = productsByCategory[slug] || [];
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-back',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="container mx-auto px-4 max-w-[1200px]">
        {/* Header with Search and Filters */}
        <div className="mb-12" data-aos="fade-down">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Available Products
              </h2>
              <p className="text-muted-foreground">
                {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} found
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
              {/* Search Bar */}
              <div className="relative flex-1 lg:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent"
                />
              </div>
              
              {/* Filter Button */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-2 border border-border rounded-md hover:bg-secondary transition-colors"
              >
                <SlidersHorizontal className="w-5 h-5" />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <div className="bg-secondary p-6 rounded-lg mb-8" data-aos="fade-down">
              <h3 className="font-semibold text-lg mb-4">Filter Options</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Size Range</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>All Sizes</option>
                    <option>Ø12-50mm</option>
                    <option>Ø50-100mm</option>
                    <option>Ø100-150mm</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Temperature Range</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>All Temperatures</option>
                    <option>-40°C to 0°C</option>
                    <option>0°C to +100°C</option>
                    <option>+100°C to +220°C</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Pressure Rating</label>
                  <select className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-accent">
                    <option>All Pressures</option>
                    <option>≤1.0MPa</option>
                    <option>≤1.5MPa</option>
                    <option>≤2.0MPa</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div
              key={product.id}
              className="bg-white border border-border rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-64 bg-secondary flex items-center justify-center p-6">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-semibold rounded-full">
                    {product.model}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {product.name}
                </h3>
                
                <div className="space-y-2 mb-4">
                  {product.specifications.map((spec, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{spec}</span>
                    </p>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Link
                    to={`/products/${product.id}`}
                    className="flex-1 text-center px-4 py-2 bg-accent text-white rounded-md hover:bg-orange-dark transition-colors font-medium"
                  >
                    View Details
                  </Link>
                  <button className="px-4 py-2 border border-accent text-accent rounded-md hover:bg-accent hover:text-white transition-colors font-medium">
                    Inquiry
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-16" data-aos="fade-up">
            <p className="text-xl text-muted-foreground mb-4">No products found matching your search.</p>
            <button
              onClick={() => setSearchTerm('')}
              className="text-accent hover:text-orange-dark font-semibold"
            >
              Clear search
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default CategoryProductGrid;

