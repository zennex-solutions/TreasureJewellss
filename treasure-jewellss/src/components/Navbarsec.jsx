
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from 'react-icons/fi'

const Navbarsec = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full absolute top-0 left-0 z-50 bg-transparent">

      <div className="flex items-center justify-between px-6 md:px-12 py-5">

        {/* Logo */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-[#4A3428]">
            Treasure Jewells
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 text-[#4A3428] font-medium">

          <Link
            to="/"
            className="hover:text-[#B76E79] transition"
          >
            Home
          </Link>

          <Link
            to="/collections"
            className="hover:text-[#B76E79] transition"
          >
            Collections
          </Link>

          <Link
            to="/gifting"
            className="hover:text-[#B76E79] transition"
          >
            Gifting
          </Link>

          <Link
            to="/best-sellers"
            className="hover:text-[#B76E79] transition"
          >
            Best Sellers
          </Link>

          <Link
            to="/about"
            className="hover:text-[#B76E79] transition"
          >
            About Us
          </Link>

          <Link
            to="/contact"
            className="hover:text-[#B76E79] transition"
          >
            Contact Us
          </Link>

        </div>

        {/* Right Icons */}
        <div className="flex items-center gap-5 text-[#4A3428] text-2xl">

          <Link
            to="/account"
            className="hover:text-[#B76E79] transition hidden md:block"
          >
            <FiUser />
          </Link>

          <Link
            to="/cart"
            className="hover:text-[#B76E79] transition"
          >
            <FiShoppingBag />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {
              menuOpen
                ? <FiX />
                : <FiMenu />
            }
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {
        menuOpen && (

          <div className="lg:hidden flex flex-col gap-6 px-6 py-8 bg-[#FFF8F2] text-[#4A3428] font-medium shadow-lg">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/collections"
              onClick={() => setMenuOpen(false)}
            >
              Collections
            </Link>

            <Link
              to="/gifting"
              onClick={() => setMenuOpen(false)}
            >
              Gifting
            </Link>

            <Link
              to="/best-sellers"
              onClick={() => setMenuOpen(false)}
            >
              Best Sellers
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>

          </div>

        )
      }

    </nav>
  )
}

export default Navbarsec