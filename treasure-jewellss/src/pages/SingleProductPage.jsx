// import React, { useState } from "react";
// import { useParams } from "react-router-dom";

// const productData = {
//   id: 1,
//   name: "Ethereal Diamond Necklace",
//   price: "₹4,999",
//   description:
//     "A delicate piece crafted to elevate your everyday elegance. Designed with precision and timeless beauty.",
//   images: [
//     "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
//     "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
//     "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
//   ],
// };

// const SingleProductPage = () => {
//   const { id } = useParams(); // for future dynamic routing
//   const [selectedImage, setSelectedImage] = useState(
//     productData.images[0]
//   );
//   const [quantity, setQuantity] = useState(1);

//   return (
//     <div className="bg-[#FEF4EA] min-h-screen py-16 px-6 md:px-16">
//       <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">

//         {/* LEFT - IMAGES */}
//         <div>
//           <img
//             src={selectedImage}
//             alt="product"
//             className="w-full h-[500px] object-cover rounded-xl shadow-md"
//           />

//           {/* THUMBNAILS */}
//           <div className="flex gap-4 mt-4">
//             {productData.images.map((img, i) => (
//               <img
//                 key={i}
//                 src={img}
//                 onClick={() => setSelectedImage(img)}
//                 className={`w-20 h-20 object-cover rounded-lg cursor-pointer border ${
//                   selectedImage === img
//                     ? "border-black"
//                     : "border-transparent"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* RIGHT - DETAILS */}
//         <div className="flex flex-col justify-center">
//           <h1 className="text-3xl md:text-4xl font-semibold mb-4">
//             {productData.name}
//           </h1>

//           <p className="text-2xl mb-4">{productData.price}</p>

//           <p className="text-gray-600 mb-6 leading-relaxed">
//             {productData.description}
//           </p>

//           {/* QUANTITY */}
//           <div className="flex items-center gap-4 mb-6">
//             <span className="text-sm">Quantity:</span>
//             <div className="flex border rounded">
//               <button
//                 onClick={() => setQuantity(Math.max(1, quantity - 1))}
//                 className="px-3 py-1"
//               >
//                 -
//               </button>
//               <span className="px-4 py-1">{quantity}</span>
//               <button
//                 onClick={() => setQuantity(quantity + 1)}
//                 className="px-3 py-1"
//               >
//                 +
//               </button>
//             </div>
//           </div>

//           {/* CTA BUTTONS */}
//           <div className="flex gap-4">
//             <button className="px-8 py-3 bg-black text-white rounded-full hover:bg-gray-800 transition">
//               Add to Cart
//             </button>

//             <button className="px-8 py-3 border border-black rounded-full hover:bg-black hover:text-white transition">
//               Buy Now
//             </button>
//           </div>

//           {/* EXTRA INFO */}
//           <div className="mt-10 text-sm text-gray-600 space-y-2">
//             <p>✔ Premium Quality Materials</p>
//             <p>✔ 7 Day Easy Returns</p>
//             <p>✔ Free Shipping</p>
//           </div>
//         </div>
//       </div>

//       {/* DESCRIPTION SECTION */}
//       <div className="max-w-5xl mx-auto mt-20 text-center">
//         <h2 className="text-2xl font-semibold mb-4">Product Details</h2>
//         <p className="text-gray-600 leading-relaxed">
//           This piece is handcrafted with precision and designed to reflect
//           elegance. Whether worn daily or on special occasions, it adds a
//           subtle sparkle to your personality.
//         </p>
//       </div>

//       {/* RELATED PRODUCTS */}
//       <div className="max-w-7xl mx-auto mt-20">
//         <h2 className="text-2xl font-semibold mb-8 text-center">
//           You May Also Like
//         </h2>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
//           {productData.images.map((img, i) => (
//             <div key={i} className="text-center">
//               <img
//                 src={img}
//                 className="w-full h-[250px] object-cover rounded-lg"
//               />
//               <p className="mt-3 text-sm">Elegant Piece {i + 1}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProductPage;
















import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const SingleProductPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);

  // 🔌 Fetch from backend
  useEffect(() => {
    // replace with your API
    const fetchProduct = async () => {
      const data = {
        id: 1,
        name: "Ethereal Diamond Necklace",
        price: 4999,
        description:
          "A delicate piece crafted to elevate your everyday elegance. Designed with precision and timeless beauty.",
        images: [
          "https://images.unsplash.com/photo-1601121141461-9d6647bca1ed",
          "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f",
          "https://images.unsplash.com/photo-1617038220319-276d3cfab638",
        ],
      };

      setProduct(data);
      setSelectedImage(data.images[0]);
    };

    fetchProduct();
  }, [id]);

  if (!product) return <div className="loading">Loading...</div>;

  return (
    <div className="product-page">
      <div className="product-container">

        {/* LEFT */}
        <div className="product-images">
          <img src={selectedImage} alt="product" className="main-image" />

          <div className="thumbnail-row">
            {product.images.map((img, i) => (
              <img
                key={i}
                src={img}
                onClick={() => setSelectedImage(img)}
                className={`thumbnail ${
                  selectedImage === img ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>

        {/* RIGHT */}
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>

          <p className="product-price">₹{product.price}</p>

          <p className="product-description">{product.description}</p>

          {/* Quantity */}
          <div className="quantity-box">
            <span>Quantity:</span>
            <div className="quantity-controls">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>
                +
              </button>
            </div>
          </div>

          {/* Buttons */}
          <div className="button-group">
            <button className="btn primary">Add to Cart</button>
            <button className="btn secondary">Buy Now</button>
          </div>

          {/* Info */}
          <div className="product-info">
            <p>✔ Premium Quality Materials</p>
            <p>✔ 7 Day Easy Returns</p>
            <p>✔ Free Shipping</p>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="product-extra">
        <h2>Product Details</h2>
        <p>
          This piece is handcrafted with precision and designed to reflect
          elegance. Whether worn daily or on special occasions, it adds a
          subtle sparkle to your personality.
        </p>
      </div>

      {/* Related */}
      <div className="related-products">
        <h2>You May Also Like</h2>

        <div className="related-grid">
          {product.images.map((img, i) => (
            <div key={i} className="related-card">
              <img src={img} />
              <p>Elegant Piece {i + 1}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;