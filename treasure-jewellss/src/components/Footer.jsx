import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0f0f0f] text-gray-300 px-6 md:px-16 pt-12 pb-6">
      
      {/* 🔶 Top Section */}
      <div className="grid md:grid-cols-4 gap-10 mb-10">
        
        {/* Brand */}
        <div>
          <h2 className="text-white text-xl font-semibold mb-4">
            Treasure Jewells
          </h2>
          <p className="text-sm leading-6">
            Timeless elegance crafted for modern luxury. Discover jewellery that
            defines your story.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h3 className="text-white mb-4">Shop</h3>
          <ul className="space-y-2 text-sm">
            <li>Necklaces</li>
            <li>Rings</li>
            <li>Earrings</li>
            <li>Bracelets</li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="text-white mb-4">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact</li>
            <li>Privacy Policy</li>
            <li>Terms & Conditions</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white mb-4">Contact</h3>
          <p className="text-sm">Mandvi, Gujarat, India</p>
          <p className="text-sm">+91 98765 43210</p>
          <p className="text-sm">support@treasurejewells.com</p>

          {/* Social Icons */}
          <div className="flex gap-4 mt-4">
            <FaInstagram className="cursor-pointer hover:text-white transition" />
            <FaFacebookF className="cursor-pointer hover:text-white transition" />
            <FaTwitter className="cursor-pointer hover:text-white transition" />
          </div>
        </div>
      </div>

      {/* 🔻 Bottom Section */}
      <div className="border-t border-gray-700 pt-4 text-center text-sm">
        © {new Date().getFullYear()} Treasure Jewells. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;