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
      setCurrentDayIndex(currentDayIndex - 1);
    }
  };

  const handleNext = () => {
    if (
      currentDayIndex < selectedWeek.days.length - 1 &&
      reactSwipeEl.current
    ) {
      reactSwipeEl.current.next();
      setCurrentDayIndex(currentDayIndex + 1);
    }
  };

  const handleWeekChange = (index: number) => {
    setSelectedWeekIndex(index);
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
      <div className="relative flex-1 overflow-hidden">
        {/* --- Day Navigation Controls --- */}
        <div className="absolute top-0 left-0 right-0 flex justify-between z-1 bg-transparent items-center space-x-4 py-4">
          {/* Previous Button */}
          <button
            onClick={handlePrev}
            disabled={currentDayIndex === 0}
            className="text-2xl text-primary disabled:text-gray-300 disabled:cursor-not-allowed p-2"
            aria-label="Previous day"
          >
            ‹
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            disabled={currentDayIndex === selectedWeek.days.length - 1}
            className="text-2xl text-primary disabled:text-gray-300 disabled:cursor-not-allowed p-2"
            aria-label="Next day"
          >
            ›
          </button>
        </div>
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
    </div>
  );
};

export default MealPlanner;
