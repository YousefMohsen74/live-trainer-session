import React from "react";
import { motion } from "framer-motion";


interface TimerDisplayProps {
  time: number;
  targetTime: number;
  isRunning: boolean;
  isComplete: boolean;
  progressPercentage: number;
  formatTime: (seconds: number) => string;
}

export default function TimerDisplay({
  time,
  isRunning,
  isComplete,
  progressPercentage,
  formatTime,
}: TimerDisplayProps) {
  return (
    <div className="mb-8 flex justify-center">
      <div className="relative w-48 h-48">
        <svg className="transform -rotate-90 w-48 h-48" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgba(255,255,255,0.1)"
            strokeWidth="4"
            fill="none"
            className="backdrop-blur-sm"
          />

          <motion.circle
            cx="50"
            cy="50"
            r="45"
            stroke={isComplete ? "#34d399" : "#fff"}
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeDasharray={`${2 * Math.PI * 45}`}
            initial={{ strokeDashoffset: 2 * Math.PI * 45 }}
            animate={{
              strokeDashoffset:
                2 * Math.PI * 45 * (1 - progressPercentage / 100),
            }}
            transition={{
              duration: 0.5,
              ease: "easeOut",
              type: "spring",
              stiffness: 100,
            }}
            style={{
              filter: isRunning
                ? "drop-shadow(0 0 8px rgba(34, 211, 238, 0.6))"
                : "none",
            }}
          />

          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>

        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.div
            className={`text-2xl font-light font-mono tracking-wider ${
              isComplete ? "text-green-400" : "text-white"
            }`}
            style={{
              textShadow: isComplete
                ? "0 0 20px rgba(34, 197, 94, 0.5)"
                : "0 0 20px rgba(255,255,255,0.3)",
            }}
            key={time}
            initial={{ scale: 1.05 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            {formatTime(time)}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
