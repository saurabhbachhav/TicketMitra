import React from "react";
import Chatbot from "./Chatbot";

function Booking() {
  return (
    <div className="h-screen bg-gradient-to-r from-teal-50 to-cyan-50 flex flex-col items-center justify-center">
      <div className="max-w-4xl w-full p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Book Your Museum Experience
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Have any questions or need assistance with booking? Chat with our
          virtual assistant below!
        </p>
        {/* <Chatbot /> */}
      </div>
    </div>
  );
}

export default Booking;
