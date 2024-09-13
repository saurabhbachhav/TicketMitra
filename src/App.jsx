import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Allcityname from "./Components/Allcityname";
import Display from "./Components/Display";
import { Route, Routes } from "react-router-dom";

function App() {
  const [data, setData] = useState("");

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

  return (
    <div className="h-screen bg-gray-100 overflow-y-scroll no-scrollbar">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="h-[100%] flex">
        <div className="w-1/6 border-solid border divide-gray-300 bg-gradient-to-b from-gray-200 via-gray-300 to-gray-400 overflow-y-scroll no-scrollbar">
          {name.map((item) => (
            <Allcityname cityname={item} key={item} />
          ))}
        </div>
        <Display />
      </div>
      <Footer />
    </div>
  );
}

export default App;
