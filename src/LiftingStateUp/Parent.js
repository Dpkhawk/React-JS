import { useState } from "react";

export default function Parents(){
    const[state,setState]=useState(1)
    return(<>
    <Child1 state={state} setState={setState}/>
    <Child2 state={state} setState={setState}/>
    </>)
}

function Child1({state,setState}){
      return(<>
      <h1>{state}</h1>
      <button onClick={()=>setState(state+1)}>Click</button>
      </>)
}

function Child2({state,setState}){
    return(<>
    <h1>{state}</h1>
    <button onClick={()=>setState(state+1)}>Click</button>
    </>)
}

export function Push(){
    return(
        <label>Enter the name: <input type="number"/></label>
    )
}