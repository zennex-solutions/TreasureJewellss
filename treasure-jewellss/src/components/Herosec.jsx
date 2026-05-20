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
      <div className="carousel-column">
        <div className={`carousel-track ${direction}`}>
          {doubled.map((src, i) => (
            <img key={i} src={src} className="carousel-img" alt="" />
          ))}
        </div>
      </div>
    );
  };

  return (
    <section className="hero-section">

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1 className="hero-heading">
          Not Just Jewellery <br /> — A Whole Mood
        </h1>

        <p className="hero-subtext">
          Discover pieces that bring confidence and sparkle. <br />
          Designed to turn heads with every look.
        </p>

        <button className="hero-btn">
          Style Starts Here
        </button>
      </div>

      {/* RIGHT / BACKGROUND CAROUSEL */}
      <div className="carousel-wrapper">
        <div className="carousel-inner">
          <Column images={images1} direction="animate-up" />
          <Column images={images2} direction="animate-down" />
          <Column images={images1} direction="animate-up" />
          <Column images={images2} direction="animate-down" />
        </div>
      </div>

      {/* ANIMATIONS + CUSTOM CLASSES */}
      <style>
        {`
        /* ===== BASE ===== */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          background: #FEF4EA;
          overflow: visible;
        }

        .hero-content {
          width: 100%;
          z-index: 10;
          padding: 0 24px;
        }

        .hero-heading {
          font-size: 2.5rem;
          font-weight: bold;
          color: #4A3428;
          line-height: 1.2;
        }

        .hero-subtext {
          margin-top: 16px;
          color: #6B6375;
          max-width: 400px;
        }

        .hero-btn {
          margin-top: 24px;
          padding: 10px 24px;
          background: #4A3428;
          color: white;
          border-radius: 999px;
          transition: 0.3s;
        }

        .hero-btn:hover {
          background: #B76E79;
        }

        /* ===== CAROUSEL ===== */
        .carousel-wrapper {
          position: absolute;
          z-index: 0;
          opacity: 0.25;
        }

        .carousel-inner {
          display: flex;
          gap: 16px;
          height: 120%;
          transform: rotate(30deg);
        }

.carousel-column {
  overflow: hidden;
  height: 100%;
}

    .carousel-track {
  display: flex;
  flex-direction: column;
  gap: 12px;
  height: max-content;
}

        .carousel-img {
          width: 120px;
          height: 160px;
          object-fit: cover;
          border-radius: 12px;
        }

        /* ===== ANIMATION ===== */
      @keyframes up {
  0% {
    transform: translate3d(0, 0, 0);
  }
  100% {
    transform: translate3d(0, -50%, 0);
  }
}

@keyframes down {
  0% {
    transform: translate3d(0, -50%, 0);
  }
  100% {
    transform: translate3d(0, 0, 0);
  }
}

     .animate-up {
  animation: up 22s linear infinite;
}

.animate-down {
  animation: down 22s linear infinite;
}
        /* ===== TABLET ===== */
        @media (min-width: 768px) {
          .hero-content {
            width: 50%;
            padding: 0 80px;
          }

          .hero-heading {
            font-size: 3.5rem;
          }

          .carousel-wrapper {
            right: 0;
            left: auto;
            width: 50%;
            opacity: 1;
          }

          .carousel-inner {
            transform: rotate(28deg);
          }

          .carousel-column {
            width: 180px;
          }

          .carousel-img {
            width: 180px;
            height: 260px;
          }
        }

        /* ===== DESKTOP ===== */
        @media (min-width: 1024px) {
          .hero-heading {
            font-size: 4.5rem;
          }

          .carousel-column {
            width: 220px;
          }

          .carousel-img {
            width: 220px;
            height: 300px;
          }

          .carousel-inner {
            height: 120%;
            transform: rotate(28deg)
          }
        }
        `}
      </style>

    </section>
  );
};

export default Herosec;