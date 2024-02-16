import { useState,useEffect } from "react"

export default function Dependency(){
    const[value,setValue]=useState('')
    const[value1,setValue1]=useState('')
     useEffect(()=>{
        alert('u changed input field-1')
     },[value])
    return(<>
    <input type="text" onChange={(e)=>setValue(e.target.value)}/>
    <input type="text" onChange={(e)=>setValue1(e.target.value)}/>
    <h1>hello</h1>
    </>)
}