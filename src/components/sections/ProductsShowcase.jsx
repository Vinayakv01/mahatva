import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ArrowRight } from 'lucide-react';
import AOS from 'aos';

import 'swiper/css';
import 'aos/dist/aos.css';

const productsData = [
  {
    id: 1,
    title: 'O-ring Pusher Mechanical Seals',
    description: 'O-ring Pusher seals use a sliding secondary seal and in this design the O-ring is pushed along the outside diameter of the equipment shaft or sleeve. The O-ring retains the sealed liquid and follows along the shaft to compensate for face wear.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024102414370637659433-6.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og202410211606016193288_png-7.webp',
    url: '/products',
  },
  {
    id: 2,
    title: 'Multiple Spring Mechanical Seals',
    description: 'Our multiple spring seals are versatile and reliable, ideal for a wide range of applications where axial space is limited.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024110614081081094004-8.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og20241106150206266935_png-9.webp',
    url: '/products',
  },
  {
    id: 3,
    title: 'Wave Spring Mechanical Seals',
    description: 'Wave spring seals offer a compact design, making them perfect for limited space installations without compromising performance.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024110614230723743322-10.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og202411061501011126876_png-11.webp',
    url: '/products',
  },
  {
    id: 4,
    title: 'Cartridge Mechanical seal',
    description: 'Mahatva Engineering Cartridge Seal construction is a proven reliability improvement. Seals pre-assembled at the factory, pressure tested and shipped as a unit dramatically increase performance as errors due to incorrect installation decline.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/2024102414390239273229-12.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024102414420942972952_png-13.webp',
    url: '/products',
  },
  {
    id: 5,
    title: 'Metal Bellows Mechanical Seals',
    description: 'Metal Bellows seal are constructed by welding a series of diaphragms together to form a bellows units. Metal bellows seals are often effective in a wide range of other seal applications. The most common of these is chemical, general water pump applications.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/20241024143747374772905-14.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og20241024144331433144497_png-15.webp',
    url: '/products',
  },
  {
    id: 6,
    title: 'Elastomer Bellows Mechanical Seal',
    description: 'Elastomer bellows mechanical seal is indentified by the use of an elastomer bellows or diaphragm for the secondary sealing member. Elatomer bellows seal units require a positive abutment at the back of the bellows or spring, positioned so as to give the correct seal working length',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/20241024144433443381775-16.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024102414453145317154_png-17.webp',
    url: '/products',
  },
  {
    id: 7,
    title: 'Brand Pump Seals -General Industrial',
    description: 'High-quality replacement seals for general industrial pumps, ensuring performance and longevity for various brands.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/20241115135946594698724-18.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024110614430943970721_png-19.webp',
    url: '/products',
  },
  {
    id: 8,
    title: 'Brand Pump Seals - Food and Beverage Industry',
    description: 'Hygienic and compliant seals designed for pumps in the food and beverage industry, meeting strict safety standards.',
    detailedImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/20241106142449244970984-20.png',
    compactImage: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/d6064255-48bc-4eb5-b1fc-2e0647dd5996-tngseal-com/assets/images/og2024110614430143196688_png-21.webp',
    url: '/products',
  },
];

const ProductCard = ({ product }) => {
  return (
    <div className="group h-full">
      <Link to={product.url} className="block h-full">
        <div className="relative h-full bg-white rounded-lg shadow-md overflow-hidden transition-all duration-500 ease-in-out group-hover:shadow-2xl group-hover:scale-[1.03]">
          {/* Image Container with smooth transition */}
          <div className="relative w-full h-full min-h-[350px] flex items-center justify-center p-8 bg-gray-50">
            {/* Line Diagram - Default View */}
            <img 
              src={product.compactImage} 
              alt={product.title} 
              className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-500 ease-in-out group-hover:opacity-0 group-hover:scale-95" 
            />
            
            {/* Actual Seal Image - Hover View */}
            <img 
              src={product.detailedImage} 
              alt={product.title} 
              className="absolute inset-0 w-full h-full object-contain p-8 opacity-0 scale-105 transition-all duration-500 ease-in-out group-hover:opacity-100 group-hover:scale-100" 
            />
          </div>
          
          {/* Title - Always visible at bottom */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white via-white/95 to-transparent p-4">
            <h3 className="font-semibold text-foreground text-lg leading-tight text-center transition-colors duration-300 group-hover:text-accent">
              {product.title}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  );
};

const ProductsShowcase = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-back',
            once: true,
        });
    }, []);

    return (
        <section id="frame2" className="bg-secondary py-24 sm:py-32">
            <div className="container mx-auto px-4 max-w-[1200px]">
                <div className="text-center mb-12 sm:mb-16" data-aos="zoom-in">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-foreground px-4">
                        <span className="text-accent">Mahatva Engineering®</span> PRODUCTS
                    </h3>
                    <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground px-4">
                        Choose from Our Range of Products
                    </p>
                </div>
                
                <div data-aos="fade-up" className="relative">
                    <Swiper
                        spaceBetween={30}
                        slidesPerView={1.2}
                        breakpoints={{
                            640: { slidesPerView: 2 },
                            768: { slidesPerView: 3 },
                            1024: { slidesPerView: 4 },
                        }}
                        className="!pb-4"
                    >
                        {productsData.map((product) => (
                            <SwiperSlide key={product.id} className="!h-auto py-4">
                                <ProductCard product={product} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                <div className="mt-20 text-center">
                    <Link to="/products" className="text-accent hover:text-orange-dark font-semibold text-lg inline-flex items-center gap-2 transition-colors">
                        View all products <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ProductsShowcase;

