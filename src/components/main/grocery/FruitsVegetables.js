import React from "react";
import data from "../../../models/FruitsAndVegetables.json";
import NoImage from "../../../assets/images/No_Image_Available.jpg";
import { MdAddShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { setCart, addWishList, removeWishList } from "../../../redux";
import { HiHeart } from "react-icons/hi2";
import apples from "../../../assets/images/apples.jpg";
import { useSnackbar } from "notistack";

export default function FruitsVegetables() {
  const { enqueueSnackbar } = useSnackbar();

  const formatPrice = (price) => {
    return price.toFixed(2); // Ensures the price has two decimal places
  };

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);

  const handleWishList = (item) => {
    if (isItemInWishlist(item)) {
      dispatch(removeWishList(item));
      enqueueSnackbar("Item removed from wishlist!", { variant: "default" });
    } else {
      dispatch(addWishList(item));
      enqueueSnackbar("Item saved to wishlist!", { variant: "success" });
    }
  };

  const addToCart = (item) => {
    dispatch(setCart(item));
    enqueueSnackbar("Item added to cart!", { variant: "success" });
  };

  const isItemInWishlist = (item) => {
    return wishlist.some((wishlistItem) => wishlistItem.id === item.id);
  };

  const isItemInCart = (item) => {
    let check = cart.some((cartItem) => cartItem.item.id === item.id);
    return check;
  };

  return (
    <div className="flex flex-col w-full gap-y-10 justify-center">
      <span className="text-xl sm:text-3xl self-center text-[#102C57] font-medium">Fruits & Vegetables</span>
      {/* Iterate over fruits */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 sm:gap-x-5 gap-y-5 sm:gap-y-10">
        {data.fruits.map((item) => (
          <div key={item.id} className="flex flex-col border border-[#102C57] shadow rounded">
            <div className="relative w-full h-52 sm:h-72">
              <div className="relative w-full h-52 sm:h-72">
                <img
                  src={apples}
                  loading="lazy"
                  alt={item.name}
                  className="w-full h-full object-cover border-0 rounded-t"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop in case default image also fails
                    e.target.src = NoImage;
                  }}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* Backdrop */}
                  <div className="absolute inset-0 bg-slate-400 opacity-50"></div>
                  {/* Icons */}
                  <div className="relative z-10 flex gap-5">
                    <HiHeart
                      className={`p-2 w-12 h-12 transform transition-transform duration-300 ${
                        isItemInWishlist(item) ? "text-[#E1AFD1] scale-110" : "text-white"
                      } hover:shadow-md hover:bg-[#102C57] hover:shadow-[#7469B6] rounded-full hover:scale-125 hover:cursor-pointer`}
                      onClick={() => {
                        handleWishList(item);
                      }}
                    />
                    {isItemInCart(item) ? (
                      <MdOutlineShoppingCartCheckout className="p-2 w-12 h-12 text-white rounded-full hover:shadow-md hover:bg-[#102C57] hover:shadow-[#7469B6]  hover:cursor-pointer transform transition-transform duration-300 hover:scale-125" />
                    ) : (
                      <MdAddShoppingCart
                        className="p-2 w-12 h-12 text-white rounded-full hover:shadow-md hover:bg-[#102C57] hover:shadow-[#7469B6]  hover:cursor-pointer transform transition-transform duration-300 hover:scale-125"
                        onClick={() => {
                          addToCart(item);
                        }}
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[#7469B6] poppins-medium text-lg mx-2">{item.name}</span>
            <span className="poppins-regular text-lg mx-2">₹ {formatPrice(item.price)} / kg</span>
          </div>
        ))}
      </div>
      {/* Iterate over vegetables */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 sm:gap-x-5 gap-y-5 sm:gap-y-10">
        {data.vegetables.map((item) => (
          <div key={item.id} className="flex flex-col border border-[#102C57] shadow rounded">
            <div className="relative w-full h-52 sm:h-72">
              <div className="relative w-full h-52 sm:h-72">
                <img
                  src={apples}
                  loading="lazy"
                  alt={item.name}
                  className="w-full h-full object-cover border-0 rounded-t"
                  onError={(e) => {
                    e.target.onerror = null; // Prevents infinite loop in case default image also fails
                    e.target.src = NoImage;
                  }}
                />
                <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  {/* Backdrop */}
                  <div className="absolute inset-0 bg-slate-400 opacity-50"></div>
                  {/* Icons */}
                  <div className="relative z-10 flex gap-5">
                    <HiHeart
                      className={`p-2 w-12 h-12 transform transition-transform duration-300 ${
                        isItemInWishlist(item) ? "text-[#E1AFD1] scale-110" : "text-white"
                      } hover:shadow-md hover:bg-[#102C57] hover:shadow-[#7469B6] rounded-full hover:scale-125 hover:cursor-pointer`}
                      onClick={() => {
                        handleWishList(item);
                      }}
                    />
                    <MdAddShoppingCart
                      className="p-2 w-12 h-12 text-white rounded-full hover:shadow-md hover:bg-[#102C57] hover:shadow-[#7469B6]  hover:cursor-pointer transform transition-transform duration-300 hover:scale-125"
                      onClick={() => {
                        addToCart(item);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <span className="text-[#7469B6] poppins-medium text-lg mx-2">{item.name}</span>
            <span className="poppins-regular text-lg mx-2">₹ {formatPrice(item.price)} / kg</span>
          </div>
        ))}
      </div>
    </div>
  );
}
