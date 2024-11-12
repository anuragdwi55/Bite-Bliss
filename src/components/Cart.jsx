import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import ItemCard from "./ItemCard";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);
  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.qty * item.price,
    0
  );
  const navigate = useNavigate();

  return (
    <>
      {activeCart && (
        <div
          className="fixed top-0 right-0 w-full md:w-[400px] h-full bg-white shadow-lg z-50 overflow-y-scroll transition-transform transform translate-x-0"
          style={{ transform: activeCart ? 'translateX(0)' : 'translateX(100%)', opacity: activeCart ? 1 : 0 }}
        >
          <div className="p-6 flex flex-col h-full">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">My Order</h2>
              <button
                onClick={() => setActiveCart(false)}
                className="text-gray-600 hover:text-red-500 transition-colors"
              >
                <IoMdClose size={24} />
              </button>
            </div>

            {cartItems.length > 0 ? (
              <div className="flex-grow">
                {cartItems.map((food) => (
                  <ItemCard key={food.id} {...food} />
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 mt-10">Your cart is empty</p>
            )}

            <div className="mt-auto">
              <div className="flex justify-between items-center mb-4">
                <span className="text-gray-600">Items:</span>
                <span className="font-semibold">{totalQty}</span>
              </div>
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600">Total Amount:</span>
                <span className="font-semibold text-xl">${totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={() => navigate("/success")}
                className="w-full bg-gradient-to-r from-green-400 to-green-600 text-white font-bold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}

      <button
        onClick={() => setActiveCart(!activeCart)}
        className={`fixed bottom-6 right-6 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg p-4 ${totalQty > 0 && "animate-bounce"}`}
      >
        <FaShoppingCart size={24} />
        {totalQty > 0 && (
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {totalQty}
          </span>
        )}
      </button>
    </>
  );
};

export default Cart;
