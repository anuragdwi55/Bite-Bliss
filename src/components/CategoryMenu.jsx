import React, { useEffect, useState } from "react";
import FoodData from "../data/FoodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slices/CategorySlice";

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
    <div className="p-4 bg-gray-100 rounded-md mb-4">
      <h3 className="text-xl font-bold text-center mb-4">
        Explore Categories
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
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
      </div>
    </div>
  );
};

const CategoryButton = ({ category, selectedCategory, dispatch }) => {
  const isSelected = selectedCategory === category;

  return (
    <button
      onClick={() => dispatch(setCategory(category))}
      className={`px-4 py-2 rounded font-semibold ${
        isSelected
          ? "bg-orange-500 text-white"
          : "bg-white text-black border border-gray-300"
      } hover:bg-gray-200`}
    >
      {category}
    </button>
  );
};

export default CategoryMenu;
