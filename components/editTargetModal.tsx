import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface EditTargetModalProps {
  showEditModal: boolean;
  customHours: number;
  customMinutes: number;
  customSeconds: number;
  setCustomHours: (value: number) => void;
  setCustomMinutes: (value: number) => void;
  setCustomSeconds: (value: number) => void;
  saveCustomTarget: () => void;
  cancelEdit: () => void;
  formatTime: (seconds: number) => string;
}

const EditTargetModal: React.FC<EditTargetModalProps> = ({
  showEditModal,
  customHours,
  customMinutes,
  customSeconds,
  setCustomHours,
  setCustomMinutes,
  setCustomSeconds,
  saveCustomTarget,
  cancelEdit,
  formatTime
}) => {
  return (
    <AnimatePresence>
      {showEditModal && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={cancelEdit}
        >
          <motion.div
            className="bg-gray-900 bg-opacity-90 backdrop-blur-2xl border border-white border-opacity-20 rounded-2xl p-8 max-w-sm w-full mx-4"
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-white text-xl font-semibold mb-6 text-center">
              Set Custom Target Time
            </h3>
            <div className="flex gap-4 items-center justify-center mb-6">
              <div className="text-center">
                <label
                  htmlFor="hours"
                  className="text-white text-sm opacity-80 block mb-2"
                >
                  Hours
                </label>
                <input
                  id="hours"
                  type="number"
                  min="0"
                  value={customHours}
                  onChange={(e) =>
                    setCustomHours(Math.max(0, parseInt(e.target.value) || 0))
                  }
                  className="w-20 px-3 py-2 bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <span className="text-white text-2xl mt-6">:</span>

              <div className="text-center">
                <label
                  htmlFor="minutes"
                  className="text-white text-sm opacity-80 block mb-2"
                >
                  Minutes
                </label>
                <input
                  id="minutes"
                  type="number"
                  min="0"
                  max="59"
                  value={customMinutes}
                  onChange={(e) =>
                    setCustomMinutes(
                      Math.max(0, Math.min(59, parseInt(e.target.value) || 0))
                    )
                  }
                  className="w-20 px-3 py-2 bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <span className="text-white text-2xl mt-6">:</span>

              <div className="text-center">
                <label
                  htmlFor="seconds"
                  className="text-white text-sm opacity-80 block mb-2"
                >
                  Seconds
                </label>
                <input
                  id="seconds"
                  type="number"
                  min="0"
                  max="59"
                  value={customSeconds}
                  onChange={(e) =>
                    setCustomSeconds(
                      Math.max(0, Math.min(59, parseInt(e.target.value) || 0))
                    )
                  }
                  className="w-20 px-3 py-2 bg-opacity-10 border border-white border-opacity-20 rounded-lg text-white text-center focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>
            </div>

            <div className="text-center mb-6">
              <p className="text-white text-sm opacity-70">
                Total: {formatTime(customHours * 3600 + customMinutes * 60 + customSeconds)}
              </p>
            </div>

            <div className="flex gap-3 justify-center">
              <button
                onClick={cancelEdit}
                className="px-6 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-all duration-300"
              >
                Cancel
              </button>
              <button
                onClick={saveCustomTarget}
                className="px-6 py-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white rounded-lg font-medium transition-all duration-300"
              >
                Save
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EditTargetModal;