import React from "react";
import { FaPlay, FaHeart, FaComment } from "react-icons/fa";

// Sample data
const whisperData = [
  {
    id: 2809,
    date: "1d ago",
    title: "Untitled Whisper",
    duration: "7s",
    mood: "Anxious",
    filter: "Whisper Wind Filter",
  },
  {
    id: 2810,
    date: "1d ago",
    title: "Test Whisper",
    duration: "10s",
    mood: "Joyful",
  },
  {
    id: 2709,
    date: "1d ago",
    title: "Untitled Whisper",
    duration: "0s",
    mood: "Peaceful",
    filter: "Night Calm",
  },
];

const WhisperCard = () => {
  return (
    <div className="w-full px-4 py-8 bg-gray-100">
      {/* Flex layout for vertical stacking */}
      <div className="flex flex-col gap-6">
        {whisperData.map(({ id, date, title, duration, mood, filter }) => (
          <div
            key={id}
            className="w-full bg-gradient-to-br from-sky-500 to-indigo-600 p-6 rounded-2xl text-white shadow-xl transition-all duration-300 hover:scale-[1.02]"
          >
            {/* Header */}
            <div className="flex justify-between items-start flex-wrap gap-3">
              <div>
                <p className="text-sm text-white/80">Whisperer #{id}</p>
                <p className="text-xs text-white/60">{date}</p>
                <p className="text-lg font-semibold mt-1 cursor-pointer underline hover:text-white/90 transition">
                  "{title}"
                </p>
              </div>
              <span className="bg-white text-indigo-800 px-3 py-1 text-xs rounded-full font-semibold shadow">
                {mood}
              </span>
            </div>

            {/* Audio Player */}
            <div className="mt-6 flex items-center flex-wrap gap-4">
              <button className="bg-sky-500 hover:bg-sky-600 rounded-full p-3 text-white shadow-md transition">
                <FaPlay />
              </button>
              <div className="flex-1 min-w-[100px] h-2 bg-white/30 rounded-full overflow-hidden">
                <div className="h-full w-[40%] bg-white/70 animate-pulse"></div>
              </div>
              <span className="text-xs text-white/80">{duration}</span>
            </div>

            {/* Filter Tag */}
            {filter && (
              <div className="mt-4 inline-block bg-indigo-200/20 text-indigo-100 text-sm px-4 py-1 rounded-full shadow-inner backdrop-blur-sm font-medium">
                🌬 {filter}
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 pt-4 border-t border-white/30 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm">
              <div className="flex gap-6">
                <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <FaHeart />
                  <span>0</span>
                </div>
                <div className="flex items-center gap-2 hover:scale-110 transition-transform cursor-pointer">
                  <FaComment />
                  <span>0</span>
                </div>
              </div>
              <button className="text-indigo-200 hover:text-indigo-100 hover:underline transition">
                🔁 Re-whisper
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhisperCard;