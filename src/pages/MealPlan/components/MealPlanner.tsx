import { useState, useRef, useEffect } from "react";
import ReactSwipe from "react-swipe";
import WeekSelector from "./WeekSelector";
import DayColumn from "./DayColumn";

// Sample data
import sampleData from "../sampleData";

const MealPlanner = () => {
  const [selectedWeekIndex, setSelectedWeekIndex] = useState(0);
  const [currentDayIndex, setCurrentDayIndex] = useState(0);
  const reactSwipeEl = useRef<ReactSwipe | null>(null);

  const selectedWeek = sampleData[selectedWeekIndex];

  useEffect(() => {
    setCurrentDayIndex(0);
    // Small delay to ensure ReactSwipe has re-rendered with new content
    const timer = setTimeout(() => {
      if (reactSwipeEl.current) {
        reactSwipeEl.current.slide(0, 0); // Slide to first day without animation
      }
    }, 50);

    return () => clearTimeout(timer);
  }, [selectedWeekIndex]);

  const handlePrev = () => {
    if (currentDayIndex > 0 && reactSwipeEl.current) {
      reactSwipeEl.current.prev();
    }
  };

  const handleNext = () => {
    if (
      currentDayIndex < selectedWeek.days.length - 1 &&
      reactSwipeEl.current
    ) {
      reactSwipeEl.current.next();
    }
  };

  const handleDayIndicatorClick = (index: number) => {
    if (reactSwipeEl.current && index !== currentDayIndex) {
      setCurrentDayIndex(index);
      reactSwipeEl.current.slide(index, 300);
    }
  };

  const handleWeekChange = (index: number) => {
    setSelectedWeekIndex(index);
    // currentDayIndex will be reset to 0 by the useEffect
  };

  const swipeOptions = {
    continuous: false,
    disableScroll: false,
    stopPropagation: false,
  };

  return (
    <div className="flex flex-col max-w-sm mx-auto min-h-screen">
      <WeekSelector
        weeks={sampleData}
        selectedWeekIndex={selectedWeekIndex}
        onSelectWeek={handleWeekChange}
      />

      <div className="flex-1 overflow-hidden">
        <ReactSwipe
          ref={reactSwipeEl}
          className="h-full"
          swipeOptions={swipeOptions}
          key={`week-${selectedWeek.id}-${selectedWeekIndex}`} // More specific key
        >
          {selectedWeek.days.map((day) => (
            <div key={day.id} className="h-full">
              <DayColumn day={day} />
            </div>
          ))}
        </ReactSwipe>
      </div>

      {/* --- Day Navigation Controls --- */}
      <div className="flex justify-center items-center space-x-4 py-4 bg-white border-t">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={currentDayIndex === 0}
          className="text-2xl text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed p-2"
          aria-label="Previous day"
        >
          ‹
        </button>

        {/* Day Indicator Dots */}
        <div className="flex justify-center space-x-2">
          {selectedWeek.days.map((day, index) => (
            <button
              key={`${day.id}-${index}`}
              onClick={() => handleDayIndicatorClick(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                currentDayIndex === index ? "bg-blue-600" : "bg-gray-300"
              }`}
              aria-label={`Go to ${day.name}`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={currentDayIndex === selectedWeek.days.length - 1}
          className="text-2xl text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed p-2"
          aria-label="Next day"
        >
          ›
        </button>
      </div>

      {/* Current day indicator */}
      <div className="text-center py-2 bg-gray-50 text-sm text-gray-600">
        {selectedWeek.days[currentDayIndex]?.name} - Day {currentDayIndex + 1}{" "}
        of {selectedWeek.days.length}
      </div>
    </div>
  );
};

export default MealPlanner;
