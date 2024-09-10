import React, { useState } from "react";
import { Musiumimg } from "../assets/assets";
import { Link } from "react-router-dom";
function Musiumpage() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === Musiumimg.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? Musiumimg.length - 1 : current - 1);
  };

  return (
    <div className="h-screen">
      <div className="flex justify-evenly items-center p-5  bg-slate-900 ">
        <div
          className="left_arrow  bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer"
          onClick={prevSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </div>
        <div className="image">
          {Musiumimg.map(
            (item, index) =>
              current === index && (
                <div className="flex max-w-96 min-w-96 justify-center  ">
                  {" "}
                  <img
                    className="rounded-2xl z-0 hover:z-50"
                    src={item}
                    alt="image"
                  />
                </div>
              )
          )}
        </div>
        <div
          className="right_arrow bg-gray-200 hover:bg-gray-400 hover:text-white rounded-lg cursor-pointer"
          onClick={nextSlide}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi iusto ex,
        ducimus nostrum eius maxime? Veritatis cupiditate reiciendis cum dolore
        beatae tempora suscipit, rem voluptas tempore facilis magnam a minus
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum,
        similique nam voluptatibus architecto voluptates corporis officia
        accusamus at cumque animi consequuntur quia dolorum. Id reprehenderit
        repellendus eum a, quos expedita. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Voluptatum corrupti, eligendi voluptas quidem pariatur
        nam tempore nobis vitae soluta. Omnis ducimus at, sapiente eligendi
        fugiat libero culpa earum optio ex. Lorem ipsum dolor sit amet
        consectetur, adipisicing elit. Saepe optio veniam earum perferendis
        sequi odit ullam? Omnis, hic voluptatibus quam repudiandae, dolorum cum
        aperiam autem illum tenetur odit, labore sequi? Lorem, ipsum dolor sit
        amet consectetur adipisicing elit. Nam soluta cupiditate, adipisci,
        officia, magnam autem at suscipit quam ratione ipsam nihil. Beatae sint
        dolores doloremque illum quo facere! Fugiat, corrupti. lorem Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Unde voluptates officiis
        explicabo tempora dolorem quasi qui, repellat ullam cupiditate ea sed
        sit perferendis, sunt nulla totam error itaque et delectus. Lorem ipsum
        dolor, sit amet consectetur adipisicing elit. Ex ratione qui, aperiam,
        suscipit similique omnis deleniti ipsam veniam, laborum est optio totam
        incidunt ducimus facilis vitae nam non magni labore. Lorem ipsum dolor
        sit amet consectetur adipisicing elit. Labore corrupti eveniet eum nulla
        sit quam quis, non voluptate fugiat facilis, iste corporis ullam eius
        aperiam! Fugiat quos{" "}
      </h1>
      <div className="flex justify-center">
        <button
          type="button"
          className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 "
        >
          <Link
            to="/booking"
            className="block w-full h-full transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-slate-700 duration-300 ..."
          >
            Book Ticket
          </Link>
        </button>
      </div>
    </div>
  );
}

export default Musiumpage;
