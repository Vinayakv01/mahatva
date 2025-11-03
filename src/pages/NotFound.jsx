import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-gray-50 flex items-center justify-center min-h-[60vh]">
      <div className="max-w-md mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-[#F25C05]">404</h1>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-600 mb-8">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or you entered the wrong URL.
          </p>
        </div>
        
        <div className="space-y-4">
          <Link
            to="/"
            className="block bg-[#F25C05] text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            Go Home
          </Link>
          <Link
            to="/products"
            className="block border-2 border-[#F25C05] text-[#F25C05] px-8 py-3 rounded-lg font-semibold hover:bg-[#F25C05] hover:text-white transition-colors"
          >
            Browse Products
          </Link>
        </div>
        
        <div className="mt-12">
          <img
            src="/Dummy Image.PNG"
            alt="404 Error"
            className="mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
