import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const categoryNames = {
  'o-ring-pusher-mechanical-seals-2': 'O-ring Pusher Mechanical Seals',
  'Multiple-Spring-Mechanical-Seals': 'Multiple Spring Mechanical Seals',
  'Wave-Spring-Mechanical-Seals': 'Wave Spring Mechanical Seals',
  'cartridge-mechanical-seal-16': 'Cartridge Mechanical Seal',
  'metal-bellows-mechanical-seals-4': 'Metal Bellows Mechanical Seals',
  'elastomer-bellows-mechanical-seal-1': 'Elastomer Bellows Mechanical Seal',
  'Brand-Pump-Seals-General-Industria-23': 'Brand Pump Seals - General Industrial',
  'Brand-Pump-Seals-Food-and-Beverage-Industry-24': 'Brand Pump Seals - Food and Beverage Industry',
};

const CategoryBreadcrumb = ({ slug }) => {
  const categoryName = categoryNames[slug] || 'Products';

  return (
    <section className="bg-secondary py-4 border-b border-border">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <nav className="flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-accent transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link to="/products" className="text-muted-foreground hover:text-accent transition-colors">
            Products
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">{categoryName}</span>
        </nav>
      </div>
    </section>
  );
};

export default CategoryBreadcrumb;

