import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const FeaturedProducts = ({ onAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <section className="px-4">
      <h2 className="text-2xl font-semibold mb-6 text-center">Item Product</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
