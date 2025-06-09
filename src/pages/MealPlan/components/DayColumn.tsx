import type { Day } from "../types";
import MealCard from "./MealCard";

interface DayColumnProps {
  day: Day;
}

const DayColumn = ({ day }: DayColumnProps) => {
  // Group meals by type
  const mealsByType: Record<string, typeof day.meals> = {
    breakfast: day.meals.filter((meal) => meal.type === "breakfast"),
    snack1: day.meals.filter((meal) => meal.type === "snack").slice(0, 1),
    lunch: day.meals.filter((meal) => meal.type === "lunch"),
    snack2: day.meals.filter((meal) => meal.type === "snack").slice(1, 2),
    dinner: day.meals.filter((meal) => meal.type === "dinner"),
  };

  return (
    <div className="flex-shrink-0 w-full h-full px-3 py-2 overflow-y-auto">
      <div className="mb-3 text-center max-w-xs mx-auto">
        <h2 className="text-lg font-semibold text-gray-900">{day.name}</h2>
        <p className="text-xs text-gray-500">
          {new Date(day.date).toLocaleDateString()}
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Breakfast
          </h3>
          {mealsByType.breakfast.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Morning Snack
          </h3>
          {mealsByType.snack1.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Lunch
          </h3>
          {mealsByType.lunch.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Afternoon Snack
          </h3>
          {mealsByType.snack2.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>

        <div>
          <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
            Dinner
          </h3>
          {mealsByType.dinner.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayColumn;
