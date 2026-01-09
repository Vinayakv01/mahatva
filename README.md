# Mechanical Oilseal Company Website

A modern, responsive website for a mechanical oilseal company built with React, Vite, and Tailwind CSS.

## Features

- **Modern Design**: Clean, business-oriented layout with brand colors (#F25C05)
- **Responsive**: Fully responsive design that works on all devices
- **Navigation**: React Router DOM for seamless page navigation
- **Product Catalog**: Comprehensive product showcase with categories
- **Contact Form**: Interactive contact form with validation
- **SEO Friendly**: Proper routing and meta structure

## Tech Stack

- **React 19** - Frontend framework
- **Vite** - Build tool and development server
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with dropdowns
│   ├── Footer.jsx      # Footer with links and contact info
│   ├── Layout.jsx      # Main layout wrapper
│   ├── HeroSection.jsx # Hero section component
│   ├── ProductCard.jsx # Product display card
│   └── CategoryDropdown.jsx # Category navigation dropdown
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── Products.jsx    # Products listing page
│   ├── ProductDetail.jsx # Individual product page
│   ├── Categories.jsx  # Categories listing
│   ├── About.jsx       # About company page
│   ├── Contact.jsx     # Contact form page
│   └── NotFound.jsx    # 404 error page
├── data/               # Data files
│   └── dummyData.js    # Mock data for products, categories, etc.
├── App.jsx             # Main app component with routing
└── main.jsx            # App entry point
```

## Pages & Routes

- `/` - Homepage with hero section and featured products
- `/products` - All products with search and filtering
- `/products/:id` - Individual product details
- `/categories` - Product categories overview
- `/categories/:id` - Products in specific category
- `/about` - Company information and team
- `/contact` - Contact form and company details
- `/404` - Not found page

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## Features Implemented

### Navigation
- Responsive navbar with logo and menu items
- Dropdown menus for Categories and Products
- Mobile hamburger menu
- Active page highlighting

### Product Management
- Product catalog with 6 sample products
- Category-based organization (6 categories)
- Product detail pages with specifications
- Search and filter functionality
- Related products suggestions

### Company Information
- About page with company history and values
- Team member showcase
- Company statistics and achievements
- Contact information and business hours

### Contact System
- Interactive contact form with validation
- Form submission simulation
- Company contact details
- Map placeholder and business hours

### Design & UX
- Brand color scheme (#F25C05 orange)
- Responsive grid layouts
- Hover effects and transitions
- Loading states and feedback
- Professional business aesthetic

## Dummy Data

The website includes comprehensive dummy data for:
- 6 product categories (Radial Seals, Axial Seals, etc.)
- 6 sample products with detailed specifications
- Company information and team members
- Contact details and business information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Development Notes

- Uses React Router DOM v6 for routing
- Tailwind CSS for styling with custom brand colors
- Responsive design with mobile-first approach
- Clean component architecture with separation of concerns
- No external API dependencies (all dummy data)

## Future Enhancements

- Integration with real backend API
- User authentication and accounts
- Shopping cart and e-commerce functionality
- Product image gallery
- Blog/news section
- Multi-language support
- Advanced search and filtering
- Product comparison feature