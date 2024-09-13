import React from "react";
import { cardsData } from "../assets/assets";
import Card from "./Card";

function Displaycards() {
  return (
    <div className="flex overflow-x-auto no-scrollbar space-x-4 p-4 bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 rounded-lg shadow-lg">
      {cardsData.map((item, index) => (
        <Card
          key={index}
          image={item.image}
          name={item.name}
          desc={item.desc}
        />
      ))}
    </div>
  );
}

export default Displaycards;
