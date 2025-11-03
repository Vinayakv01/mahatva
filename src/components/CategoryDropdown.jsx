import { Link } from 'react-router-dom';
import { categories } from '../data/dummyData';

const CategoryDropdown = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {categories.map((category) => (
        <Link
          key={category.id}
          to={`/categories/${category.id}`}
          className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-[#F25C05] transition-colors"
        >
          {category.name}
        </Link>
      ))}
      <div className="border-t border-gray-200 my-1"></div>
      <Link
        to="/categories"
        className="block px-4 py-2 text-sm font-medium text-[#F25C05] hover:bg-orange-50"
      >
        View All Categories
      </Link>
    </div>
  );
};

export default CategoryDropdown;
