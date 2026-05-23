import React, { useState, useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";

const ProductCard = ({ product }) => {
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // 👉 Run carousel ONLY on hover
  useEffect(() => {
    if (!isHovered) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % product.images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered, product.images.length]);

  return (
    <div
      className="bg-transparent p-4 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 🔶 Image Carousel */}
      <div className="h-[250px] sm:h-[300px] overflow-hidden rounded-xl relative">
        
        {/* Sliding Images */}
        <div
          className="h-full flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {product.images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={product.name}
              className="w-full h-full object-cover flex-shrink-0"
            />
          ))}
        </div>

        {/* 🔷 Dot Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {product.images.map((_, i) => (
            <div
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full cursor-pointer transition ${
                index === i ? "bg-white scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* 🔷 Info */}
      <div className="p-4">
        <h3 className="text-base sm:text-lg font-medium">
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm">
          {product.category}
        </p>
        <p className="mt-2 font-semibold">
          ₹{product.price}
        </p>

        {/* 🔶 Add to Cart Button with Icon */}
        <button className="mt-4 w-full flex items-center justify-center gap-2 bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          <FiShoppingCart size={18} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;