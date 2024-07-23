import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ShoppingSale from "../../assets/images/Blue Minimalist Shopping Sale.png";
import FootwearSale from "../../assets/images/Footwear.png";
import LaptopSale from "../../assets/images/Laptop Sale Banner.png";
import SkincareSale from "../../assets/images/Skincare Product Shop.png";

const Slideshow = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  return (
    <div className="w-full">
      <Slider {...settings}>
        <div>
          <img src={ShoppingSale} alt="" className="w-full h-[40rem]" />
        </div>
        <div>
          <img src={FootwearSale} alt="" className="w-full h-[40rem]" />
        </div>
        <div>
          <img src={LaptopSale} alt="" className="w-full h-[40rem]" />
        </div>
        <div>
          <img src={SkincareSale} alt="" className="w-full h-[40rem]" />
        </div>
      </Slider>
    </div>
  );
};

export default Slideshow;
