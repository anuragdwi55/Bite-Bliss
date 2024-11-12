import React, { useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  incrementQty,
  decrementQty,
} from "../redux/slices/CartSlice";
import { toast } from "react-hot-toast";

const ItemCard = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();
  const [isHovered, setIsHovered] = useState(false);

  const handleRemove = () => {
    dispatch(removeFromCart({ id, img, name, price, qty }));
    toast.error(`${name} removed from cart`, {
      icon: "🗑️",
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <div 
      className="relative flex items-center gap-6 shadow-lg rounded-xl p-4 mb-4 overflow-hidden transition-transform duration-200 hover:scale-105 bg-white"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={img} alt={name} className="w-20 h-30 object-cover rounded-lg ml-4" />
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-xl font-bold text-green-600">₹{price}</span>
          <div className="flex items-center gap-4">
            <button
              onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : null}
              className={`p-2 rounded-full ${qty > 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}
              disabled={qty <= 1}
            >
              <AiOutlineMinus className="text-xl" />
            </button>
            <span className="text-xl font-semibold">{qty}</span>
            <button
              onClick={() => dispatch(incrementQty({ id }))}
              className="p-2 rounded-full bg-green-500 text-white"
            >
              <AiOutlinePlus className="text-xl" />
            </button>
          </div>
        </div>
      </div>
      <div 
        className={`absolute top-2 right-2 transition-opacity duration-200 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      >
        <button
          onClick={handleRemove}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          <MdDelete className="text-sm" />
        </button>
      </div>
    </div>
  );
};

export default ItemCard;
