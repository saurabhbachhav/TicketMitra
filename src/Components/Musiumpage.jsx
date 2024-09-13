import React, { useState } from "react";
import { Musiumimg } from "../assets/assets";
import { Link } from "react-router-dom";

function Musiumpage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === Musiumimg.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? Musiumimg.length - 1 : prev - 1));
  };

  return (
    <div className="h-screen bg-gradient-to-r from-[#E6F0FF] via-[#99CCFF] to-[#0066CC] overflow-auto">
      <div className="flex justify-between items-center p-5 bg-gradient-to-r from-[#003366] via-[#0066CC] to-[#003366] rounded-lg shadow-lg">
        <button
          className="bg-white hover:bg-[#E6F0FF] rounded-full p-2 text-[#003366]"
          onClick={prevSlide}
          aria-label="Previous Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        <div className="flex-1 flex justify-center items-center">
          {Musiumimg.map(
            (item, index) =>
              current === index && (
                <img
                  key={index}
                  className="w-full max-w-md h-auto rounded-2xl object-cover shadow-xl"
                  src={item}
                  alt={`Slide ${index}`}
                />
              )
          )}
        </div>

        <button
          className="bg-white hover:bg-[#E6F0FF] rounded-full p-2 text-[#003366]"
          onClick={nextSlide}
          aria-label="Next Slide"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>

      <div className="p-5 text-[#000000]">
        <h1 className="text-3xl font-semibold mb-4 leading-relaxed text-[#003366]">
          Welcome to the Grand Museum of Art and Culture
        </h1>

        <p className="text-base leading-relaxed text-[#333333]">
          Step into a world of creativity and history where art meets culture.
          Our museum offers a vast collection of exhibits that reflect the
          beauty of human expression across centuries. Be captivated by rare
          artifacts and immerse yourself in the stories behind them.
        </p>

        <div className="flex justify-center mt-6">
          <Link to="/booking">
            <button
              type="button"
              className="rounded-md bg-[#0066CC] px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#003366] transition-transform duration-300 ease-in-out transform hover:scale-105"
            >
              Reserve Your Tickets
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Musiumpage;
