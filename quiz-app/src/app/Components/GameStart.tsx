import React from "react";
import { Play } from "lucide-react";

const GameStart = ({ GameCondition, setGameCondition }) => {
  const handleCondition = () => {
    setGameCondition("playing");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 px-4">
      <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-10 rounded-3xl shadow-2xl text-center max-w-lg w-full animate-fadeIn">
        <h1 className="text-5xl font-extrabold text-white drop-shadow-md mb-6">
          General Quiz
        </h1>

        <p className="text-xl text-white/90 font-semibold mb-8">
          Are you ready? Click the button below to begin!
        </p>

        <button
          onClick={handleCondition}
          className="bg-white text-indigo-600 font-bold px-8 py-3 rounded-full flex items-center justify-center gap-2 mx-auto shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
        >
          <Play size={20} />
          Start
        </button>
      </div>
    </div>
  );
};

export default GameStart;
