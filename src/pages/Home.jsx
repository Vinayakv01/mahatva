import HeroBanner from '../components/HeroBanner';
import CompanyIntroduction from '../components/sections/CompanyIntroduction';
import ProductsShowcase from '../components/sections/ProductsShowcase';
import FieldsOfApplication from '../components/sections/FieldsOfApplication';
import AboutMahatva from '../components/sections/AboutMahatva';
import ContactForm from '../components/sections/ContactForm';
// import FloatingContactPopup from '../components/sections/FloatingContactPopup';
import SideActionButtons from '../components/sections/SideActionButtons';

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pt-[90px] lg:pt-[146px]">
        <HeroBanner />
        <CompanyIntroduction />
        <ProductsShowcase />
        <FieldsOfApplication />
        <AboutMahatva />
        <ContactForm />
      </main>
      
      {/* <FloatingContactPopup /> */}
      <SideActionButtons />
    </div>
  );
};

export default Home;
