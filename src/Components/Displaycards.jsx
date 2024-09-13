import React from "react";
import { cardsData } from "../assets/assets";
import Card from "./Card";

function Displaycards() {
  return (
    <div className="flex overflow-x-auto no-scrollbar space-x-4 p-4 bg-gradient-to-r from-[#E6F0FF] via-[#99CCFF] to-[#0066CC] rounded-lg shadow-lg">
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
