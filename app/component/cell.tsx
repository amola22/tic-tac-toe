import { Dispatch, SetStateAction } from "react";

type CellProps ={
    id:number;
    go:string;
    cells:string[];
    cell:string;
    setCells:Dispatch<SetStateAction<string[]>>;
    setGo:Dispatch<SetStateAction<string>>;
    winningMessage:string;
}

export default function Cell({ id, cells,setCells,winningMessage,cell, go ,setGo}:CellProps) {
    const handleClick =()=>{
        if (winningMessage) {
            return;
        }
        const taken = !!cells[id];
        if(!taken){
        const newCellValue = go === "circle" ? "circle" : "cross";
        
        // Update the cell value and switch turns
        handleCellChange(newCellValue);
        setGo(go === "circle" ? "cross" : "circle");
            }
    };
    const handleCellChange =(cellToChange:string)=>{
        const copyCells=[...cells];
        copyCells[id]=cellToChange;
        setCells(copyCells);
    };

    return (
    <div className="square" onClick={handleClick}>
        <div className={cell}>
            { cell ?
            (cell ==="circle" ? "O" : "x" )
                :""
        }
        </div>
    </div>
    );  
};