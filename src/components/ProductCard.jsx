import React from 'react';
import { Star } from 'lucide-react';

const ProductCard = ({ product, onAddToCart }) => {
  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    onAddToCart(cart.length);
  };

  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition-shadow">
      <div className="p-4">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-contain mb-4 rounded"
        />
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <div className="flex items-center mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className={`h-4 w-4 ${star <= product.rating.rate ? 'text-yellow-500' : 'text-gray-300'}`} />
          ))}
          <span className="ml-2 text-sm text-gray-500">({product.rating.count} reviews)</span>
        </div>
        <p className="text-lg font-semibold">${product.price}</p>
      </div>
      <div className="p-4">
        <button onClick={addToCart} className="w-full px-4 py-2 bg-red-100 rounded-lg">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
