import React from "react";

interface TimerControlsProps {
  isRunning: boolean;
  handleStart: () => void;
  handleRestart: () => void;
}

const TimerControls: React.FC<TimerControlsProps> = ({
  isRunning,
  handleStart,
  handleRestart
}) => {
  return (
    <div className="flex gap-4 justify-center">
      <button
        onClick={handleStart}
        className={`px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide transition-all duration-300 min-w-24 ${
          isRunning
            ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg shadow-red-500/30"
            : "bg-gradient-to-r from-green-400 to-green-500 text-black shadow-lg shadow-green-400/30"
        }`}
        type="button"
      >
        {isRunning ? "Pause" : "Start"}
      </button>

      <button
        onClick={handleRestart}
        className="px-6 py-3 rounded-full font-semibold text-sm uppercase tracking-wide bg-gradient-to-r from-blue-400 to-blue-500 text-white shadow-lg shadow-blue-400/30 transition-all duration-300 min-w-24"
        type="button"
      >
        Restart
      </button>
    </div>
  );
};

export default TimerControls;