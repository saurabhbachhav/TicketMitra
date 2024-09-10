import React, { useState } from "react";

function Chatbot() {
  return (
    <div>
      <div className="h-screen flex flex-col items-center justify-center p-4 m-0 bg-amber-200">
        <h3 className="text-4xl font-bold mb-4">Welcome to Our Museum</h3>
        <p className="text-lg mb-8">Chat with our virtual assistant below!</p>
        {/* Chatbot iframe container */}
        <div className="flex justify-center items-center w-full max-w-4xl mb-8">
          <iframe
            className="w-full h-96 border-none"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/3a27b942-2451-4c3d-8026-ea13d69d8b6d"
          />
        </div>
        <div className="footer text-center text-sm text-gray-600">
          <p>© 2024 Museum Booking</p>
        </div>
      </div>
    </div>
  );
}

export default Chatbot;
