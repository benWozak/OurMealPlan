import { motion } from "framer-motion";
import type { Meal } from "../types";

interface MealCardProps {
  meal: Meal;
}

const MealCard = ({ meal }: MealCardProps) => {
  const imageUrl = meal.recipe.image_urls?.[0];
  const totalTime = meal.recipe.total_time_minutes;

  return (
    <motion.div
      className="bg-white rounded-lg shadow-sm border border-gray-100 mb-2 flex items-center gap-3"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex-1 px-3 flex flex-col justify-between min-h-20 p-2">
        <h4 className="font-medium text-gray-900 leading-tight">{meal.name}</h4>

        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-500 capitalize">{meal.type}</span>
          {totalTime && (
            <>
              <span className="text-sm text-gray-300">•</span>
              <span className="text-sm text-gray-500">{totalTime} min</span>
            </>
          )}
        </div>
      </div>

      {imageUrl && (
        <div className="w-32 h-20 bg-gray-200 rounded-lg overflow-hidden flex-shrink-0">
          <img
            src={imageUrl}
            alt={meal.name}
            className="w-full h-full object-cover"
          />
        </div>
      )}
    </motion.div>
  );
};

export default MealCard;
