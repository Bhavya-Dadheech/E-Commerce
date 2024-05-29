import React from "react";
import { Link } from "react-router-dom";

const CustomDropdownMenu = ({ subNavs }) => {
  return (
    <div className="w-max absolute rounded py-2 bg-white shadow-lg transition-all duration-300 ease-linear">
      <ul className="list-none p-0 m-0">
        {subNavs.map((item) => (
          <li
            key={item.title}
            className="py-1 px-8 ease-linear cursor-pointer transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <Link to={item.path}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDropdownMenu;
