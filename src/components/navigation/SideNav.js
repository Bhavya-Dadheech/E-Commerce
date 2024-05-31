import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import navigation from "../../models/navigation";
import SubMenu from "./SubMenu";
import { IconContext } from "react-icons/lib";
import { HeartIcon, UserIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";

const SideNav = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <div className="sm:hidden flex bg-[#E1AFD1] items-center py-4 justify-between fixed w-full top-0 z-[999]">
          <div
            id="toggle"
            onClick={showSidebar}
            className="z-50 ml-4 text-[#E1AFD1] cursor-pointer flex items-center justify-center transition-transform duration-200 ease-in-out"
          >
            <div className="relative w-6 min-w-6 max-w-6">
              <span
                className={`block rounded-2xl bg-[#102C57] w-5 h-0.5 transition-transform duration-200 ease-in-out ${
                  sidebar ? "rotate-45 absolute" : "relative"
                } transform ${sidebar ? "translate-y-[5px]" : "translate-y-0"}`}
              ></span>
              <span
                className={`block rounded-2xl bg-[#102C57] w-3 h-0.5 transition-all duration-200 ease-in-out ${
                  sidebar ? "opacity-0" : "opacity-100"
                } my-1`}
              ></span>
              <span
                className={`block rounded-2xl bg-[#102C57] w-5 h-0.5 transition-transform duration-200 ease-in-out ${
                  sidebar ? "-rotate-45 absolute" : "relative"
                } transform ${sidebar ? "-translate-y-[5px]" : "translate-y-0"}`}
              ></span>
            </div>
          </div>
          <div>
            <span className="poppins-semibold text-lg text-[#102C57]">E-Commerce</span>
          </div>
          <div className="flex flex-row mr-4">
            <button type="button" className="hidden sm:block font-bold relative p-1 text-[#102C57]">
              <HeartIcon className="h-5 w-5" aria-hidden="true" />
            </button>

            <button type="button" className="hidden sm:block font-bold relative p-1 text-[#102C57]">
              <ShoppingCartIcon className="h-5 w-5" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ">
              <MenuButton type="button" className="font-bold relative p-1 text-[#102C57]">
                <UserIcon className="h-5 w-5" />
              </MenuButton>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                      >
                        Your Profile
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                      >
                        Settings
                      </Link>
                    )}
                  </MenuItem>
                  <MenuItem>
                    {({ active }) => (
                      <Link
                        href="/"
                        className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                      >
                        Sign out
                      </Link>
                    )}
                  </MenuItem>
                </MenuItems>
              </Transition>
            </Menu>
          </div>
        </div>
        <div
          className={`sm:hidden h-full bg-[#E1AFD1] w-56 flex justify-center fixed ${
            sidebar ? "left-0" : "left-[-20rem]"
          } transition-all ease-in-out delay-150 duration-300 z-[999] top-[3.8rem]`}
        >
          <div className="w-full pb-4">
            {navigation.map((item, index) => {
              return <SubMenu showSidebar={showSidebar} item={item} key={index} index={index} />;
            })}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default SideNav;
