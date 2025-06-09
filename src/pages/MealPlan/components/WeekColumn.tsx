import type { Week } from "../types";
import DayMealsCard from "./DayMealsCard";

interface WeekColumnProps {
  week: Week;
}

const WeekColumn = ({ week }: WeekColumnProps) => {
  return (
    <div className="flex flex-col gap-2 overflow-y-auto px-3 py-2 mb-16">
      {week.days.map((day) => (
        <>
          <div className="flex gap-2">
            <h3 className="text-xs font-medium text-gray-500 uppercase tracking-wide">
              {day.name}
            </h3>
            <div className="flex-grow" />
            <p className="text-xs text-gray-500">
              {new Date(day.date).toLocaleDateString()}
            </p>
          </div>
          <DayMealsCard key={day.id} day={day} />
        </>
      ))}
    </div>
  );
};

export default WeekColumn;
