import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categoryData = {
  'o-ring-pusher-mechanical-seals-2': {
    title: 'O-ring Pusher Mechanical Seals',
    subtitle: 'Reliable Sealing Solutions for Industrial Applications',
    description: 'O-ring Pusher seals use a sliding secondary seal and in this design the O-ring is pushed along the outside diameter of the equipment shaft or sleeve. The O-ring retains the sealed liquid and follows along the shaft to compensate for face wear.',
  },
  'Multiple-Spring-Mechanical-Seals': {
    title: 'Multiple Spring Mechanical Seals',
    subtitle: 'Versatile and Reliable Design',
    description: 'Our multiple spring seals are versatile and reliable, ideal for a wide range of applications where axial space is limited.',
  },
  'Wave-Spring-Mechanical-Seals': {
    title: 'Wave Spring Mechanical Seals',
    subtitle: 'Compact Design for Limited Space',
    description: 'Wave spring seals offer a compact design, making them perfect for limited space installations without compromising performance.',
  },
  'cartridge-mechanical-seal-16': {
    title: 'Cartridge Mechanical Seal',
    subtitle: 'Pre-Assembled Reliability',
    description: 'Mahatva Engineering Cartridge Seal construction is a proven reliability improvement. Seals pre-assembled at the factory, pressure tested and shipped as a unit dramatically increase performance as errors due to incorrect installation decline.',
  },
  'metal-bellows-mechanical-seals-4': {
    title: 'Metal Bellows Mechanical Seals',
    subtitle: 'Precision Engineered for Demanding Applications',
    description: 'Metal Bellows seal are constructed by welding a series of diaphragms together to form a bellows units. Metal bellows seals are often effective in a wide range of other seal applications. The most common of these is chemical, general water pump applications.',
  },
  'elastomer-bellows-mechanical-seal-1': {
    title: 'Elastomer Bellows Mechanical Seal',
    subtitle: 'Flexible Sealing Solutions',
    description: 'Elastomer bellows mechanical seal is indentified by the use of an elastomer bellows or diaphragm for the secondary sealing member. Elatomer bellows seal units require a positive abutment at the back of the bellows or spring, positioned so as to give the correct seal working length.',
  },
  'Brand-Pump-Seals-General-Industria-23': {
    title: 'Brand Pump Seals - General Industrial',
    subtitle: 'Quality Replacements for Leading Brands',
    description: 'High-quality replacement seals for general industrial pumps, ensuring performance and longevity for various brands.',
  },
  'Brand-Pump-Seals-Food-and-Beverage-Industry-24': {
    title: 'Brand Pump Seals - Food and Beverage Industry',
    subtitle: 'Hygienic and Compliant Solutions',
    description: 'Hygienic and compliant seals designed for pumps in the food and beverage industry, meeting strict safety standards.',
  },
};

const CategoryHero = ({ slug }) => {
  const category = categoryData[slug] || {
    title: 'Mechanical Seals',
    subtitle: 'Industrial Sealing Solutions',
    description: 'Explore our range of high-quality mechanical seals for various industrial applications.',
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });
  }, []);

  return (
    <section className="bg-gray-900 text-white py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="max-w-4xl mx-auto text-center" data-aos="fade-up">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="text-accent">Mahatva Engineering®</span> {category.title}
          </h1>
          <p className="text-xl lg:text-2xl mb-6 text-gray-200">{category.subtitle}</p>
          <p className="text-base lg:text-lg text-gray-300 leading-relaxed">{category.description}</p>
        </div>
      </div>
    </section>
  );
};

export default CategoryHero;

