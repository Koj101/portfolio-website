import { useState } from "react";
function Carsouel({ slides }) {
  return (
    <div>
      {slides.map((s, index) => (
        <div className="p-8">
          <img
            className="w-xs p-4 md:p-2 md:w-lg h-auto hover:w-sm md:hover:w-xl transition-all"
            key={s.id}
            src={s.img}
          ></img>
          <div className="px-2 md:px-6 ">
            <h1 class=" text-sm md:text-lg font-bold">{s.name}</h1>
            <p class=" text-sm w-xs md:text-lg md:w-md">{s.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Carsouel;
