import React from "react";

function Footer() {
  return (
    <div className="bg-gradient-to-r from-blue-50 via-teal-50 to-teal-100 py-8 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {/* Logo and Brand */}
          <div className="w-auto">
            <a href="#">
              <div className="inline-flex items-center">
                <div className="h-10 w-10 bg-gray-800 text-white rounded-full flex items-center justify-center">
                  {/* Placeholder for Logo */}
                  <span className="text-white font-bold">S</span>
                </div>
                <span className="ml-4 text-lg font-bold text-gray-800">
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
                  className="text-gray-800 hover:text-teal-600 transition"
                  href="#"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-teal-600 transition"
                  href="#"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-teal-600 transition"
                  href="#"
                >
                  Return Policy
                </a>
              </li>
              <li>
                <a
                  className="text-gray-800 hover:text-teal-600 transition"
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
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-teal-500 transition"
              >
                {/* Facebook Icon Placeholder */}F
              </a>
              <a
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-teal-500 transition"
              >
                {/* Twitter Icon Placeholder */}T
              </a>
              <a
                href="#"
                className="h-8 w-8 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-teal-500 transition"
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
