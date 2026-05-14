import React from 'react'

const Navbarsec = () => {
  return (
     <nav className="flex justify-between items-center px-10 py-6 bg-[#FFF8F2]">

      <h1 className="text-3xl font-bold text-[#4A3428]">
        Treasure Jewells
      </h1>

      <ul className="flex gap-8 text-[#4A3428] font-medium">

        <li className="cursor-pointer hover:text-[#B76E79]">
          Home
        </li>

        <li className="cursor-pointer hover:text-[#B76E79]">
          Collections
        </li>

        <li className="cursor-pointer hover:text-[#B76E79]">
          Gifting
        </li>

        <li className="cursor-pointer hover:text-[#B76E79]">
          Best Sellers
        </li>

        <li className="cursor-pointer hover:text-[#B76E79]">
          About Us
        </li>

        <li className="cursor-pointer hover:text-[#B76E79]">
          Contact Us
        </li>

      </ul>

    </nav>
  )
}

export default Navbarsec