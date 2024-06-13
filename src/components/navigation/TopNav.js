import React, { Fragment, useState } from "react";
import { Disclosure, Menu, MenuButton, MenuItem, MenuItems, Transition } from "@headlessui/react";
import { Bars3Icon, HeartIcon, UserIcon, XMarkIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";
import navigation from "../../models/navigation";
import { Link, useLocation } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import CustomDropdownMenu from "../ui/CustomDropdownMenu";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";

export default function TopNav({ menuIconClick }) {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);

  const [openMenu, setOpenMenu] = useState(false);
  const location = useLocation();
  const [isDropdownVisible, setDropdownVisible] = useState({ title: "", show: false });

  const handleMouseEnter = (itemTitle) => {
    setDropdownVisible({ title: itemTitle, show: true });
  };

  const handleMouseLeave = () => {
    setDropdownVisible({ title: "", show: false });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <>
      <Disclosure as="nav" className="hidden sm:block bg-[#E1AFD1] fixed w-full z-[999]">
        {({ open }) => (
          <>
            <div className="mx-auto px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button */}
                  <button
                    onClick={() => {
                      menuIconClick();
                      setOpenMenu(!openMenu);
                    }}
                    className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {openMenu ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <div>
                  <span className="poppins-semibold text-xl text-[#102C57]">E-Commerce</span>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch">
                  <div className="hidden sm:ml-6 sm:inline-flex items-center">
                    <div className="flex">
                      {navigation.map((item) => {
                        if (item.subNav) {
                          return (
                            <div
                              key={item.title}
                              className="relative"
                              onMouseEnter={() => handleMouseEnter(item.title)}
                              onMouseLeave={handleMouseLeave}
                            >
                              <div className="hover:cursor-pointer py-4 mx-4 font-medium linkTransform">
                                <span
                                  className={classNames(
                                    item.path === location.pathname
                                      ? "border-[#102C57] text-[#102C57]"
                                      : "border-transparent text-[#102C57] hover:border-[#102C57]"
                                  )}
                                >
                                  {item.title}
                                </span>
                              </div>
                              {isDropdownVisible.show && isDropdownVisible.title === item.title && (
                                <CustomDropdownMenu subNavs={item.subNav} />
                              )}
                            </div>
                          );
                        } else {
                          return (
                            <div key={item.title} className="relative py-4 hover:cursor-pointer">
                              <div className="mx-4 linkTransform">
                                <Link to={item.path} aria-current={item.current ? "page" : undefined}>
                                  <span
                                    className={classNames(
                                      "font-medium",
                                      item.path === location.pathname
                                        ? "border-[#102C57] text-[#102C57]"
                                        : "border-transparent text-[#102C57] hover:border-[#102C57]"
                                    )}
                                  >
                                    {item.title}
                                  </span>
                                </Link>
                              </div>
                            </div>
                          );
                        }
                      })}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto gap-4 sm:pr-0">
                  <Tooltip title="Your Wishlist">
                    <button type="button" className="font-bold relative p-1 text-[#102C57] tooltip hidden sm:block">
                      <Badge badgeContent={wishlist.length} color="primary">
                        <Link to="/wishlist">
                          <HeartIcon
                            className="hover:scale-110 transform transition-transform duration-200 h-6 w-6"
                            aria-hidden="true"
                          />
                        </Link>
                      </Badge>
                      {/* <span className="tooltiptext">Your Wishlist</span> */}
                    </button>
                  </Tooltip>
                  <Tooltip title="Cart">
                    <button type="button" className="hidden sm:block font-bold relative p-1 text-[#102C57]">
                      <Badge badgeContent={cart.length} color="primary">
                        <Link to="/cart">
                          <ShoppingCartIcon className="hover:scale-110 transform transition-transform duration-200 h-6 w-6" />
                        </Link>
                      </Badge>
                    </button>
                  </Tooltip>
                  {/* Profile dropdown */}
                  <Menu as="div" className="relative">
                    <div>
                      <Tooltip title="Profile">
                        <MenuButton className="relative flex text-[#102C57]">
                          <UserIcon className="hover:scale-110 transform transition-transform duration-200 h-6 w-6" />
                        </MenuButton>
                      </Tooltip>
                    </div>
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
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Your Profile
                            </Link>
                          )}
                        </MenuItem>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Settings
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href="/"
                              className={classNames(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              Sign out
                            </Link>
                          )}
                        </Menu.Item>
                      </MenuItems>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </>
        )}
      </Disclosure>
    </>
  );
}
