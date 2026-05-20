import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#faf7f5] min-h-screen">

      {/* 🔶 Banner */}
      <div className="h-[220px] sm:h-[300px] w-full relative">
        <img
          src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
          alt="contact banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-2xl sm:text-4xl font-semibold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* 🔷 Info + Form Section */}
      <div className="px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 lg:grid-cols-2 gap-10">

        {/* 🔹 Store Details */}
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold mb-2">Visit Our Store</h2>
            <p className="text-gray-600">
              123 Fashion Street, Mumbai, India
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Call Us</h2>
            <p className="text-gray-600">+91 98765 43210</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Email Us</h2>
            <p className="text-gray-600">support@yourbrand.com</p>
          </div>
        </div>

        {/* 🔹 Contact Form */}
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow">

          <h2 className="text-xl font-semibold mb-6">
            Send a Message
          </h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-black"
            />

            <textarea
              rows="4"
              placeholder="Your Message"
              className="w-full border border-gray-300 p-3 rounded-lg outline-none focus:border-black"
            />

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>
        </div>
      </div>

      {/* 🔷 Maps Section */}
      <div className="px-4 sm:px-6 lg:px-10 pb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6">
          Our Locations
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <iframe
            title="map1"
            src="https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] rounded-xl border-0"
          />

          <iframe
            title="map2"
            src="https://maps.google.com/maps?q=delhi&t=&z=13&ie=UTF8&iwloc=&output=embed"
            className="w-full h-[300px] rounded-xl border-0"
          />

        </div>
      </div>

      {/* 🔷 Store Details Bottom */}
      <div className="px-4 sm:px-6 lg:px-10 pb-12">
        <div className="bg-white rounded-2xl p-6 sm:p-8 shadow text-center">
          <h2 className="text-xl font-semibold mb-4">
            Store Timings
          </h2>

          <p className="text-gray-600">
            Monday - Saturday: 10:00 AM – 8:00 PM
          </p>
          <p className="text-gray-600">
            Sunday: Closed
          </p>
        </div>
      </div>

    </div>
  );
};

export default Contact;