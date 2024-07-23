import React from "react";

const ProductSection = ({ category }) => {
  // Replace with your actual product fetching logic
  const products = [
    { id: 1, name: "Product 1", image: "path/to/product1.jpg", price: 100 },
    { id: 2, name: "Product 2", image: "path/to/product2.jpg", price: 150 }
    // Add more products
  ];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="w-44 shadow-md rounded-lg overflow-hidden transform transition-transform hover:scale-105"
        >
          <img src={product.image} alt={product.name} className="w-full h-44 object-cover" />
          <div className="p-4">
            <h4 className="text-lg font-semibold">{product.name}</h4>
            <p className="text-gray-600">₹ {product.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductSection;
