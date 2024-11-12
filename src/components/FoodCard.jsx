import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));
    handleToast(name);
  };

  return (
    <div className="w-60 h-80 bg-gray-100 p-4 flex flex-col rounded shadow">
      <div className="flex-grow">
        <img
          src={img}
          alt={name}
          className="w-full h-32 object-cover rounded mb-2"
        />
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className="text-green-500">₹{price}</span>
        </div>
        <p className="text-sm text-gray-600">
          {desc.slice(0, 50)}...
        </p>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="flex items-center text-yellow-400">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={handleAddToCart}
          className="px-3 py-1 bg-green-500 text-white rounded text-sm"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
