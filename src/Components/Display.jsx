import React from "react";
import Displaycards from "./Displaycards";
import Musiumpage from "./Musiumpage";
import Booking from "./Booking";
import { Route, Routes } from "react-router-dom";
import Contact from "./Contact";
import AboutUs from "./AboutUs";
import Home from "./Home";
import SignIn from "./SignIn";
import Login from "./Login";

function Display() {
  return (
    <div className="w-5/6 bg-gradient-to-r from-[#E6F0FF] via-[#99CCFF] to-[#0066CC] overflow-y-auto no-scrollbar rounded-lg shadow-md relative">
      <div className="h-fit p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Displaycards" element={<Displaycards />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/Musiumpage" element={<Musiumpage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/AboutUs" element={<AboutUs />} />
        </Routes>
      </div>
    </div>
  );
}

export default Display;
