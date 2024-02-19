import { useMemo ,useState} from "react";

export default function Memo() {
    const [count,setCount]=useState(5)
    let a=0;
    console.log(a);
    console.log(count);
    if(count%5===0)
    a=count;
    const value=useMemo(()=> {return a+5},[a]);
    return(<><h1>{value}</h1>
    <button onClick={()=>setCount(count+1)}>click to change value of a</button></>)
}