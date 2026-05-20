import React, { useState } from "react";

const categories = [
  { name: "Necklaces", image: "https://picsum.photos/200?random=1" },
  { name: "Earrings", image: "https://picsum.photos/200?random=2" },
  { name: "Bracelets", image: "https://picsum.photos/200?random=3" },
  { name: "Rings", image: "https://picsum.photos/200?random=4" },
  { name: "Anklets", image: "https://picsum.photos/200?random=5" },
  { name: "Sets", image: "https://picsum.photos/200?random=6" },
];

const products = Array.from({ length: 8 }, (_, i) => ({
  id: i + 1,
  name: `Best Seller ${i + 1}`,
  price: `₹${(i + 1) * 799}`,
  image: `https://picsum.photos/400/500?random=${i + 10}`,
}));

const BestSellers = () => {
    const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="min-h-screen bg-[#faf7f5]">

      {/* 🔶 Banner */}
      <div className="h-[220px] sm:h-[300px] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl font-semibold">
            Best Sellers
          </h1>
        </div>
      </div>

      {/* 🔷 Category Carousel */}
     <div className="px-4 sm:px-6 lg:px-10 py-6">
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        Shop by Category
      </h2>

      <div className="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
  {categories.map((cat, index) => (
    <button
      key={index}
      onClick={() => setActiveCategory(cat.name)}
      className={`whitespace-nowrap px-5 py-2 rounded-full text-sm transition-all duration-300
        ${
          activeCategory === cat.name
            ? "bg-black text-white shadow"
            : "bg-white text-gray-700 border border-gray-300 hover:border-black hover:text-black"
        }
      `}
    >
      {cat.name}
    </button>
  ))}
</div>
    </div>
      {/* 🔶 Product Grid */}
      <div className="px-4 sm:px-6 lg:px-10 pb-10">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Trending Now
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="h-[250px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition duration-500"
                />
              </div>

              <div className="p-4">
                <h3 className="text-sm sm:text-base font-medium">
                  {product.name}
                </h3>
                <p className="mt-2 font-semibold">{product.price}</p>

                <button className="mt-3 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
};

export default BestSellers;