// React import not needed with JSX transform
import type { Day } from "../types";

interface DayMealsCardProps {
  day: Day;
}

const DayMealsCard = ({ day }: DayMealsCardProps) => {
  const mealsByType: Record<string, any[]> = {
    breakfast: day.meals.filter((meal) => meal.type === "breakfast"),
    snack1: day.meals.filter((meal) => meal.type === "snack").slice(0, 1),
    lunch: day.meals.filter((meal) => meal.type === "lunch"),
    snack2: day.meals.filter((meal) => meal.type === "snack").slice(1, 2),
    dinner: day.meals.filter((meal) => meal.type === "dinner"),
  };

  return (
    <div className="flex-shrink-0 w-full bg-white rounded-lg shadow p-4">
      <div className="space-y-1 text-sm text-gray-700">
        <div>
          <span className="font-medium">Breakfast:</span>{" "}
          {mealsByType.breakfast[0]?.name || "-"}
        </div>
        <hr />
        <div>
          <span className="font-medium">Snack:</span>{" "}
          {mealsByType.snack1[0]?.name || "-"}
        </div>
        <hr />
        <div>
          <span className="font-medium">Lunch:</span>{" "}
          {mealsByType.lunch[0]?.name || "-"}
        </div>
        <hr />
        <div>
          <span className="font-medium">Snack:</span>{" "}
          {mealsByType.snack2[0]?.name || "-"}
        </div>
        <hr />
        <div>
          <span className="font-medium">Dinner:</span>{" "}
          {mealsByType.dinner[0]?.name || "-"}
        </div>
      </div>
    </div>
  );
};

export default DayMealsCard;
