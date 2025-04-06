"use client";
import React, { useState } from "react";
import GameStart from "./Components/GameStart";
import Playing from "./Components/Playing";
import GameOver from "./Components/GameOver";



export default function Home() {

  const [GameCondition , setGameCondition] = useState('start')
  const [gameScore, setGameScore] = useState(null)
 
  return <div className="h-[100vh] overflow-hidden bg-linear-to-t from-sky-500 to-indigo-500 ">
    { GameCondition === 'start' && <GameStart  GameCondition = {GameCondition}  setGameCondition={setGameCondition}/>  }
    { GameCondition === "playing" && <Playing GameCondition = {GameCondition}  setGameCondition={setGameCondition} gameScore={gameScore} setGameScore={setGameScore}/>}
    { GameCondition === "over" && <GameOver GameCondition = {GameCondition}  setGameCondition={setGameCondition} gameScore={gameScore} setGameScore={setGameScore} />}
    
    
  </div>;
}
