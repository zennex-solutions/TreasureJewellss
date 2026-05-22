import React from "react";

const Register = () => {
  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 pt-20">

      {/* 🔶 Left Image Section */}
      <div className="hidden lg:block h-screen">

        {/* Placeholder */}
        <div className="w-full h-full bg-[#d9c2a6]"></div>

      </div>

      {/* 🔷 Right Form Section */}
      <div className="flex items-center justify-center bg-[#f8f7f5] px-6">

        <div className="w-full max-w-md">

          <p className="text-sm text-[#8B6B2E] mb-3">
            Create Your Account
          </p>

          <h1 className="text-5xl font-semibold text-[#8B6B2E] leading-tight">
            Join The Collective
          </h1>

          <p className="mt-4 text-gray-600 leading-7">
            Join the Aura collective for exclusive early access to our seasonal artisanal drops.
          </p>

          {/* Full Name */}
          <div className="mt-10">

            <label className="text-sm uppercase tracking-[2px]">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-3 border border-gray-300 px-4 py-4 rounded-lg outline-none bg-white"
            />

          </div>

          {/* Email */}
          <div className="mt-6">

            <label className="text-sm uppercase tracking-[2px]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="name@aura.com"
              className="w-full mt-3 border border-gray-300 px-4 py-4 rounded-lg outline-none bg-white"
            />

          </div>

          {/* Password */}
          <div className="mt-6">

            <label className="text-sm uppercase tracking-[2px]">
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full mt-3 border border-gray-300 px-4 py-4 rounded-lg outline-none bg-white"
            />

          </div>

          {/* Checkbox */}
          <div className="flex items-center gap-3 mt-6">

            <input type="checkbox" />

            <p className="text-sm text-gray-600">
              I agree to the Privacy Policy.
            </p>

          </div>

          {/* Button */}
          <button className="w-full bg-[#C9A14A] text-white py-4 rounded-xl mt-8 hover:opacity-90 transition">

            JOIN THE COLLECTIVE

          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-10">

            <div className="flex-1 h-[1px] bg-gray-300"></div>

            <p className="text-sm text-gray-500">
              OR JOIN WITH
            </p>

            <div className="flex-1 h-[1px] bg-gray-300"></div>

          </div>

          {/* Social Buttons */}
          <div className="grid grid-cols-2 gap-4">

            <button className="border border-gray-300 py-3 rounded-lg">
              Google
            </button>

            <button className="border border-gray-300 py-3 rounded-lg">
              Facebook
            </button>

          </div>

          {/* Footer */}
          <p className="text-center mt-10 text-gray-600">

            Already have an account?

            <span className="text-[#8B6B2E] font-medium cursor-pointer ml-2">
              Log In
            </span>

          </p>

        </div>

      </div>

    </div>
  );
};

export default Register;