import React from "react";
import ProductSection from "../ui/ProductSection";
import CategoryCard from "../ui/CategoryCard";
import Slideshow from "../ui/Slideshow";

const HomePage = () => {
  return (
    <>
      <Slideshow />
      <header className="text-center mt-5 mb-1">
        <h1 className="text-5xl font-extrabold text-[#102C57]">Welcome to Our Store</h1>
        <p className="text-2xl text-gray-600 mt-4">Find the best products for your home</p>
      </header>
      <div className="text-2xl font-semibold mt-8 mb-4">Top Rated Products</div>
      <ProductSection category="top-rated" />
      <div className="text-2xl font-semibold mt-8 mb-4">Best Selling Products</div>
      <ProductSection category="best-selling" />
      <div className="text-2xl font-semibold mt-8 mb-4">Most Ordered Products</div>
      <ProductSection category="most-ordered" />
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
        <CategoryCard title="Fruits" image="path/to/fruit-image.jpg" />
        <CategoryCard title="Vegetables" image="path/to/vegetable-image.jpg" />
        <CategoryCard title="Dairy" image="path/to/dairy-image.jpg" />
        <CategoryCard title="Beverages" image="path/to/beverages-image.jpg" />
      </div>
    </>
  );
};

export default HomePage;
