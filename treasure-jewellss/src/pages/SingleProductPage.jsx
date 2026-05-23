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