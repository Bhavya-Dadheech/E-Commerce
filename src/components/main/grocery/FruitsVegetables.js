import React from "react";
import { fruits, vegetables } from "../../../models/productlists/fruitsAndVegetables";
import { useDispatch, useSelector } from "react-redux";
import { addCart, addWishList, removeWishList } from "../../../redux";
import { useSnackbar } from "notistack";
import ItemComponent from "../../ui/ItemComponent";

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
    dispatch(addCart(item));
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
      <span className="text-xl sm:text-3xl self-center text-[#102C57] font-medium">Fruits</span>
      {/* Iterate over fruits */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 sm:gap-x-5 gap-y-5 sm:gap-y-10">
        {fruits.map((item) => (
          <ItemComponent
            key={item.id}
            item={item}
            isItemInWishlist={isItemInWishlist}
            handleWishList={handleWishList}
            isItemInCart={isItemInCart}
            addToCart={addToCart}
            formatPrice={formatPrice}
          />
        ))}
      </div>
      <span className="text-xl sm:text-3xl self-center text-[#102C57] font-medium">Vegetables</span>
      {/* Iterate over vegetables */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-2 sm:gap-x-5 gap-y-5 sm:gap-y-10">
        {vegetables.map((item) => (
          <ItemComponent
            key={item.id}
            item={item}
            isItemInWishlist={isItemInWishlist}
            handleWishList={handleWishList}
            isItemInCart={isItemInCart}
            addToCart={addToCart}
            formatPrice={formatPrice}
          />
        ))}
      </div>
    </div>
  );
}
