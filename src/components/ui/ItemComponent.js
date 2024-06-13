import React from "react";
import NoImage from "../../assets/images/No_Image_Available.jpg";
import { HiHeart, HiOutlineHeart } from "react-icons/hi2";
import { MdAddShoppingCart, MdOutlineShoppingCartCheckout } from "react-icons/md";
import Tooltip from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";

export default function ItemComponent({
  item,
  isItemInWishlist,
  handleWishList,
  isItemInCart,
  addToCart,
  formatPrice
}) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col shadow-md hover:shadow-xl rounded hover:scale-105 transition duration-300">
      <div className="relative w-full h-52 sm:h-72">
        <div className="relative w-full h-52 sm:h-72">
          <img
            src={item.image}
            loading="lazy"
            alt={item.name}
            className="w-full h-full rounded object-cover"
            onError={(e) => {
              e.target.onerror = null; // Prevents infinite loop in case default image also fails
              e.target.src = NoImage;
            }}
          />
          <div className="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-slate-400 opacity-60"></div>
            {/* Icons */}
            <div className="relative z-10 flex gap-5">
              {isItemInWishlist(item) ? (
                <Tooltip title="Remove From Wishlist">
                  <button>
                    <HiHeart
                      className={`p-2 w-12 h-12 transform transition-transform duration-300 text-[#102C57] bg-white rounded-full 
                hover:scale-125 hover:cursor-pointer
                `}
                      onClick={() => {
                        handleWishList(item);
                      }}
                    />
                  </button>
                </Tooltip>
              ) : (
                <Tooltip title="Add To Wishlist">
                  <button>
                    <HiOutlineHeart
                      className={`p-2 w-12 h-12 transform transition-transform duration-300 text-[#102C57] bg-white rounded-full 
                hover:text-white hover:bg-[#102C57] hover:shadow-md hover:shadow-[#7469B6] hover:scale-125 hover:cursor-pointer
                `}
                      onClick={() => {
                        handleWishList(item);
                      }}
                    />
                  </button>
                </Tooltip>
              )}

              {isItemInCart(item) ? (
                <Tooltip title="View Cart">
                  <button>
                    <MdOutlineShoppingCartCheckout
                      onClick={() => {
                        navigate("/cart");
                      }}
                      className={`p-2 w-12 h-12 transform transition-transform duration-300 text-[#102C57] bg-white rounded-full 
                hover:text-white hover:bg-[#102C57] hover:shadow-md hover:shadow-[#7469B6] hover:scale-125 hover:cursor-pointer
                `}
                    />
                  </button>
                </Tooltip>
              ) : (
                <Tooltip title="Add To Cart">
                  <button>
                    <MdAddShoppingCart
                      className={`p-2 w-12 h-12 transform transition-transform duration-300 text-[#102C57] bg-white rounded-full 
                hover:text-white hover:bg-[#102C57] hover:shadow-md hover:shadow-[#7469B6] hover:scale-125 hover:cursor-pointer
                `}
                      onClick={() => {
                        addToCart(item);
                      }}
                    />
                  </button>
                </Tooltip>
              )}
            </div>
          </div>
        </div>
      </div>
      <span className="text-[#102C57] poppins-medium text-lg mx-2">{item.name}</span>
      <span className="text-[#7469B6] poppins-regular text-lg mx-2">
        ₹ {formatPrice(item.price.amount)}&nbsp;{item.price.unit}
      </span>
    </div>
  );
}
