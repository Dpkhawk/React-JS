import { useCallback, useMemo, useState } from "react";

export default function FunctionCalling(){
    const[state,setState]=useState(1)
    // const handleClick=useMemo(()=>loops(state),[state])
    // const handleClick=useCallback(()=>{ for(let i=0;i<state;i++){
    //     console.log(i);
    // }},[state])
    const handleClick=useMemo(()=>{return(()=> {for(let i=0;i<state;i++){
        console.log(i);
    }})},[state])
    return(<>
    <input value={state} type="number" onChange={(e)=>setState(e.target.value)}/>
    <button onClick={()=>handleClick()}>Start</button>
    <button onClick={()=>setState(state+1)}>click</button>
    </>)
}

