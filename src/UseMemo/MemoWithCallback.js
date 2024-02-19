import { useMemo, useState } from "react";

export default function MemoInsideCallBack() {
    const [count,setCount]=useState(0)
    const handleClick=useMemo(()=>{
    return(()=>setCount(count+1))},[count])
    return(<>
    <h1>{count}</h1>
    <button onClick={handleClick}>Click to increase count</button>
    </>)
}