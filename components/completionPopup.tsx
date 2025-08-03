import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface CompletionPopupProps {
  showPopup: boolean;
  setShowPopup: (value: boolean) => void;
}

const CompletionPopup: React.FC<CompletionPopupProps> = ({
  showPopup,
  setShowPopup
}) => {
  return (
    <AnimatePresence>
      {showPopup && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white rounded-xl p-6 shadow-2xl text-center max-w-xs w-full"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
          >
            <h2 className="text-xl font-bold text-gray-800 mb-2">
              ⏰ Time&apos;s up!
            </h2>
            <p className="text-gray-600 mb-4">
              The timer has reached the target time.
            </p>
            <button
              onClick={() => setShowPopup(false)}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all duration-300"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CompletionPopup;