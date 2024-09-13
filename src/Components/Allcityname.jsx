import React from "react";
import { Link } from "react-router-dom";

function Allcityname(props) {
  return (
    <div className="p-2">
      <Link to="/Displaycards">
        <button
          type="button"
          className="border-2 border-[#003366] bg-[#0066CC] text-sm font-semibold text-white shadow-md hover:bg-[#003366] hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none w-full h-14 rounded-md mb-2"
        >
          {props.cityname}
        </button>
      </Link>
    </div>
  );
}

export default Allcityname;
