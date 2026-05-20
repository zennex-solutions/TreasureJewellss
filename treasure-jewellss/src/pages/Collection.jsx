import React, { useState } from "react";
import { FiFilter, FiX } from "react-icons/fi";

const DEFAULT_MAX = 6000;

const products = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  name: `Jewellery ${i + 1}`,
  price: (i + 1) * 499,
  image: `https://picsum.photos/400/500?random=${i + 1}`,
  category: i % 2 === 0 ? "Necklace" : "Earrings",
}));

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX);

  const clearFilters = () => {
    setActiveFilter("All");
    setMaxPrice(DEFAULT_MAX);
  };

  const filteredProducts = products.filter((p) => {
    const categoryMatch =
      activeFilter === "All" || p.category === activeFilter;
    const priceMatch = p.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="min-h-screen bg-[#faf7f5]">

      {/* 🔶 Banner */}
      <div className="h-[220px] sm:h-[300px] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1617038220319-276d3cfab638"
          alt="banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl font-semibold text-center px-4">
            Made for Looks They Won’t Forget.
          </h1>
          <p className="text-white text-sm sm:text-base mt-2 text-center px-4">
            Statement pieces crafted to steal attention and collect compliments everywhere you go.
          </p>
        </div>
      </div>
      {/* 🔷 Toggle Button (Filter ↔ Close) */}
      <button
        onClick={() => setShowFilter(!showFilter)}
        className="fixed left-4 top-1/2 -translate-y-1/2 z-50 bg-black text-white p-3 rounded-full shadow-lg"
      >
        {showFilter ? <FiX size={20} /> : <FiFilter size={20} />}
      </button>

      {/* 🔷 Overlay */}
      <div
        onClick={() => setShowFilter(false)}
        className={`fixed inset-0 bg-black/30 z-40 transition-opacity duration-300 ${
          showFilter ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* 🔷 Glass Filter Panel */}
     
<div
  className={`fixed top-20 bottom-10 left-0 w-[80%] sm:w-[280px] z-50 p-6
  backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl rounded-2xl
  transform transition-transform duration-300
  ${showFilter ? "translate-x-16 sm:translate-x-20" : "-translate-x-full"}`}
>
        {/* Header */}
<h2 className="text-lg font-semibold mb-6">Filters</h2>
        {/* Category */}
        <div className="mb-6">
          <h3 className="mb-3 font-medium">Category</h3>
          {["All", "Necklace", "Earrings"].map((item) => (
            <div
              key={item}
              onClick={() => setActiveFilter(item)}
              className={`mb-2 cursor-pointer ${
                activeFilter === item
                  ? "text-black font-semibold"
                  : "text-gray-600"
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        {/* Price */}
        <div>
          <h3 className="mb-3 font-medium">
            Max Price: ₹{maxPrice}
          </h3>
          <input
            type="range"
            min="0"
            max={DEFAULT_MAX}
            step="100"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-black"
          />
        </div>
        <button
  onClick={clearFilters}
  className="mt-8 w-full border border-black text-black py-2 rounded-lg hover:bg-black hover:text-white transition"
>
  Clear All Filters
</button>
      </div>



      {/* 🔶 Product Grid */}
      <div className="px-4 sm:px-6 lg:px-10 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-transparent p-4 rounded-xl overflow-hidden shadow hover:shadow-xl transition"
            >
              <div className="h-[250px] sm:h-[300px] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full rounded-xl object-cover hover:scale-105 transition duration-500 hover:rounded-xl"
                />
              </div>

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

                <button className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
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

export default Collection;