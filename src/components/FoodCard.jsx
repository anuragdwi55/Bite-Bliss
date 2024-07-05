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
    <div className="font-bold w-[250px] h-[350px] bg-gray-100 p-5 flex flex-col rounded-lg gap-2 shadow-lg">
      <div className="flex-grow flex flex-col">
        <img
          src={img}
          alt={name}
          className="w-full h-[130px] object-cover rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
        />
        <div className="text-sm flex justify-between mt-2">
          <h2 className="text-lg font-semibold">{name}</h2>
          <span className="text-green-500">₹{price}</span>
        </div>
        <p className="text-sm font-normal text-gray-600 mt-2 flex-grow">
          {desc.slice(0, 50)}...
        </p>
      </div>
      <div className="flex justify-between items-center mt-auto">
        <span className="flex items-center text-yellow-400">
          <AiFillStar className="mr-1" /> {rating}
        </span>
        <button
          onClick={handleAddToCart}
          className="py-1 px-3 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm cursor-pointer"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;