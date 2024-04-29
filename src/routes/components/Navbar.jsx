import React from "react";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="w-full h-24 flex justify-between items-center bg-[#1c1c1b] ring-1 ring-slate-400/50 border-e-stone-200">
      <Link to="/"><img
        src={import.meta.env.BASE_URL + "assets/di_logo_circle.png"}
        alt="di_logo"
        className="block object-cover w-20 h-20 m-2"
      /></Link>
      
      <ul className="flex list-none justify-center items-center mr-3">
        <li className="mx-2 text-yellow-500">
          <NavLink to={"/play"} 
          className={({ isActive, isPending })=>
                      isActive ? "text-lg font-bold underLine" : isPending ? "text-lg font-bold" : "text-lg font-bold hoverline"
                    } >
            Play
          </NavLink>
        </li>
        <li className="mx-2 text-yellow-500">
          <NavLink to={"/about"} className={({ isActive, isPending })=>
                      isActive ? "text-lg font-bold underLine" : isPending ? "text-lg font-bold" : "text-lg font-bold hoverline"
                    } >
            About
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
