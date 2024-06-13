import React from "react";
import NoImage from "../../assets/images/No_Image_Available.jpg";
import { useSelector, useDispatch } from "react-redux";
import { incrementQuantity, decrementQuantity, removeCart } from "../../redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();

  // Function to calculate the total price of the cart items
  const calculateTotalPrice = () => {
    return cart.reduce((total, cartItem) => {
      return total + cartItem.item.price.amount * cartItem.quantity;
    }, 0);
  };

  // Total price of items in the cart
  const totalPrice = calculateTotalPrice();

  return (
    <div className="flex flex-col w-full gap-y-5">
      <span className="text-xl sm:text-3xl text-[#102C57] font-medium self-center">Shopping Cart</span>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 flex flex-col justify-between border shadow bg-white rounded">
          <div>
            {cart.map((cartItem, index) => (
              <div key={index} className="flex flex-col gap-y-3 w-full border-b p-5">
                <div className="grid grid-cols-6 gap-5">
                  <div className="flex flex-row col-span-1 items-center">
                    <img
                      src={cartItem.item.image}
                      alt={cartItem.item.name}
                      className="w-full h-32 object-cover border-0 rounded-t-md sm:rounded-md"
                      onError={(e) => {
                        e.target.onerror = null; // Prevents infinite loop in case default image also fails
                        e.target.src = NoImage; // Fallback image
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-y-4 col-span-4">
                    <span>{cartItem.item.name}</span>
                    <span>
                      ₹ {cartItem.item.price.amount} &nbsp; {cartItem.item.price.unit}
                    </span>
                    <div className="flex flex-row">
                      <button
                        className="border-slate-400 py-0.5 px-2 border rounded-full mx-1"
                        onClick={() => dispatch(decrementQuantity(cartItem.item))}
                      >
                        -
                      </button>
                      <span className="border-slate-400 border px-6 py-0.5">{cartItem.quantity}</span>
                      <button
                        className="border-slate-400 py-0.5 px-2 border rounded-full mx-1"
                        onClick={() => dispatch(incrementQuantity(cartItem.item))}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-y-4 col-span-1">
                    <button
                      className="text-[#102C57] transition duration-300 hover:scale-125 opacity-50 hover:opacity-100"
                      onClick={() => dispatch(removeCart(cartItem.item))}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full shadow-[0_-2px_5px_1px_#ffe6e6] p-4">
            <button className="border text-[#ffe6e6] bg-[#102C57] hover:border-[#102C57] hover:text-[#102C57] hover:bg-[#ffe6e6] rounded-md p-2 mt-2 transform duration-200 hover:scale-110 float-end">
              Place Order
            </button>
          </div>
        </div>
        <div className="col-span-1 min-w-[20rem] flex flex-col border shadow bg-white py-2 rounded h-max">
          <span className="p-4 border-b border-slate-300 poppins-bold opacity-60">ORDER DETAILS</span>
          <div className="p-4 flex flex-row justify-between">
            <span>
              Price ({cart.length} item{cart.length > 1 ? "s" : ""})
            </span>
            <span>₹ {totalPrice.toFixed(2)}</span>
          </div>
          <div className="p-4 flex flex-row justify-between">
            <span>Delivery Charges</span>
            <span className="text-green-500">FREE</span>
          </div>
          <div className="p-4 flex flex-row justify-between">
            <span>Delivery To</span>
            <span>Rajsamand - 313324</span>
          </div>
          <div className="py-4 flex flex-row justify-between poppins-bold border-t-2 border-dashed border-slate-300 mx-4">
            <span>Total Amount</span>
            <span>₹ {totalPrice.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
