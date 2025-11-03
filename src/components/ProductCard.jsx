import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-12">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <span className="text-sm text-[#F25C05] font-medium">{product.category}</span>
          <span className="text-lg font-bold text-gray-900">{product.price}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.features.slice(0, 2).map((feature, index) => (
            <span
              key={index}
              className="bg-orange-100 text-[#F25C05] px-2 py-1 rounded-full text-xs font-medium"
            >
              {feature}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Link
            to={`/products/${product.id}`}
            className="flex-1 bg-[#F25C05] text-white text-center py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
          >
            View Details
          </Link>
          <Link
            to="/contact"
            className="flex-1 border-2 border-[#F25C05] text-[#F25C05] text-center py-2 px-4 rounded-lg font-semibold hover:bg-[#F25C05] hover:text-white transition-colors"
          >
            Quote
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
