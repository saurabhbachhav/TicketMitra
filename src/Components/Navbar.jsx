import React from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import ChatBots from "../assets/ChatBots.png";

function Navbar() {
  return (
    <div className="bg-gradient-to-r from-[#003366] to-[#0066CC] text-[#FFFFFF] shadow-lg">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-6">
            <img
              src={ChatBots}
              alt="ChatBots Logo"
              className="h-12 w-12 rounded-full"
            />
            <span className="text-3xl font-bold hover:text-[#99CCFF]">
              TicketMitra
            </span>
          </div>

          {/* Links */}
          <ul className="hidden lg:flex space-x-8">
            <li>
              <Link
                to="/Home"
                className="text-lg font-medium hover:text-[#99CCFF] flex items-center"
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
              </Link>
            </li>
            <li>
              <Link
                to="/AboutUs"
                className="text-lg font-medium hover:text-[#99CCFF] flex items-center"
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
              </Link>
            </li>
            <li>
              <Link
                to="/Contact"
                className="text-lg font-medium hover:text-[#99CCFF] flex items-center"
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
              </Link>
            </li>
          </ul>

          {/* Action Buttons */}
          <div className="hidden lg:flex space-x-4">
            <button className="bg-transparent border border-[#FFFFFF] px-4 py-2 rounded-md text-[#FFFFFF] hover:bg-[#99CCFF] transition">
              Sign In
            </button>
            <button className="bg-[#0066CC] px-4 py-2 rounded-md text-white hover:bg-[#004080] transition">
              Log In
            </button>
          </div>

          {/* User Icon */}
          <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#FFFFFF]">
            <img
              src="https://cdn-icons-png.freepik.com/512/4645/4645949.png"
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
