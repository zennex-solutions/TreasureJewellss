
import React, { useState, useEffect } from "react";
import { FiFilter, FiX } from "react-icons/fi";
import { useSearchParams, useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const DEFAULT_MAX = 6000;

const products = Array.from({ length: 12 }, (_, i) => {
  const categories = ["Necklace", "Earrings", "Rings", "Bracelets"];

  return {
    id: i + 1,
    name: `Jewellery ${i + 1}`,
    price: (i + 1) * 499,
    images: [
      `https://picsum.photos/400/500?random=${i + 1}a`,
      `https://picsum.photos/400/500?random=${i + 1}b`,
      `https://picsum.photos/400/500?random=${i + 1}c`,
      `https://picsum.photos/400/500?random=${i + 1}d`,
    ],
    category: categories[i % categories.length],
  };
});

const Collection = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [activeFilter, setActiveFilter] = useState("All");
  const [maxPrice, setMaxPrice] = useState(DEFAULT_MAX);

  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // ✅ URL → State
  useEffect(() => {
    const category = searchParams.get("category");
    const price = searchParams.get("price");

    if (category) {
      setActiveFilter(category);
    } else {
      setActiveFilter("All");
    }

    if (price !== null) {
      setMaxPrice(Number(price));
    } else {
      setMaxPrice(DEFAULT_MAX);
    }
  }, [searchParams]);

  // ✅ Update Category + URL
  const handleFilterChange = (category) => {
    setActiveFilter(category);

    const params = new URLSearchParams();

    if (category !== "All") {
      params.set("category", category);
    }

    if (maxPrice !== DEFAULT_MAX) {
      params.set("price", maxPrice);
    }

    navigate(`/collection?${params.toString()}`);
  };

  // ✅ Update Price + URL
  const handlePriceChange = (value) => {
    setMaxPrice(value);

    const params = new URLSearchParams();

    if (activeFilter !== "All") {
      params.set("category", activeFilter);
    }

    if (value !== DEFAULT_MAX) {
      params.set("price", value);
    }

    navigate(`/collection?${params.toString()}`);
  };

  // ✅ Clear all filters
  const clearFilters = () => {
    setActiveFilter("All");
    setMaxPrice(DEFAULT_MAX);
    navigate("/collection");
  };

  // ✅ Filtering logic
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
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl font-semibold text-center px-4">
            Made for Looks They Won’t Forget.
          </h1>
          <p className="text-white text-sm sm:text-base mt-2 text-center px-4">
            Statement pieces crafted to steal attention and collect compliments everywhere you go.
          </p>
        </div>
      </div>

      {/* 🔷 Toggle Button */}
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

      {/* 🔷 Filter Panel */}
      <div
        className={`fixed top-20 bottom-10 left-0 w-[80%] sm:w-[280px] z-50 p-6
        backdrop-blur-xl bg-white/30 border border-white/20 shadow-xl rounded-2xl
        transform transition-transform duration-300
        ${
          showFilter
            ? "translate-x-16 sm:translate-x-20"
            : "-translate-x-full"
        }`}
      >
        <h2 className="text-lg font-semibold mb-6">Filters</h2>

        {/* Category */}
        <div className="mb-6">
          <h3 className="mb-3 font-medium">Category</h3>

          {["All", "Necklace", "Earrings", "Rings", "Bracelets"].map(
            (item) => (
              <div
                key={item}
                onClick={() => handleFilterChange(item)}
                className={`mb-2 cursor-pointer ${
                  activeFilter === item
                    ? "text-black font-semibold"
                    : "text-gray-600"
                }`}
              >
                {item}
              </div>
            )
          )}
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
            onChange={(e) =>
              handlePriceChange(Number(e.target.value))
            }
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
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;