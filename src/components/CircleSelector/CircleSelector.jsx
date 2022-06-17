import React from 'react'
import './CircleSelector.css'

export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
      <button onClick={props.click} className="CircleSelector button selected"> select circle 1 </button>
      <button onClick={props.click} className="CircleSelector button" >select circle 2</button>
      <button onClick={props.click} className="CircleSelector button" >select circle 3</button>
      <button onClick={props.click}  className="CircleSelector button" >select circle 4</button>
    </div>
  )
}





// function setColor(color) {
//   console.log(`updating color to: ${color}`);
// }
// <button onClick={(CircleSelector)=> setColor('white')}>circle selected</button>
