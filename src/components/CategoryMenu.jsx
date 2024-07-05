import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";
import { motion } from "framer-motion";

const CategoryMenu = () => {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniqueCategories = [
      ...new Set(FoodData.map((food) => food.category)),
    ];
    setCategories(uniqueCategories);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-teal-400 via-cyan-500 to-indigo-600 p-8 rounded-3xl shadow-2xl mb-8"
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-4xl font-extrabold text-white mb-8 text-center"
      >
        Explore Gastronomic Wonders
      </motion.h3>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="flex flex-wrap justify-center gap-4"
      >
        <CategoryButton
          category="All"
          selectedCategory={selectedCategory}
          dispatch={dispatch}
        />
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            category={category}
            selectedCategory={selectedCategory}
            dispatch={dispatch}
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

const CategoryButton = ({ category, selectedCategory, dispatch }) => {
  const isSelected = selectedCategory === category;

  return (
    <motion.button
      whileHover={{ scale: 1.05, rotate: 2 }}
      whileTap={{ scale: 0.95, rotate: -2 }}
      onClick={() => dispatch(setCategory(category))}
      className={`
        px-6 py-3 rounded-full font-bold text-sm
        transition-all duration-300 ease-in-out
        ${
          isSelected
            ? "bg-gradient-to-r from-amber-400 to-orange-500 text-white shadow-lg"
            : "bg-white text-indigo-800 hover:bg-indigo-50"
        }
        border-2 border-transparent hover:border-amber-300
        focus:outline-none focus:ring-2 focus:ring-amber-300 focus:ring-opacity-50
      `}
    >
      <motion.span
        initial={{ y: 0 }}
        animate={{ y: isSelected ? -3 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        {category}
      </motion.span>
    </motion.button>
  );
};

export default CategoryMenu;