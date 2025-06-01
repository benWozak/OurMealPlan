import type { Week } from "../types";

interface WeekSelectorProps {
  weeks: Week[];
  selectedWeekIndex: number;
  onSelectWeek: (index: number) => void;
}

const WeekSelector = ({
  weeks,
  selectedWeekIndex,
  onSelectWeek,
}: WeekSelectorProps) => {
  return (
    <div className="mb-3">
      <div className="border-b border-gray-200">
        <nav className="-mb-px flex" aria-label="Tabs">
          {weeks.map((week, index) => (
            <button
              key={week.id}
              onClick={() => onSelectWeek(index)}
              className={`
                w-1/2 py-3 px-1 text-center border-b-2 font-medium text-sm
                ${
                  selectedWeekIndex === index
                    ? "border-primary text-primary"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }
              `}
            >
              {week.name}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default WeekSelector;
