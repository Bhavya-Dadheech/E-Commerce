import React from "react";

export default function HomePageItemComponent({
  item,
  isItemInWishlist,
  handleWishList,
  isItemInCart,
  addToCart,
  formatPrice
}) {
  return (
    <div className="border rounded-lg p-4 shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1">
      <img src={item.image} alt={item.name} className="w-full h-40 object-cover mb-4 rounded-lg" />
      <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
      <p className="text-gray-600 mb-4">
        {item.price.amount} {item.price.unit}
      </p>
      <div className="flex justify-between items-center">
        <button className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
        <button className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-700 transition duration-300">
          Wishlist
        </button>
      </div>
    </div>
  );
}
