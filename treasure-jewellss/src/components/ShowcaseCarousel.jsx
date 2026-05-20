// import React, { useState, useEffect } from "react";

// const CardCarousel = () => {
//   const [index, setIndex] = useState(0);

//   const items = [
//     {
//       left: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
//       right: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
//       title: "Timeless Elegance",
//       desc: "Crafted to shine through every moment",
//     },
//     {
//       left: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
//       right: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
//       title: "Modern Glam",
//       desc: "Designed for bold and confident looks",
//     },
//     {
//       left: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
//       right: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
//       title: "Everyday Sparkle",
//       desc: "Luxury you can wear daily",
//     },
//     {
//       left: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
//       right: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
//       title: "Statement Pieces",
//       desc: "Designed to stand out effortlessly",
//     },
//   ];

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % items.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % items.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) =>
//       prev === 0 ? items.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="w-full py-20 bg-white flex flex-col items-center">

//       <h2 className="text-3xl md:text-5xl font-bold text-[#4A3428] mb-10">
//         Curated For You
//       </h2>

//       {/* Carousel */}
//       <div className="relative w-full overflow-hidden">

//         {/* Slides */}
//         <div
//           className="flex transition-transform duration-700"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {items.map((item, i) => (
//             <div key={i} className="w-full flex-shrink-0">

//               <div className="w-full flex items-center justify-between gap-4 md:gap-6 px-6 md:px-12 py-5 md:py-6 rounded-none shadow-md">

//                 {/* LEFT IMAGE */}
//                 <img
//                   src={item.left}
//                   className="w-16 h-16 md:w-20 md:h-20 object-cover rounded-xl"
//                   alt=""
//                 />

//                 {/* TEXT */}
//                 <div className="text-center px-2">
//                   <h3 className="text-sm md:text-lg font-semibold text-[#4A3428]">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-[#6B6375]">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* RIGHT OVAL IMAGE */}
//                 <img
//                   src={item.right}
//                   className="w-12 h-20 md:w-16 md:h-28 object-cover rounded-full"
//                   alt=""
//                 />

//               </div>

//             </div>
//           ))}
//         </div>

//         {/* CONTROLS */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-2 rounded-full shadow"
//         >
//           ‹
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 backdrop-blur px-3 py-2 rounded-full shadow"
//         >
//           ›
//         </button>

//       </div>

//       {/* INDICATORS */}
//       <div className="flex gap-3 mt-6">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
//               index === i
//                 ? "bg-[#B76E79] w-4"
//                 : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   );
// };

// export default CardCarousel;































// import React, { useState, useEffect } from "react";

// const CardCarousel = () => {
//   const [index, setIndex] = useState(0);

//   const items = [
//     {
//       left: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
//       right: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
//       title: "Timeless Elegance",
//       desc: "Crafted to shine through every moment",
//     },
//     {
//       left: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
//       right: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
//       title: "Modern Glam",
//       desc: "Designed for bold and confident looks",
//     },
//     {
//       left: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
//       right: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
//       title: "Everyday Sparkle",
//       desc: "Luxury you can wear daily",
//     },
//     {
//       left: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
//       right: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
//       title: "Statement Pieces",
//       desc: "Designed to stand out effortlessly",
//     },
//   ];

//   // Auto slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % items.length);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, [items.length]);

//   const nextSlide = () => {
//     setIndex((prev) => (prev + 1) % items.length);
//   };

//   const prevSlide = () => {
//     setIndex((prev) =>
//       prev === 0 ? items.length - 1 : prev - 1
//     );
//   };

//   return (
//     <section className="w-full py-20 bg-white">

//       {/* Heading */}
//       <h2 className="text-3xl md:text-5xl font-bold text-[#4A3428] text-center mb-12">
//         Curated For You
//       </h2>

//       {/* Carousel */}
//       <div className="relative w-full overflow-hidden">

//         {/* Slides */}
//         <div
//           className="flex transition-transform duration-700 ease-in-out"
//           style={{ transform: `translateX(-${index * 100}%)` }}
//         >
//           {items.map((item, i) => (
//             <div key={i} className="w-full flex-shrink-0">

//               {/* Card */}
//               <div
//                 className="w-full flex items-center justify-between gap-4 md:gap-8 
//                 px-6 md:px-20 py-20 md:py-10 
//                 rounded-xl 
//                 min-h-[140px] md:min-h-[180px]
//                 transition-all duration-300"
//               >

