import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Facebook, 
  Youtube, 
  Linkedin, 
  Music as TiktokIcon,
  ChevronDown, 
  Menu,
  Download,
  X
} from 'lucide-react';
import { cn } from '../lib/utils';

const LOGO_URL = "/Mainlogo.png";

const products = [
  { title: "O-ring Pusher Mechanical Seals", href: "/products" },
  { title: "Multiple Spring Mechanical Seals", href: "/products" },
  { title: "Wave Spring Mechanical Seals", href: "/products" },
  { title: "Cartridge Mechanical seal", href: "/products" },
  { title: "Metal Bellows Mechanical Seals", href: "/products" },
  { title: "Agitator Mechanical Seal", href: "/products" },
  { title: "Elastomer Bellows Mechanical Seal", href: "/products" },
  { title: "Brand Pump Seals -General Industrial", href: "/products" },
  { title: "Brand Pump Seals - Food and Beverage Industry", href: "/products" },
];

const supportLinks = [
  { title: "Mahatva Engineering Mechanical seal Materials Code", href: "/about" },
  { title: "Mechanical seal selection and installation", href: "/about" }
];

const joinLinks = [
  { title: "Work With Us", href: "/contact" },
  { title: "Distributors", href: "/contact" }
];

const secondaryNavLinks = [
  { title: "O-RING PUSHER SEALS", href: "/products" },
  { title: "MULTIPLE SPRING SEALS", href: "/products" },
  { title: "WAVE SPRING SEALS", href: "/products" },
  { title: "O.E.M PUMP SEAL", href: "/products" },
  { title: "CARTRIDGE SEAL", href: "/products" },
];

const DesktopTopBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();

  return (
    <div className="hidden lg:block bg-[#ececec]">
      <div className="container mx-auto px-5 flex items-center justify-between h-[56px] max-w-[1920px]">
        <div className="flex items-center">
          <nav className="flex items-center">
            <Link 
              to="/about" 
              className={cn(
                "px-3 py-2 text-base text-muted-foreground hover:text-accent font-normal",
                location.pathname === '/about' && "text-accent"
              )}
            >
              About
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('products')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-3 py-2 text-base text-muted-foreground hover:text-accent font-normal uppercase flex items-center">
                Products
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'products' && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-lg z-50 w-[500px] p-4 grid grid-cols-2 gap-3">
                  {products.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/products" 
              className={cn(
                "px-3 py-2 text-base text-muted-foreground hover:text-accent font-normal",
                location.pathname === '/products' && "text-accent"
              )}
            >
              Blog
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('support')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-3 py-2 text-base text-muted-foreground hover:text-accent font-normal uppercase flex items-center">
                support
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'support' && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-lg z-50 w-[300px] p-4">
                  {supportLinks.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              to="/contact" 
              className={cn(
                "px-3 py-2 text-base text-muted-foreground hover:text-accent font-normal",
                location.pathname === '/contact' && "text-accent"
              )}
            >
              FAQ
            </Link>
            
            <div 
              className="relative"
              onMouseEnter={() => setOpenDropdown('join')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-3 py-2 text-base text-muted-foreground hover:text-accent font-normal uppercase flex items-center">
                JOIN WITH US
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {openDropdown === 'join' && (
                <div className="absolute top-full left-0 mt-1 bg-white border border-border rounded-md shadow-lg z-50 w-[200px] p-4">
                  {joinLinks.map((item) => (
                    <Link
                      key={item.title}
                      to={item.href}
                      className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground text-sm font-medium"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </nav>
          
          <div className="h-4 w-px bg-gray-400 mx-4"></div>
          
          <Link
            to="/contact"
            className="bg-destructive text-white px-3 py-[6px] text-base font-semibold rounded hover:bg-destructive/90"
          >
            CONTACT
          </Link>
        </div>
        
        <div className="flex items-center gap-x-3">
          <div className="flex items-center gap-x-3">
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <Facebook size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <Youtube size={18} />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <Linkedin size={18} />
            </a>
            <a href="#" rel="noopener noreferrer" className="text-muted-foreground hover:text-accent">
              <TiktokIcon size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const DesktopBottomBar = () => {
  return (
    <div className="hidden lg:block bg-white">
      <div className="container mx-auto px-5 flex items-center justify-between h-[90px] max-w-[1920px]">
        <Link to="/">
          <img src={LOGO_URL} alt="Company Logo" className="h-[51px] w-auto" />
        </Link>
        <nav className="flex items-center gap-x-6">
          <ul className="flex items-center gap-x-6">
            {secondaryNavLinks.map(link => (
              <li key={link.title}>
                <Link 
                  to={link.href} 
                  className="text-sm font-semibold uppercase text-foreground hover:text-accent transition-colors"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
          <Link
            to="/products"
            className="bg-destructive text-white font-semibold text-sm h-auto py-3 px-5 rounded flex items-center gap-2 hover:bg-destructive/90"
          >
            <Download className="h-4 w-4" />
            CATALOGUES
          </Link>
        </nav>
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden p-2"
      >
        <Menu className="h-8 w-8" />
        <span className="sr-only">Open menu</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />
          <div className="fixed left-0 top-0 h-full w-[300px] sm:w-[350px] bg-white flex flex-col">
            <div className="p-4 border-b flex items-center justify-between">
              <Link to="/" onClick={() => setIsOpen(false)}>
                <img src={LOGO_URL} alt="Company Logo" className="h-[51px] w-auto" />
              </Link>
              <button onClick={() => setIsOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex-grow overflow-y-auto">
              <div className="p-4 border-b">
                <Link to="/about" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </div>
              
              <div className="border-b">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'products' ? null : 'products')}
                  className="w-full px-4 py-3 text-lg font-medium flex items-center justify-between"
                >
                  Products
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openAccordion === 'products' && "rotate-180")} />
                </button>
                {openAccordion === 'products' && (
                  <div className="px-4 bg-gray-50 pb-4">
                    {products.map(item => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block py-3 text-muted-foreground hover:text-foreground border-t"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-4 border-b">
                <Link to="/products" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                  Blog
                </Link>
              </div>
              
              <div className="border-b">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'support' ? null : 'support')}
                  className="w-full px-4 py-3 text-lg font-medium flex items-center justify-between"
                >
                  Support
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openAccordion === 'support' && "rotate-180")} />
                </button>
                {openAccordion === 'support' && (
                  <div className="px-4 bg-gray-50 pb-4">
                    {supportLinks.map(item => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block py-3 text-muted-foreground hover:text-foreground border-t"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-4 border-b">
                <Link to="/contact" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>
                  FAQ
                </Link>
              </div>
              
              <div className="border-b">
                <button
                  onClick={() => setOpenAccordion(openAccordion === 'join' ? null : 'join')}
                  className="w-full px-4 py-3 text-lg font-medium uppercase flex items-center justify-between"
                >
                  Join with us
                  <ChevronDown className={cn("h-4 w-4 transition-transform", openAccordion === 'join' && "rotate-180")} />
                </button>
                {openAccordion === 'join' && (
                  <div className="px-4 bg-gray-50 pb-4">
                    {joinLinks.map(item => (
                      <Link
                        key={item.title}
                        to={item.href}
                        className="block py-3 text-muted-foreground hover:text-foreground border-t"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <div className="p-4 border-b">
                <p className="text-lg font-medium mb-2">Product Categories</p>
                <ul>
                  {secondaryNavLinks.map(link => (
                    <li key={link.title}>
                      <Link 
                        to={link.href} 
                        className="block py-2 text-muted-foreground hover:text-foreground uppercase text-sm"
                        onClick={() => setIsOpen(false)}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="p-4 mt-auto border-t space-y-4">
              <Link
                to="/products"
                className="w-full bg-destructive text-white font-semibold uppercase flex items-center justify-center gap-2 py-3 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                <Download className="h-4 w-4" />
                Catalogues
              </Link>
              <Link
                to="/contact"
                className="w-full bg-destructive text-white font-semibold uppercase flex items-center justify-center py-3 px-4 rounded"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function HeaderNavigation() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm font-sans">
      <DesktopTopBar />
      <DesktopBottomBar />
      
      <div className="lg:hidden flex items-center justify-between h-[90px] px-5 bg-white">
        <Link to="/">
          <img src={LOGO_URL} alt="Company Logo" className="h-[51px] w-auto" />
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
}

