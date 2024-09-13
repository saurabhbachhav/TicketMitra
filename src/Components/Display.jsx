import React from "react";
import Displaycards from "./Displaycards";
import Musiumpage from "./Musiumpage";
import Booking from "./Booking";
import { Route, Routes } from "react-router-dom";

function Display() {
  return (
    <div className="w-5/6 bg-gradient-to-r from-blue-50 via-teal-50 to-cyan-50 overflow-y-auto no-scrollbar rounded-lg shadow-md">
      <div className="h-fit p-4">
        <Routes>
          <Route path="/" element={<Displaycards />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/Musiumpage" element={<Musiumpage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Display;
