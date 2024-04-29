import React from "react";
import { Link } from "react-router-dom";
const Card = ({ title, para, abutton, cardList, whereTo }) => {
  return (
    <div className="max-w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-[rgba(28,28,28,0.8)] backdrop-blur-md dark:border-gray-700 mx-auto mt-20">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {para ? para : ""}
      </p>
      {cardList
        ? cardList.length && (
            <ul className="list-disc">
              {cardList.map((val, index) => {
                return (
                  <li key={index} className="mb-2 font-normal text-red-600">
                    {val}
                  </li>
                );
              })}
            </ul>
          )
        : ""}
      {abutton && (
        <Link to={whereTo ? `${whereTo}` : `/play`} className="btn-di">
          {abutton}
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Link>
      )}
    </div>
  );
};

export default Card;
