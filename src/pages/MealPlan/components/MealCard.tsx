import { motion } from "framer-motion";
import type { Meal } from "../types";

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm border border-gray-100 p-3 mb-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <h4 className="font-medium text-gray-900 text-sm leading-tight">
        {meal.name}
      </h4>
      <div className="flex justify-between items-center mt-2">
        <span className="text-xs text-gray-500 capitalize">{meal.type}</span>
        <button
          className="text-xs text-primary hover:text-teal-800 font-medium"
          onClick={() => alert(`View recipe for ${meal.name}`)}
        >
          Recipe
        </button>
      </div>
    </motion.div>
  );
};

export default MealCard;
