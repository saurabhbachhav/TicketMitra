import React from "react";
import { Link } from "react-router-dom";

function Allcityname(props) {
  return (
    <div className="p-2">
      <Link to="/">
        <button
          type="button"
          className="border-2 border-teal-600 bg-teal-500 text-sm font-semibold text-white shadow-md hover:bg-teal-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none w-full h-14 rounded-md mb-2"
        >
          {props.cityname}
        </button>
      </Link>
    </div>
  );
}

export default Allcityname;
