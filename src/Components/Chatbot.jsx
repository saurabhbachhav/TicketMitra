import React from "react";

function Chatbot() {
  return (
    <div className="h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-teal-100 to-cyan-100">
      <h3 className="text-4xl font-bold mb-4 text-gray-800">
        Welcome to Our Museum
      </h3>
      <p className="text-lg mb-8 text-gray-700">
        Chat with our virtual assistant below!
      </p>
      {/* Chatbot iframe container */}
      <div className="flex justify-center items-center w-full max-w-4xl mb-8">
        <iframe
          className="w-full h-96 border-2 border-teal-300 rounded-lg shadow-lg"
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/3a27b942-2451-4c3d-8026-ea13d69d8b6d"
        />
      </div>
      <div className="text-center text-sm text-gray-600">
        <p>© 2024 Museum Booking</p>
      </div>
    </div>
  );
}

export default Chatbot;
