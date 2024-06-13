import React from "react";
import * as FaIcons from "react-icons/fa";
import * as RiIcons from "react-icons/ri";
import * as Fa6Icons from "react-icons/fa6";
import * as GiIcons from "react-icons/gi";
import * as LuIcons from "react-icons/lu";
import * as SiIcons from "react-icons/si";
import * as BsIcon from "react-icons/bs";
import * as Io5Icon from "react-icons/io5";
import * as TbIcon from "react-icons/tb";
import DashboardIcon from "@mui/icons-material/Dashboard";

const NotFound = React.lazy(() => import("../components/utility/NotFound"));
const Home = React.lazy(() => import("../components/main/Home"));
const FruitsVegetables = React.lazy(() => import("../components/main/grocery/FruitsVegetables"));
const DairyProducts = React.lazy(() => import("../components/main/grocery/DairyProducts"));
const PresonalCare = React.lazy(() => import("../components/main/grocery/PresonalCare"));

export const navigation = [
  {
    title: "Home",
    path: "/",
    icon: <DashboardIcon style={{ color: "#102C57" }} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#102C57" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#102C57" }} />,
    component: Home
  },
  {
    title: "Grocery",
    path: "/grocery",
    icon: <Fa6Icons.FaSeedling style={{ color: "#102C57" }} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#102C57" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#102C57" }} />,
    component: NotFound,
    showSubNav: false,
    subNav: [
      {
        title: "Fruits & Vegetables",
        path: "/fruits&vegetables",
        icon: <SiIcons.SiInstacart style={{ color: "#102C57" }} />,
        component: FruitsVegetables
      },
      {
        title: "Dairy",
        path: "/dairy",
        icon: <LuIcons.LuMilk style={{ color: "#102C57" }} />,
        component: DairyProducts
      },
      {
        title: "Personal Care",
        path: "/presonalCare",
        icon: <Fa6Icons.FaCartShopping style={{ color: "#102C57" }} />,
        component: PresonalCare
      },
      {
        title: "Household",
        path: "/household",
        icon: <Fa6Icons.FaCartShopping style={{ color: "#102C57" }} />,
        component: NotFound
      }
    ]
  },
  {
    title: "Electronics",
    path: "/electronics",
    icon: <GiIcons.GiElectric style={{ color: "#102C57" }} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#102C57" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#102C57" }} />,
    component: NotFound,
    showSubNav: false,
    subNav: [
      {
        title: "Mobiles",
        path: "/mobiles",
        icon: <Fa6Icons.FaMobileScreen style={{ color: "#102C57" }} />,
        component: NotFound
      },
      {
        title: "Laptop",
        path: "/laptop",
        icon: <FaIcons.FaLaptopCode style={{ color: "#102C57" }} />,
        component: NotFound
      },
      {
        title: "Speakers",
        path: "/speakers",
        icon: <BsIcon.BsSpeakerFill style={{ color: "#102C57" }} />,
        component: NotFound
      },
      {
        title: "Tv & Appliances",
        path: "/tv",
        icon: <Fa6Icons.FaDisplay style={{ color: "#102C57" }} />,
        component: NotFound
      }
    ]
  },
  {
    title: "Fashion",
    path: "/fashion",
    icon: <GiIcons.GiClothes style={{ color: "#102C57" }} />,
    iconClosed: <RiIcons.RiArrowDownSFill style={{ color: "#102C57" }} />,
    iconOpened: <RiIcons.RiArrowUpSFill style={{ color: "#102C57" }} />,
    component: NotFound,
    showSubNav: false,
    subNav: [
      {
        title: "Men's",
        path: "/men",
        icon: <Io5Icon.IoMan style={{ color: "#102C57" }} />,
        component: NotFound
      },
      {
        title: "Women",
        path: "/women",
        icon: <Io5Icon.IoWoman style={{ color: "#102C57" }} />,
        component: NotFound
      },
      {
        title: "Kids",
        path: "/kids",
        icon: <TbIcon.TbMoodKidFilled style={{ color: "#102C57" }} />,
        component: NotFound
      }
    ]
  }
];

export default navigation;
