import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import navigation from "../../models/navigation";

const SubMenu = ({ item, showSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const location = useLocation();

  const showSubnav = (title) => {
    navigation.forEach((nav) => {
      nav.showSubNav = nav.title === title ? !nav.showSubNav : false;
    });
    setSubnav(!subnav);
  };

  const handleClick = () => {
    if (item.subNav) {
      showSubnav(item.title);
    } else {
      showSidebar();
    }
  };

  const commonClasses = `text-[#102C57] my-0.5 flex items-center justify-between px-5 py-4 list-none text-base transition-colors duration-300 cursor-pointer ${
    item.path === location.pathname ? "bg-[#FFE6E6]" : ""
  }`;

  return (
    <>
      {item.subNav ? (
        <div className={commonClasses} onClick={handleClick}>
          <div className="flex items-center">
            {item.icon}
            <span className="ml-4">{item.title}</span>
          </div>
          <div>{item.subNav && (subnav ? item.iconOpened : item.iconClosed)}</div>
        </div>
      ) : (
        <Link className={commonClasses} to={item.path} onClick={handleClick}>
          <div className="flex items-center">
            {item.icon}
            <span className="ml-4">{item.title}</span>
          </div>
        </Link>
      )}
      {item.showSubNav &&
        item.subNav.map((subItem, index) => (
          <Link
            className={`text-[#102C57] my-0.5 pl-8 py-2 flex items-center text-base transition-colors duration-300 cursor-pointer ${
              subItem.path === location.pathname ? "bg-[#FFE6E6]" : ""
            }`}
            to={subItem.path}
            key={index}
            onClick={showSidebar}
          >
            {subItem.icon}
            <span className="ml-4">{subItem.title}</span>
          </Link>
        ))}
    </>
  );
};

export default SubMenu;
