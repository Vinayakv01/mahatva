import { Outlet } from 'react-router-dom';
import HeaderNavigation from './HeaderNavigation';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <HeaderNavigation />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
