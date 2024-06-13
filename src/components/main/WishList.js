import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { MdDelete } from "react-icons/md";
import { addCart, removeWishList } from "../../redux";
import NoImage from "../../assets/images/No_Image_Available.jpg";
import { useSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Wishlist() {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const cart = useSelector((state) => state.cart.cart);
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };

  const handleRemove = () => {
    dispatch(removeWishList(selectedItem));
    enqueueSnackbar("Item removed from wishlist", { variant: "info" });
    handleClose();
  };

  const isItemInCart = (item) => {
    let check = cart.some((cartItem) => cartItem.item.id === item.id);
    return check;
  };

  return (
    <div className="flex flex-col w-full gap-y-5">
      <span className="text-xl sm:text-3xl text-[#102C57] font-medium self-center">
        My Wishlist ({wishlist.length})
      </span>
      {wishlist.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-2 sm:gap-x-10 gap-y-2 sm:gap-y-10">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="hover:text-[#7469B6] flex flex-col sm:flex-row justify-between bg-white p-0 sm:p-4 shadow hover:shadow-lg rounded-lg hover:cursor-pointer"
            >
              <div className="flex flex-col sm:flex-row">
                <div className="relative">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-32 object-cover border-0 rounded-t-md sm:rounded-md"
                    onError={(e) => {
                      e.target.onerror = null; // Prevents infinite loop in case default image also fails
                      e.target.src = NoImage; // Fallback image
                    }}
                  />
                  <div className="sm:hidden absolute inset-0 flex justify-end items-start">
                    {/* Icons */}
                    <div className="relative z-10 flex gap-5">
                      <button
                        className="h-max mt-2 text-red-500 hover:text-red-700"
                        onClick={() => handleClickOpen(item)}
                      >
                        <MdDelete className="w-6 h-6" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-start p-2 mx-2 sm:mx-0">
                  <span className="poppins-medium text-sm sm:text-lg">{item.name}</span>
                  <span className="poppins-regular text-sm sm:text-lg">₹ {item.price.amount.toFixed(2)} / kg</span>
                </div>
              </div>
              <div className="flex flex-col justify-between sm:items-end mx-2 mb-2 sm:mx-0 sm:mb-0">
                <button
                  className="hidden sm:block h-max mt-2 text-red-500 hover:text-red-700"
                  onClick={() => handleClickOpen(item)}
                >
                  <MdDelete className="w-6 h-6" />
                </button>
                <button
                  className="border text-[#ffe6e6] bg-[#102C57] hover:border-[#102C57] hover:text-[#102C57] hover:bg-[#ffe6e6] rounded-md p-2 h-max mt-2 transform duration-200 hover:scale-110"
                  onClick={() => {
                    if (isItemInCart(item)) {
                      navigate("/cart");
                    } else {
                      dispatch(addCart(item));
                      enqueueSnackbar("Item added to cart!", { variant: "success" });
                    }
                  }}
                >
                  {isItemInCart(item) ? "Go to Cart" : "Add to Cart"}
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="self-center text-2xl sm:text-4xl opacity-50">Your Wishlist is Empty</div>
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Remove Item"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to remove this item from your wishlist?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRemove} color="secondary" autoFocus>
            Remove
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
