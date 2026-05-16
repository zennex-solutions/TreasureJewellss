import React, { useState } from "react";
import Navbarsec from "../components/Navbarsec";
import Herosec from "../components/Herosec";

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

  {/* Carousel */}
  <div className="w-full h-screen flex items-center justify-center bg-black">
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
            className="absolute left-0 text-white text-3xl z-50"
          >
            ←
          </button>
          <button
            onClick={next}
            className="absolute right-0 text-white text-3xl z-50"
          >
            →
          </button>
        </div>
  </div>

  {/* Category */}
  <div className="w-full bg-[#e6a1a1] py-10">
    <div className="w-full max-w-[1200px] mx-auto px-4">
      <h2 className="text-black text-lg mb-4">Category</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[120px] md:auto-rows-[150px]">
        
        <div className="bg-gray-300 rounded-md" />
        <div className="col-span-2 row-span-2 bg-gray-300 rounded-md" />
        <div className="bg-gray-300 rounded-md" />

        <div className="row-span-2 bg-gray-300 rounded-md" />
        <div className="bg-gray-300 rounded-md" />
        <div className="col-span-2 bg-gray-300 rounded-md" />

        <div className="row-span-2 bg-gray-300 rounded-md" />
        <div className="col-span-2 bg-gray-300 rounded-md" />
        <div className="bg-gray-300 rounded-md" />

      </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Home;


