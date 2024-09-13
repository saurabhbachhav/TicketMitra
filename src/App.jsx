import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Allcityname from "./Components/Allcityname";
import Display from "./Components/Display";

function App() {
  const [data, setData] = useState("");
  const [showChatbot, setShowChatbot] = useState(false); // State to toggle the chatbot

  useEffect(() => {
    axios
      .get("http://127.0.0.1:5000/api/data")
      .then((response) => {
        setData(response.data.message);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const name = [
    "NAGPUR",
    "NASHIK",
    "PUNE",
    "SATARA",
    "RAYGARH",
    "BARAMATI",
    "AMRAVATI",
    "DHULE",
    "SATANA",
    "SINGRAULI",
  ];

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <div className="h-screen bg-gray-100 overflow-y-scroll no-scrollbar relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="flex h-[calc(100%_-_4rem)]">
        {" "}
        {/* Adjust height to account for the footer */}
        <div className="w-1/6 border-solid border divide-gray-300 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 overflow-y-scroll no-scrollbar">
          {name.map((item) => (
            <Allcityname cityname={item} key={item} />
          ))}
        </div>
        <Display />
      </div>
      <Footer />

      {/* Chatbot Toggle Button */}
      <button
        onClick={toggleChatbot}
        className="fixed bottom-6 right-6 bg-teal-500 text-white p-4 rounded-full shadow-lg hover:bg-teal-600 focus:outline-none transition-all z-50"
      >
        💬
      </button>

      {/* Chatbot Interface */}
      {showChatbot && (
        <div className="fixed bottom-16 right-6 max-w-[90vw] max-h-[90vh] w-[32rem] h-[40rem] bg-teal-100 rounded-lg shadow-lg p-4 z-50 overflow-hidden">
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-gray-800">Chat with Us!</h3>
            <button
              onClick={toggleChatbot}
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              ✖️
            </button>
          </div>
          <iframe
            className="w-full h-[calc(100%-3rem)] border-none"
            allow="microphone;"
            src="https://console.dialogflow.com/api-client/demo/embedded/3a27b942-2451-4c3d-8026-ea13d69d8b6d"
          />
        </div>
      )}
    </div>
  );
}

export default App;
