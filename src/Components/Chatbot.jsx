import React from "react";

function Chatbot() {
  return (
    <div className="fixed bottom-5 right-5 w-80 h-96 bg-gradient-to-r from-[#E6F0FF] to-[#99CCFF] p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold text-[#003366] mb-2">Chatbot</h3>
      <iframe
        className="w-full h-72 border-2 border-[#0066CC] rounded-lg shadow-lg"
        allow="microphone;"
        src="https://console.dialogflow.com/api-client/demo/embedded/3a27b942-2451-4c3d-8026-ea13d69d8b6d"
      />
      <div className="text-sm text-center mt-2 text-[#003366]">
        <p>© 2024 Museum Booking</p>
      </div>
    </div>
  );
}

export default Chatbot;