//                 {/* LEFT IMAGE */}
//                 <img
//                   src={item.left}
//                   className="w-16 h-16 md:w-24 md:h-24 object-cover rounded-lg"
//                   alt=""
//                 />

//                 {/* TEXT */}
//                 <div className="text-center px-3 max-w-md">
//                   <h3 className="text-base md:text-xl font-semibold text-[#4A3428]">
//                     {item.title}
//                   </h3>
//                   <p className="text-xs md:text-sm text-[#6B6375] mt-2">
//                     {item.desc}
//                   </p>
//                 </div>

//                 {/* RIGHT OVAL IMAGE */}
//                 <div className="p-1.5 bg-white rounded-full border border-[#E8D8C8] shadow-sm">
//                   <img
//                     src={item.right}
//                     className="w-60 h-60 md:w-16 md:h-28 object-cover rounded-full"
//                     alt=""
//                   />
//                 </div>

//               </div>

//             </div>
//           ))}
//         </div>

//         {/* CONTROLS */}
//         <button
//           onClick={prevSlide}
//           className="absolute left-4 top-1/2 -translate-y-1/2 
//           bg-white/70 backdrop-blur px-3 py-2 rounded-full shadow hover:scale-105 transition"
//         >
//           ‹
//         </button>

//         <button
//           onClick={nextSlide}
//           className="absolute right-4 top-1/2 -translate-y-1/2 
//           bg-white/70 backdrop-blur px-3 py-2 rounded-full shadow hover:scale-105 transition"
//         >
//           ›
//         </button>

//       </div>

//       {/* INDICATORS */}
//       <div className="flex justify-center gap-3 mt-8">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             onClick={() => setIndex(i)}
//             className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
//               index === i
//                 ? "bg-[#B76E79] w-5"
//                 : "bg-gray-300"
//             }`}
//           />
//         ))}
//       </div>

//     </section>
//   );
// };

// export default CardCarousel;






















import React, { useState, useEffect } from "react";

const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  const items = [
    {
      left: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
      right: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
      title: "Timeless Elegance",
      desc: "Crafted to shine through every moment",
    },
    {
      left: "https://images.unsplash.com/photo-1611652022419-a9419f74343d",
      right: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0",
      title: "Modern Glam",
      desc: "Designed for bold and confident looks",
    },
    {
      left: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
      right: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
      title: "Everyday Sparkle",
      desc: "Luxury you can wear daily",
    },
    {
      left: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d",
      right: "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
      title: "Statement Pieces",
      desc: "Designed to stand out effortlessly",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % items.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setIndex((prev) =>
      prev === 0 ? items.length - 1 : prev - 1
    );
  };

  return (
    <section className="w-full py-20 bg-white overflow-hidden">

      <h2 className="text-3xl md:text-5xl font-bold text-[#4A3428] text-center mb-16">
        Curated For You
      </h2>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden">

        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {items.map((item, i) => (
            <div key={i} className="w-full flex-shrink-0">

              {/* CARD */}
              <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-10 px-6 md:px-16">

                {/* LEFT IMAGE */}
                <img
                  src={item.left}
                  className="w-[220px] h-[220px] md:w-[350px] md:h-[350px] lg:w-[500px] lg:h-[500px] object-cover rounded-xl"
                  alt=""
                />

                {/* TEXT */}
                <div className="text-center max-w-lg">
                  <h3 className="text-xl md:text-3xl font-semibold text-[#4A3428]">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-lg text-[#6B6375] mt-4">
                    {item.desc}
                  </p>
                </div>

                {/* RIGHT OVAL IMAGE */}
                <div className="p-2 bg-white rounded-full border border-[#E8D8C8] shadow-md">
                  <img
                    src={item.right}
                    className="w-[180px] h-[260px] md:w-[260px] md:h-[360px] lg:w-[320px] lg:h-[520px] object-cover rounded-full"
                    alt=""
                  />
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* CONTROLS */}
        <button
          onClick={prevSlide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow"
        >
          ‹
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur px-4 py-2 rounded-full shadow"
        >
          ›
        </button>

      </div>

      {/* INDICATORS */}
      <div className="flex justify-center gap-3 mt-10">
        {items.map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all ${
              index === i ? "bg-[#B76E79] w-6" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

    </section>
  );
};

export default CardCarousel;