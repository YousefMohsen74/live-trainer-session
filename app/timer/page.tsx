"use client";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

import TimerDisplay from "@/components/timer/timerDisplay";
import TimerControls from "@/components/timer/timerControls";
import EditTargetModal from "@/components/timer/editTargetModal";
import CompletionPopup from "@/components/timer/completionPopup";

export default function CosmicTimer() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [targetTime, setTargetTime] = useState(60);
  const [showEditModal, setShowEditModal] = useState(false);
  const [customMinutes, setCustomMinutes] = useState(1);
  const [customHours, setCustomHours] = useState(1);
  const [customSeconds, setCustomSeconds] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setTime((prevTime) => {
          const newTime = prevTime + 1;
          if (newTime >= targetTime) {
            setIsRunning(false);
            setShowPopup(true);
            setTimeout(() => {
              setTime(0);
            }, 1000);
            return newTime;
          }
          return newTime;
        });
      }, 1000);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, targetTime]);

  const formatTime: (seconds: number) => string = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const handleStart = () => setIsRunning((prev) => !prev);
  const handleRestart = () => {
    setIsRunning(false);
    setTime(0);
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  const openEditModal = () => {
    const minutes = Math.floor(targetTime / 60);
    const seconds = targetTime % 60;
    const hours = Math.floor(targetTime / 3600);
    setCustomMinutes(minutes);
    setCustomSeconds(seconds);
    setCustomHours(hours);
    setShowEditModal(true);
  };

  const saveCustomTarget = () => {
    const newTarget = customHours * 3600 + customMinutes * 60 + customSeconds;
    if (newTarget > 0) {
      setTargetTime(newTarget);
      if (time > newTarget) setTime(0);
    }
    setShowEditModal(false);
  };

  const progressPercentage = Math.min((time / targetTime) * 100, 100);
  const isComplete = time >= targetTime;

  return (
    <div className="min-h-screen bg-[url(/background.jpg)] bg-cover flex items-center justify-center relative overflow-hidden">
      <motion.div
        onClick={openEditModal}
        className="relative cursor-pointer z-10 hover:scale-110 transition-all  bg-white/10 backdrop-blur-lg border border-white border-opacity-10 rounded-3xl p-12 text-center shadow-2xl max-w-md w-full mx-4"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <TimerDisplay
          time={time}
          targetTime={targetTime}
          isRunning={isRunning}
          isComplete={isComplete}
          progressPercentage={progressPercentage}
          formatTime={formatTime}
        />

        <TimerControls
          isRunning={isRunning}
          handleStart={handleStart}
          handleRestart={handleRestart}
        />

        <EditTargetModal
          showEditModal={showEditModal}
          customHours={customHours}
          customMinutes={customMinutes}
          customSeconds={customSeconds}
          setCustomHours={setCustomHours}
          setCustomMinutes={setCustomMinutes}
          setCustomSeconds={setCustomSeconds}
          saveCustomTarget={saveCustomTarget}
          cancelEdit={() => setShowEditModal(false)}
          formatTime={formatTime}
        />

        <CompletionPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      </motion.div>
    </div>
  );
};

