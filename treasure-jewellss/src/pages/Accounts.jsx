import React from "react";
import {
  FiPackage,
  FiMapPin,
  FiSettings,
  FiHeadphones,
  FiLogOut,
} from "react-icons/fi";

const Account = () => {
  return (
    <div className="min-h-screen bg-[#f5efe8] px-4 sm:px-8 lg:px-12 py-10">

      {/* 🔶 Main Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-8">

        {/* 🔷 Sidebar */}
        <div className="bg-[#f3ece4] border border-[#b9a58d] rounded-3xl p-8 h-fit shadow-sm">

          {/* Profile */}
          <div className="text-center">

            <div className="w-24 h-24 rounded-full bg-[#d9c2a6] mx-auto"></div>

            <h2 className="mt-6 text-3xl font-semibold text-[#2e2a25]">
              Alex, John
            </h2>

            <p className="mt-2 text-gray-500">
              alexjohn@gmail.com
            </p>

          </div>

          {/* Menu */}
          <div className="mt-12 space-y-4">

            <button className="w-full flex items-center gap-4 border border-[#8d7760] rounded-xl px-5 py-4 bg-white">

              <FiPackage size={20} />

              <span>
                My Orders
              </span>

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4">

              <FiMapPin size={20} />

              <span>
                Your Addresses
              </span>

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4">

              <FiSettings size={20} />

              <span>
                Account Setting
              </span>

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4">

              <FiHeadphones size={20} />

              <span>
                Customer Support
              </span>

            </button>

            <button className="w-full flex items-center gap-4 px-5 py-4">

              <FiLogOut size={20} />

              <span>
                Logout
              </span>

            </button>

          </div>

        </div>

        {/* 🔶 Right Content */}
        <div>

          {/* Welcome */}
          <div>

            <p className="text-sm uppercase tracking-[3px] text-gray-500">
              Dashboard Content
            </p>

            <h1 className="text-5xl font-semibold mt-4 text-[#2e2a25]">
              Welcome back, Alex! 👋
            </h1>

            <p className="mt-4 text-gray-600">
              Manage your orders, addresses and account details
            </p>

          </div>

          {/* 🔷 Orders Section */}
          <div className="mt-10 border border-[#8d7760] rounded-3xl p-8 bg-[#f8f3ed]">

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-4">

              <h2 className="text-3xl font-semibold text-[#2e2a25]">
                My Orders
              </h2>

              <button className="border border-[#c8a76d] text-[#c8a76d] px-6 py-3 rounded-xl hover:bg-[#c8a76d] hover:text-white transition">

                View All Orders

              </button>

            </div>

            {/* Order Card */}
            <div className="mt-8 border border-[#8d7760] rounded-2xl p-8 bg-white">

              {/* Order Top */}
              <div className="flex items-center justify-between flex-wrap gap-4">

                <div>

                  <h3 className="text-2xl font-semibold">
                    Order #LX72362
                  </h3>

                  <p className="text-gray-500 mt-2">
                    Placed on 10 Nov, 2025 at 1:45 PM
                  </p>

                </div>

                <p className="text-[#c8a76d] font-medium">
                  ● On The Way
                </p>

              </div>

              {/* Timeline */}
              <div className="flex items-center justify-between gap-6 mt-10 overflow-x-auto">

                {[
                  "Placed",
                  "Packed",
                  "Shipped",
                  "Out for Delivery",
                  "Delivered",
                ].map((step, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-center min-w-[100px]"
                  >

                    <div className="w-5 h-5 rounded-full bg-[#c8a76d]"></div>

                    <p className="mt-3 text-sm text-center">
                      {step}
                    </p>

                  </div>
                ))}

              </div>

              {/* Product Images */}
              <div className="flex gap-4 mt-10 flex-wrap">

                <div className="w-24 h-24 rounded-xl bg-[#d9c2a6]"></div>

                <div className="w-24 h-24 rounded-xl bg-[#d9c2a6]"></div>

                <div className="w-24 h-24 rounded-xl bg-[#d9c2a6]"></div>

                <div className="w-24 h-24 rounded-xl bg-[#d9c2a6]"></div>

              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-10 flex-wrap">

                <button className="bg-[#c8a76d] text-white px-8 py-4 rounded-xl hover:opacity-90 transition">

                  Track Order

                </button>

                <button className="border border-[#c8a76d] text-[#c8a76d] px-8 py-4 rounded-xl hover:bg-[#c8a76d] hover:text-white transition">

                  View Details

                </button>

                <button className="border border-[#c8a76d] text-[#c8a76d] px-8 py-4 rounded-xl hover:bg-[#c8a76d] hover:text-white transition">

                  Reorder

                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Account;