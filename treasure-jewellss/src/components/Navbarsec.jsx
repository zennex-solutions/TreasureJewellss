import React, { useState, useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  FiUser,
  FiShoppingBag,
  FiMenu,
  FiX,
} from 'react-icons/fi'

const Navbarsec = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Active link styling
  const navLinkClass = ({ isActive }) =>
    `relative px-1 transition ${
      isActive
        ? 'text-[#B76E79]'
        : 'text-[#4A3428] hover:text-[#B76E79]'
    } after:absolute after:left-0 after:-bottom-1 after:h-[1.5px] after:bg-[#B76E79]
    after:transition-all ${
      isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
    }`

  return (
    <nav className="w-full fixed top-4 left-0 z-50 flex justify-center px-4">

      {/* Navbar Container */}
      <div
        className={`w-full max-w-7xl flex items-center justify-between px-6 md:px-10 py-2 
        backdrop-blur-lg border transition-all duration-300 rounded-full
        ${
          scrolled
            ? 'bg-white/60 shadow-xl border-white/30 scale-[0.98]'
            : 'bg-white/30 border-white/20'
        }`}
      >

        {/* Logo */}
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-[#4A3428]">
            Treasure Jewells
          </h1>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8 font-medium">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>
          <NavLink to="/collection" className={navLinkClass}>Collections</NavLink>
          <NavLink to="/gifting" className={navLinkClass}>Gifting</NavLink>
          <NavLink to="/best-sellers" className={navLinkClass}>Best Sellers</NavLink>
          <NavLink to="/about" className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>
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
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          className="lg:hidden absolute top-20 left-1/2 -translate-x-1/2 w-[92%] 
          backdrop-blur-xl bg-white/50 border border-white/20 
          rounded-2xl shadow-xl p-6 flex flex-col gap-5 text-[#4A3428] font-medium"
        >

          <NavLink to="/" onClick={() => setMenuOpen(false)} className={navLinkClass}>Home</NavLink>
          <NavLink to="/collections" onClick={() => setMenuOpen(false)} className={navLinkClass}>Collections</NavLink>
          <NavLink to="/gifting" onClick={() => setMenuOpen(false)} className={navLinkClass}>Gifting</NavLink>
          <NavLink to="/best-sellers" onClick={() => setMenuOpen(false)} className={navLinkClass}>Best Sellers</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={navLinkClass}>About Us</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={navLinkClass}>Contact Us</NavLink>

        </div>
      )}

    </nav>
  )
}

export default Navbarsec