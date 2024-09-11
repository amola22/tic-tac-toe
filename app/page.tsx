"use client";
import { useEffect, useState } from "react";
import Cell from "./component/cell";
const winningCombos=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]
export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("Cross");
  const [winningMessage,setWinningMessage] = useState("");
  useEffect(()=>{
    winningCombos.forEach((combo)=>{
      const circleWins = combo.every((cell)=>cells[cell]==="circle") 
      const crossWins = combo.every((cell)=>cells[cell]==="cross")
      if (circleWins) {
        setWinningMessage("Circle wins!")
      }else if(crossWins) {
        setWinningMessage("Cross wins!")
      }
    })
  },[cells,winningMessage]);
  useEffect(()=>{
    if(cells.every((cell) => cell !== "")&& !winningMessage){
      setWinningMessage("Draw!")
    }
  },[cells,winningMessage])
  return (
    <div className="container">
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            key={index}
                        id={index}
                        cells={cells}
                        cell={cell}
                        go={go}
                        setCells={setCells}
                        setGo={setGo} 
                        winningMessage={winningMessage}
            />
        ))}
      </div>
      <div>{winningMessage}</div>
      {!winningMessage&&<div>
        {`It's now ${go} turn!`}
      </div>}
    </div>
  );
}
