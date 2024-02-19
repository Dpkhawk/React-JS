import { useCallback, useEffect, useState } from "react";

export default function UseCallBack(){
    const [count,setCount]=useState(0)
  const handleClick=useCallback(()=>{setCount(count+1);console.log('function');},[count])
  //  function handleClick() {
  //   setCount(count+1)
  //   console.log('function1');
  //  }
  const obj1={
    name:'deepak'
  }
  useEffect(()=>console.log('welcome'),[obj1])
    return(<>
    {console.time('start')}
    <h1>{count}</h1>
    <button onClick={handleClick}>Click to increase the count</button>
    {console.time('end')}
    </>)
}