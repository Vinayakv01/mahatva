import React, { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const categoryDetails = {
  'o-ring-pusher-mechanical-seals-2': {
    features: [
      'Simple and reliable design with proven performance',
      'Easy installation and maintenance',
      'Wide range of sizes from Ø12mm to Ø150mm',
      'Compatible with various shaft diameters',
      'Excellent chemical resistance',
      'Cost-effective sealing solution',
    ],
    applications: [
      'Water pumps',
      'Chemical pumps',
      'Food processing equipment',
      'Pharmaceutical applications',
      'General industrial pumps',
      'HVAC systems',
    ],
    technicalInfo: 'O-ring pusher mechanical seals feature a simple yet effective design where the O-ring provides the secondary sealing while being pushed along the shaft. This design allows for excellent flexibility and compensation for shaft deflection and end play.',
  },
};

const CategoryDescription = ({ slug }) => {
  const details = categoryDetails[slug] || {
    features: [
      'High-quality construction',
      'Reliable performance',
      'Wide application range',
      'Easy maintenance',
    ],
    applications: [
      'Industrial pumps',
      'Chemical processing',
      'Water treatment',
      'Manufacturing',
    ],
    technicalInfo: 'Our mechanical seals are designed and manufactured to the highest standards, ensuring reliable performance across various industrial applications.',
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: true,
    });
  }, []);

  return (
    <section className="py-16 lg:py-24 bg-secondary">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Features */}
          <div data-aos="fade-right">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <span className="text-accent">Key</span> Features
            </h2>
            <div className="space-y-4">
              {details.features.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <span className="text-accent">Applications</span>
            </h2>
            <div className="space-y-4">
              {details.applications.map((application, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-foreground text-lg">{application}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Technical Information */}
        <div className="mt-16" data-aos="fade-up">
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-md">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              <span className="text-accent">Technical</span> Information
            </h2>
            <p className="text-foreground text-lg leading-relaxed mb-8">
              {details.technicalInfo}
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-xl text-accent mb-2">Materials</h4>
                <p className="text-muted-foreground">Carbon, Silicon Carbide, Tungsten Carbide, Ceramic</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-xl text-accent mb-2">Elastomers</h4>
                <p className="text-muted-foreground">NBR, EPDM, FKM, PTFE, Kalrez®</p>
              </div>
              <div className="bg-secondary p-6 rounded-lg">
                <h4 className="font-bold text-xl text-accent mb-2">Standards</h4>
                <p className="text-muted-foreground">ISO 3069, DIN 24960, EN 12756</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryDescription;

