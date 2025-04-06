import React from "react";

const GameOver = ({ GameCondition, setGameCondition , gameScore, setGameScore}) => {
const newGame = ()=>{
    setGameCondition("playing")
}
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-center p-8 bg-amber-50 w-[500px] rounded-xl shadow-lg">
         <h1 className="text-3xl font-bold">Dang it!</h1>

         <h2 className="text-2xl font-bold">Score : {gameScore}
         </h2>

         <button className='bg-blue-600 w-28 h-10 mt-4 rounded-3xl cursor-pointer' onClick={newGame}>New Game </button>
      </div>
    </div>
  );
};

export default GameOver;
