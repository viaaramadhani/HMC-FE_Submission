import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';

const Header = ({ cartCount }) => {
  return (
    <nav className="bg-white dark:bg-gray-800 sticky">
      <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4 sticky">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="shrink-0">
              <Link to="/" title="">
                <img className="block w-auto h-20" src="public\v-logo.png" alt=""/>
              </Link>
            </div>
          </div>
          <div className="flex items-center lg:space-x-2">
            <Link to="/cart" className="inline-flex items-center rounded-lg justify-center p-2 hover:bg-gray-100 dark:hover:bg-gray-700 text-sm font-medium leading-none text-gray-900 dark:text-white">
              <span className="sr-only">Cart</span>
              <ShoppingCart className="w-5 h-5 lg:me-1" />
              <span className="hidden sm:flex">Cart ({cartCount})</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;