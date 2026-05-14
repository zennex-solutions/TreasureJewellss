import React from "react";

const Herosec = () => {
  const images1 = [
    "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
    "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
  ];

  const images2 = [
    "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
    "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
    "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
  ];

  const Column = ({ images, direction }) => {
    const doubled = [...images, ...images];

    return (
      <div className={`overflow-hidden h-full w-48`}>
        <div
          className={`flex flex-col gap-6 ${
            direction === "up" ? "animate-up" : "animate-down"
          }`}
        >
          {doubled.map((src, i) => (
            <img
              key={i}
              src={src}
              className="h-72 w-48 object-cover rounded-xl"
            />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="h-screen bg-[#FFF8F2] flex items-center px-6 md:px-16 overflow-hidden">

      {/* LEFT */}
      <div className="w-full md:w-1/2 z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-[#4A3428]">
          Elegance In <br /> Every Piece
        </h1>
      </div>

      {/* RIGHT */}
      <div className="hidden md:block w-1/2 h-full overflow-hidden">
        <div className="flex gap-6 rotate-[18deg] h-[140%]">

          <Column images={images1} direction="up" />
          <Column images={images2} direction="down" />
          <Column images={images1} direction="up" />
          <Column images={images2} direction="down" />

        </div>
      </div>

      {/* ANIMATION */}
      <style>
        {`
          @keyframes up {
            0% { transform: translateY(0); }
            100% { transform: translateY(-50%); }
          }

          @keyframes down {
            0% { transform: translateY(-50%); }
            100% { transform: translateY(0); }
          }

          .animate-up {
            animation: up 20s linear infinite;
          }

          .animate-down {
            animation: down 20s linear infinite;
          }
        `}
      </style>

    </section>
  );
};

export default Herosec;