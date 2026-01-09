import React from 'react';
import { Shapes, Handshake, Globe, Users } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  {
    icon: Shapes,
    value: '2000+',
    label: 'TYPES AND SIZES',
  },
  {
    icon: Handshake,
    value: '3000+',
    label: 'Partners',
  },
  {
    icon: Globe,
    value: '67+',
    label: 'COUNTRIES WHERE WE EXPORT',
  },
  {
    icon: Users,
    value: '75+',
    label: 'EMPLOYEES',
  },
];

const StatCard = ({ stat, index }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center text-center transition-all duration-500 ease-out ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <stat.icon className="h-16 w-16 text-gray-400 mb-4" strokeWidth={1} />
      <p className="text-[48px] leading-none font-bold text-accent">
        {stat.value}
      </p>
      <p className="mt-4 text-sm font-medium text-muted-foreground uppercase tracking-wider">
        {stat.label}
      </p>
    </div>
  );
};

const CompanyAdvantages = () => {
  return (
    <section className="bg-background py-20 lg:py-[120px]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-[700px] mx-auto">
          <h2 className="text-3xl lg:text-4xl font-semibold text-accent uppercase mb-4">
            OUR ADVANTAGE
          </h2>
          <p className="text-base lg:text-lg text-muted-foreground leading-relaxed">
            Our products include more than 100 series of standard mechanical seals, more than 2000 models and specifications.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyAdvantages;

