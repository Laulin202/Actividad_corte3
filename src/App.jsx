import React, { useState } from "react";
import GameMenu from "./components/GameMenu";
import ThreeScene from "./components/ThreeScene";
import "./App.css"


function App(){
  const [gameStarted, setGameStarted] = useState(false)

  const handleStart = () =>{
    setGameStarted(true);
  };

  return(
    <div className="app">
      {!gameStarted && <GameMenu onStart = {handleStart}/>}
      {gameStarted && <ThreeScene/>}
    </div>
  )
}

export default App