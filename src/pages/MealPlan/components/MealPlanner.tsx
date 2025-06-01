import { useState, useRef } from "react";
import ReactSwipe from "react-swipe";
import WeekSelector from "./WeekSelector";
import DayColumn from "./DayColumn";

// Sample data remains the same...
import sampleData from "../sampleData";

const MealPlanner = () => {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const reactSwipeEl = useRef<ReactSwipe | null>(null);

  const selectedWeek = sampleData[selectedWeekIndex];

  const handleDayIndicatorClick = (index: number) => {
    setCurrentDayIndex(index);
    reactSwipeEl.current?.slide(index, 300); // 300ms transition speed
  };

  const swipeOptions = {
    continuous: false,
    callback: (index: number) => {
      setCurrentDayIndex(index);
    },
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto">
      <WeekSelector
        weeks={sampleData}
        selectedWeekIndex={selectedWeekIndex}
        onSelectWeek={(index) => {
          setSelectedWeekIndex(index);
          setCurrentDayIndex(0); // Reset to the first day of the new week
        }}
      />

      <div className="flex-1 overflow-hidden">
        <ReactSwipe
          ref={reactSwipeEl}
          className="h-full"
          swipeOptions={swipeOptions}
          key={selectedWeek.id} // Re-initialize when the week changes
        >
          {selectedWeek.days.map((day) => (
            <div key={day.id}>
              <DayColumn day={day} />
            </div>
          ))}
        </ReactSwipe>
      </div>

      {/* Day indicator dots */}
      <div className="flex justify-center space-x-2 py-3">
        {selectedWeek.days.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDayIndicatorClick(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              currentDayIndex === index ? "bg-primary" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MealPlanner;
