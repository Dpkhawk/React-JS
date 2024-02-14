import { useState } from "react";
export default function InputTag(){
    const[value,setValue]=useState('');
    return(<>
    <input type="text" onChange={(en)=>setValue(en.target.value)}/>
    <button onClick={()=>alert(value)}>Submit</button>
    </>)
}