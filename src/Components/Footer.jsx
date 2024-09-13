import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-[#E6F0FF] via-[#99CCFF] to-[#0066CC] py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Brand */}
          <div className="w-auto">
            <a href="#">
              <div className="inline-flex items-center">
                <div className="h-10 w-10 bg-[#003366] text-white rounded-full flex items-center justify-center">
                  {/* Placeholder for Logo */}
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="ml-4 text-lg font-bold text-[#003366]">
                  Sanskruti
                </span>
              </div>
            </a>
          </div>

          {/* Links */}
          <div className="w-auto">
            <ul className="flex space-x-6">
              <li>
                <a
                  className="text-[#003366] hover:text-[#0066CC] transition"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-[#003366] hover:text-[#0066CC] transition"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-[#003366] hover:text-[#0066CC] transition"
                  href="#"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  className="text-[#003366] hover:text-[#0066CC] transition"
                  href="#"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Icons */}
          <div className="w-auto">
            <div className="flex space-x-4">
              <a
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-[#003366] text-white hover:bg-[#0066CC] transition"
              >
                {/* Facebook Icon Placeholder */}F
              </a>
              <a
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-[#003366] text-white hover:bg-[#0066CC] transition"
              >
                {/* Twitter Icon Placeholder */}T
              </a>
              <a
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-[#003366] text-white hover:bg-[#0066CC] transition"
              >
                {/* Instagram Icon Placeholder */}I
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
