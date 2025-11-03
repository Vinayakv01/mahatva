import { Link, useParams } from 'react-router-dom';
import { categories, products } from '../data/dummyData';
import ProductCard from '../components/ProductCard';

const Categories = () => {
  const { categoryId } = useParams();
  
  if (categoryId) {
    // Show specific category
    const category = categories.find(c => c.id === parseInt(categoryId));
    const categoryProducts = products.filter(p => p.categoryId === parseInt(categoryId));

    if (!category) {
      return (
        <div className="bg-gray-50 flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you're looking for doesn't exist.</p>
            <Link
              to="/categories"
              className="bg-[#F25C05] text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              Back to Categories
            </Link>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50">
        {/* Category Header */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                {category.name}
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                {category.description}
              </p>
              <img
                src={category.image}
                alt={category.name}
                className="mx-auto h-64 w-auto rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>

        {/* Products in Category */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Products in {category.name}
              </h2>
              <p className="text-gray-600">
                Showing {categoryProducts.length} products
              </p>
            </div>

            {categoryProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {categoryProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <svg
                  className="mx-auto h-12 w-12 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.29-1.009-5.824-2.709M15 6.291A7.962 7.962 0 0012 5c-2.34 0-4.29 1.009-5.824 2.709"
                  />
                </svg>
                <h3 className="mt-2 text-sm font-medium text-gray-900">No products found</h3>
                <p className="mt-1 text-sm text-gray-500">
                  No products are available in this category yet.
                </p>
              </div>
            )}
          </div>
        </section>
      </div>
    );
  }

  // Show all categories
  return (
    <div className="bg-gray-50">
      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Product Categories
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of sealing solutions organized by category
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => {
              const categoryProductCount = products.filter(p => p.categoryId === category.id).length;
              
              return (
                <Link
                  key={category.id}
                  to={`/categories/${category.id}`}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                >
                  <div className="aspect-w-16 aspect-h-9">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-[#F25C05] transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {category.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {categoryProductCount} products
                      </span>
                      <span className="text-[#F25C05] font-medium group-hover:text-orange-600 transition-colors">
                        View Products →
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F25C05]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Our engineering team specializes in custom sealing solutions for unique applications
          </p>
          <Link
            to="/contact"
            className="bg-white text-[#F25C05] px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Request Custom Solution
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Categories;
