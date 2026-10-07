import { useState } from "react";
import "./App.css";

export default function BoardFn() {
    const [squares, setSquares] = useState(Array(9)).fill(null);
  return (
    <>
      <div className="rows">
        <div className="row1 d-flex">
          <Square value={squares[0]} />
          <Square value={squares[1]} />
          <Square value={squares[2]} />
        </div>
        <div className="row1 d-flex">
          <Square value={squares[3]} />
          <Square value={squares[4]} />
          <Square value={squares[5]} />
        </div>
        <div className="row1 d-flex">
          <Square value={squares[6]} />
          <Square value={squares[7]} />
          <Square value={squares[8]} />
        </div>
      </div>
    </>
  );
}

function Square({value}) {
//     const [value, setValue] = useState(null)
//     const [isO, setO] = useState(false)
//    function handleClick(){
//         console.log("clicked")
//         if(isO) {
//             setValue('O')
//         } else {
//             setValue('X')
//         }
//         setO(prev => !prev)
//         console.log(isO)
//     }

  return (
    <>
    <button className="box">{value}</button>
    </>
  )
}
