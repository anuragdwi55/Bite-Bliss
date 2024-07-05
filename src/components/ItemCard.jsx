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
import { motion } from "framer-motion";

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
    <motion.div 
      className="relative flex items-center gap-4 bg-white shadow-lg rounded-xl p-4 mb-4 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img src={img} alt={name} className="w-20 h-20 object-cover rounded-lg" />
      <div className="flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-1">{name}</h2>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-bold text-green-600">₹{price}</span>
          <div className="flex items-center gap-3">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => qty > 1 ? dispatch(decrementQty({ id })) : null}
              className={`p-1 rounded-full ${qty > 1 ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-400'}`}
              disabled={qty <= 1}
            >
              <AiOutlineMinus className="text-xl" />
            </motion.button>
            <span className="text-xl font-semibold">{qty}</span>
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => dispatch(incrementQty({ id }))}
              className="p-1 rounded-full bg-green-500 text-white"
            >
              <AiOutlinePlus className="text-xl" />
            </motion.button>
          </div>
        </div>
      </div>
      <motion.div 
        className="absolute top-2 right-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleRemove}
          className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
        >
          <MdDelete className="text-xl" />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default ItemCard;