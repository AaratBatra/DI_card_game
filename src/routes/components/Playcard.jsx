import React from "react";

const Playcard = ({ card }) => {
  return (
    <div style={{
        display: "flex !important",
        alignItems: "center !important",
        justifyContent: "center",
        position: "absolute",
        zIndex: "2",
        top: "8rem",
    }} className="max-w-sm max-h-lg lg:w-[300px] bg-white border border-gray-200 rounded-lg shadow dark:bg-yellow-300 dark:border-gray-700">
      <a href="#">
        <img
          className="rounded-t-lg block w-[250px] h-[250px] object-cover mx-auto"
          src={`/assets/cardSVGs/${card.category}${card.class}.svg`}
          alt=""
        />
      </a>
      <div className="p-5">
        <h1 className="mb-2 text-4xl text-center font-bold tracking-tight text-gray-900 dark:text-red-600">
          {card.title}
        </h1>
      </div>
    </div>
  );
};

export default Playcard;
