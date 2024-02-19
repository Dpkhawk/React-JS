import { useState } from "react";

export default function Parent(){
    const[state,setState]=useState(1)
    return(<>
    <Child1 state={state} setState={setState}/>
    <Child2 state={state} setState={setState}/>
    </>)
}

function Child1({state,setState}){
      return(<>
      <h1>{state}</h1>
      <button onClick={setState}>Click</button>
      </>)
}

function Child1({state,setState}){
    return(<>
    <h1>{state}</h1>
    <button onClick={setState}>Click</button>
    </>)
}