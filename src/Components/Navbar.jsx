import React from "react";
import ChatBots from "../assets/ChatBots.png";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-6">
            <img
              src={ChatBots}
              alt="ChatBots Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-3xl font-bold hover:text-teal-300">
              TicketMitra
            </span>
          </div>

          {/* Links */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-teal-300 flex items-center"
              >
                Home
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-teal-300 flex items-center"
              >
                About
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-lg font-medium hover:text-teal-300 flex items-center"
              >
                Contact
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="ml-2 h-4 w-4"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </a>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="bg-transparent border border-white px-4 py-2 rounded-md text-white hover:bg-teal-300 transition">
              Sign In
            </button>
            <button className="bg-teal-300 px-4 py-2 rounded-md text-white hover:bg-teal-400 transition">
              Log In
            </button>
          </div>

          {/* User Icon */}
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-white">
            <img
              src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTAxL3JtNjA5LXNvbGlkaWNvbi13LTAwMi1wLnBuZw.png"
              alt="User Avatar"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
