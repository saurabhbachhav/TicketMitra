import React from "react";
import { Link } from "react-router-dom";

function Card(props) {
  return (
    <div className="w-[300px] rounded-md border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out m-5 bg-white">
      <img
        src={props.image}
        alt={props.name}
        className="h-[150px] w-full rounded-t-md object-cover cursor-pointer"
      />
      <div className="p-4">
        <h1 className="text-lg font-semibold text-gray-900">{props.name}</h1>
        <p className="mt-3 text-sm text-gray-700">{props.desc}</p>
        <Link to="/Musiumpage" className="block mt-4">
          <button
            type="button"
            className="w-full rounded-lg bg-teal-500 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-teal-600 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-teal-300"
          >
            Visit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Card;
