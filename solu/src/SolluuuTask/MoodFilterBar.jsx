import React, { useState } from "react";
import { FaFilter } from "react-icons/fa";

const moods = [
  "All",
  "Thoughtful",
  "Happy",
  "Sad",
  "Excited",
  "Peaceful",
  "Brave",
  "Confused",
];

const MoodFilterBar = ({ onSelect }) => {
  const [selectedMood, setSelectedMood] = useState("All");

  const handleClick = (mood) => {
    setSelectedMood(mood);
    onSelect && onSelect(mood);
  };

  return (
    <div className="bg-white px-4 py-3 shadow-md w-full overflow-x-auto">
      <div className="flex items-center gap-3">
   
        <div className="text-blue-500 text-lg">
          <FaFilter />
        </div>

        
        <div className="flex items-center gap-2 overflow-x-auto">
          {moods.map((mood) => (
            <button
              key={mood}
              onClick={() => handleClick(mood)}
              className={`px-4 py-1 rounded-full text-sm font-medium whitespace-nowrap border transition ${
                selectedMood === mood
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {mood}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MoodFilterBar;