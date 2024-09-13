import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#E6F0FF] to-[#99CCFF]">
      <div className="bg-white p-10 rounded-lg shadow-2xl w-full max-w-md">
        <h1 className="text-3xl font-bold text-[#003366] mb-6 text-center">
          Login Page Coming Soon!
        </h1>
        <p className="text-[#000000] text-center mb-6">
          This feature is currently under development. Stay tuned for updates
          and new features coming soon!
        </p>
        <div className="text-center">
          <Link to='..\Home'>
            <button className="bg-[#0066CC] hover:bg-[#003366] text-white font-bold py-2 px-6 rounded-lg transition duration-300">
              Go Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
