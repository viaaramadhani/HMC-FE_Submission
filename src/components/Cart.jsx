
import React, { useEffect, useState } from 'react';

const Cart = ({ cartCount }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(cart);
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  }, [cartCount]);

  const removeFromCart = (index) => {
    const updatedCart = [...cart];
    updatedCart.splice(index, 1);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    const total = updatedCart.reduce((sum, item) => sum + item.price, 0);
    setTotalPrice(total);
  };

  return (
    <div className="mx-60 my-8">
      <h2 className="text-2xl font-semibold mb-6 text-center ">Keranjang Anda</h2>
      {cart.length === 0 ? (
        <div className="p-4 text-center">Your cart is empty</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item, index) => (
            <div key={index} className="border rounded-lg p-4 flex items-center">
              <img src={item.image} alt={item.title} className="w-16 h-16 object-contain mr-4" />
              <div className="flex-1">
                <h3 className="text-sm font-semibold">{item.title}</h3>
                <p className="text-sm">${item.price}</p>
              </div>
              <button
                className="text-red-500 ml-4"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total: ${totalPrice.toFixed(2)}</p>
        <a href="#" className="mt-2 inline-block bg-primary-700 text-white py-2 px-4 rounded-lg">Proceed to Checkout</a>
      </div>
    </div>
  );
};

export default Cart;