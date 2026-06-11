import React, { useState } from "react";
import Navbarsec from "../components/Navbarsec";
import Herosec from "../components/Herosec";
import WaveDivider from "../components/WaveDivider";
import ShowcaseCarousel from "../components/ShowcaseCarousel";
import { Link } from "react-router-dom";

const images = [
  "https://picsum.photos/id/1015/600/400",
  "https://picsum.photos/id/1016/600/400",
  "https://picsum.photos/id/1018/600/400",
  "https://picsum.photos/id/1020/600/400",
  "https://picsum.photos/id/1024/600/400",
];

const Home = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const getPosition = (i) => {
    if (i === index) return "center";
    if (i === (index - 1 + images.length) % images.length) return "left";
    if (i === (index + 1) % images.length) return "right";
    return "hidden";
  };

  const getStyles = (position) => {
    switch (position) {
      case "center":
        return "translate-x-0 scale-100 z-30 opacity-100 rotate-y-0";
      case "left":
        return "-translate-x-[340px] scale-75 z-10 opacity-60 rotate-y-[25deg]";
      case "right":
        return "translate-x-[340px] scale-75 z-10 opacity-60 rotate-y-[-25deg]";
      default:
        return "opacity-0 scale-50 pointer-events-none";
    }
  };

  return (
    <>

      <div className="w-full overflow-x-hidden">
  <Navbarsec />
  <Herosec />
<WaveDivider />
<ShowcaseCarousel />
  
<WaveDivider flip={true} />
  {/* Carousel */}
<div className="w-full min-h-screen flex flex-col items-center justify-center bg-[#FEF4EA]">
  
  {/* Carousel */}
  <div
    className="relative w-full h-[400px] flex items-center justify-center"
    style={{ perspective: "1200px" }}
  >
    {images.map((src, i) => {
      const position = getPosition(i);

      return (
        <img
          key={i}
          src={src}
          className={`absolute w-[300px] h-[400px] object-cover rounded-xl shadow-2xl transition-all duration-500 ease-in-out
          ${getStyles(position)}`}
          style={{
            transformStyle: "preserve-3d",
          }}
        />
      );
    })}

    {/* Controls */}
    <button
      onClick={prev}
      className="absolute left-4 text-black text-3xl z-50"
    >
      ←
    </button>
    <button
      onClick={next}
      className="absolute right-4 text-black text-3xl z-50"
    >
      →
    </button>
  </div>

  {/* Button BELOW carousel */}
  <button className="mt-10 px-8 py-3 bg-black text-white rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300">
    Shop Trending
  </button>

</div>
<WaveDivider />
  {/* Category */}
  <div className="w-full bg-[#fff] py-10">
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <h2 className="text-black text-lg mb-4">Category</h2>

     <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[120px] md:auto-rows-[150px]">
  
  <Link to="/collection?category=Necklace" className="bg-gray-300 rounded-md" />
  
  <Link to="/collection?category=Earrings" className="col-span-2 row-span-2 bg-gray-300 rounded-md" />
  
  <Link to="/collection?category=Rings" className="bg-gray-300 rounded-md" />

  <Link to="/collection?category=Bracelets" className="row-span-2 bg-gray-300 rounded-md" />

  <Link to="/collection?category=Anklets" className="bg-gray-300 rounded-md" />

  <Link to="/collection?category=Necklace" className="col-span-2 bg-gray-300 rounded-md" />

  <Link to="/collection?category=Earrings" className="row-span-2 bg-gray-300 rounded-md" />

  <Link to="/collection?category=Rings" className="col-span-2 bg-gray-300 rounded-md" />

  <Link to="/collection?category=Bracelets" className="bg-gray-300 rounded-md" />

</div>
    </div>
  </div>
</div>


{/* About us  */}
<WaveDivider flip={true} />
    <section className="w-full bg-[#FEF4EA] py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest uppercase mb-3 text-gray-600">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
            Our Story
          </h2>

          <p className="text-lg mb-6 text-gray-700">
            Jewelry crafted to celebrate timeless femininity.
          </p>

          <div className="space-y-4 text-gray-600 leading-relaxed">
            <p>
              Every piece in our collection tells a story of elegance,
              craftsmanship, and passion. We believe that jewelry is more than
              an accessory—it's an expression of your unique journey.
            </p>

            <p>
              From delicate everyday pieces to statement bridal sets, each
              design is thoughtfully created to complement your natural grace
              and confidence.
            </p>

            <p>
              Our commitment to quality craftsmanship and affordable luxury
              means you never have to compromise between style and value.
            </p>
          </div>

          {/* BUTTON */}
          <button className="mt-8 px-8 py-3 border border-black text-black rounded-full hover:bg-black hover:text-white transition-all duration-300">
            Know More
          </button>
        </div>

        {/* RIGHT IMAGES */}
        <div className="relative flex justify-center">
          
          {/* MAIN IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed"
            alt="Jewelry"
            className="w-[80%] md:w-[400px] h-[500px] object-cover rounded-xl shadow-lg"
          />

          {/* SMALL OVERLAY IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f"
            alt="Detail"
            className="absolute bottom-0 right-10 w-[140px] h-[180px] object-cover rounded-lg shadow-xl border-4 border-[#FEF4EA]"
          />
        </div>

      </div>
    </section>
    <WaveDivider />
    </>
  );
};

export default Home;


