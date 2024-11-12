import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

const FoodItems = () => {
  const category = useSelector((state) => state.category.category);
  const search = useSelector((state) => state.search.search);
  const handleToast = (name) => toast.success(`Added ${name}`);

  const filteredFoodData = FoodData.filter((food) => {
    const matchesCategory = category === "All" || food.category === category;
    const matchesSearch = food.name.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <div className="flex flex-wrap gap-6 justify-center lg:justify-start mx-6 my-6 ml-28">
        {filteredFoodData.map((food) => (
          <div key={food.id} className="cursor-pointer">
            <FoodCard
              id={food.id}
              name={food.name}
              price={food.price}
              desc={food.desc}
              rating={food.rating}
              img={food.img}
              handleToast={handleToast}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default FoodItems;
