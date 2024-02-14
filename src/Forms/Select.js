import { useState } from "react";

export function SelectTag(){
    const[value,setValue]=useState('')
    return(<>
    <select  onChange={(e)=>setValue(e.target.value)}>
        <option value={"car"} selected>Car</option> 
        <option value="bus">Bus</option>
        <option value="truck">Truck</option>
    </select>
    <input type="file" accept=".js" required/>
    <input type="number"/>
    <button onClick={()=>alert(value)}>click to see selected element</button>
    </>)
}