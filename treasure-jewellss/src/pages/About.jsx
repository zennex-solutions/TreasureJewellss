import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5]">

      {/* 🔶 Hero Banner */}
      <section className="w-full h-[700px] relative overflow-hidden flex items-center justify-center">

        {/* Placeholder Image */}
        <div className="absolute inset-0 bg-[#d9d9d9]"></div>

        {/* Overlay Content */}
        <div className="relative z-10 text-center px-4">

          <p className="text-sm sm:text-base mb-3">
            About Us
          </p>

          <h1 className="text-4xl sm:text-6xl font-semibold leading-tight">
            Crafting Stories, <br /> Creating Memories
          </h1>

          <p className="mt-6 text-sm sm:text-base max-w-2xl mx-auto leading-7">
            At Treasure Jewells, we believe jewelry is more than adornment—
            it’s a celebration of life’s precious moments.
          </p>

        </div>

      </section>

      {/* 🔷 Journey Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 sm:px-8 lg:px-16 py-24">

        {/* Left Content */}
        <div>

          <p className="text-sm mb-3">
            Our Journey
          </p>

          <h2 className="text-4xl font-semibold leading-tight">
            A Legacy of Elegance <br /> Since 2010
          </h2>

          <p className="mt-6 text-gray-700 text-sm leading-7">
            Founded with a vision to make luxury jewelry accessible to every woman,
            Treasure Jewells has grown from a small boutique to a beloved brand trusted by thousands.
          </p>

          <p className="mt-6 text-gray-700 text-sm leading-7">
            Our journey began with a simple belief: that every woman deserves to feel beautiful and confident.
            Today, we continue to honor that vision by creating exquisite imitation jewelry that combines traditional artistry with contemporary design.
          </p>

          <p className="mt-6 text-gray-700 text-sm leading-7">
            From bridal collections to everyday elegance, each piece tells a unique story and celebrates the moments that matter most in your life.
          </p>

        </div>

        {/* Right Image Placeholder */}
        <div className="w-full max-w-[785px] h-[691px] rounded-3xl bg-[#d9d9d9] mx-auto"></div>

      </div>

      {/* 🔶 Mission & Vision */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-4 sm:px-8 lg:px-16">

        {/* Mission */}
        <div className="bg-[#d9d9d9] rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-4">
            Our Mission
          </h3>

          <p className="text-gray-700 leading-7 text-sm">
            To empower women through beautiful, affordable jewelry
            that celebrates their unique style and individuality.
            We strive to make every woman feel extraordinary,
            confident, and cherished.
          </p>

        </div>

        {/* Vision */}
        <div className="bg-[#d9d9d9] rounded-3xl p-8">

          <h3 className="text-2xl font-semibold mb-4">
            Our Vision
          </h3>

          <p className="text-gray-700 leading-7 text-sm">
            To become the most trusted name in imitation jewelry,
            known for exceptional quality, timeless designs,
            and meaningful customer relationships that last a lifetime.
          </p>

        </div>

      </div>

      {/* 🔷 Core Values */}
      <div className="mt-24 px-4 sm:px-8 lg:px-16 pb-24 text-center">

        <p className="text-sm mb-3">
          What We Stand For
        </p>

        <h2 className="text-5xl font-semibold">
          Our Core Values
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">

          {/* Card 1 */}
          <div className="bg-[#d9d9d9] rounded-2xl p-6 text-center">

            <div className="w-14 h-14 bg-[#8b7b7b] rounded-full mx-auto mb-5"></div>

            <h3 className="font-semibold text-lg">
              Passion for Excellence
            </h3>

            <p className="text-sm text-gray-700 mt-3 leading-6">
              Every piece is crafted with dedication to perfection and attention to detail.
            </p>

          </div>

          {/* Card 2 */}
          <div className="bg-[#d9d9d9] rounded-2xl p-6 text-center">

            <div className="w-14 h-14 bg-[#8b7b7b] rounded-full mx-auto mb-5"></div>

            <h3 className="font-semibold text-lg">
              Premium Quality
            </h3>

            <p className="text-sm text-gray-700 mt-3 leading-6">
              We use only the finest materials to create jewelry that lasts.
            </p>

          </div>

          {/* Card 3 */}
          <div className="bg-[#d9d9d9] rounded-2xl p-6 text-center">

            <div className="w-14 h-14 bg-[#8b7b7b] rounded-full mx-auto mb-5"></div>

            <h3 className="font-semibold text-lg">
              Customer First
            </h3>

            <p className="text-sm text-gray-700 mt-3 leading-6">
              Your satisfaction and happiness are our top priorities.
            </p>

          </div>

          {/* Card 4 */}
          <div className="bg-[#d9d9d9] rounded-2xl p-6 text-center">

            <div className="w-14 h-14 bg-[#8b7b7b] rounded-full mx-auto mb-5"></div>

            <h3 className="font-semibold text-lg">
              Timeless Design
            </h3>

            <p className="text-sm text-gray-700 mt-3 leading-6">
              Creating traditional craftsmanship with contemporary aesthetics.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default About;