import React from "react";
import "../css/GameMenu.css";

function GameMenu({onStart}){
    return(
        <div className="game-menu">
            <h1>Welcome to ????</h1>
            <button className="start-button" onClick={onStart}>
                Start
            </button>
        </div>
    )
}

export default GameMenu