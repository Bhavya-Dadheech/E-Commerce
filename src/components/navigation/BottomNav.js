import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";

export default function BottomNav() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation
      sx={{ width: "100%", background: "#ffe6e6", boxShadow: "0px 15px 12px 15px #E1AFD1" }}
      value={value}
      onChange={handleChange}
    >
      <BottomNavigationAction component={Link} to="/" label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="WishList" value="Wishlist" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Cart" value="cart" icon={<ShoppingCartOutlinedIcon />} />
    </BottomNavigation>
  );
}
