import { useEffect, useState } from "react";
import FetchCalling from "./Fetching2";
export default function Fetching(){
    const[data,setData]=useState({})
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response=>response.json())
        .then(data=>setData(data))
        
    })
    return(<>
    <FetchCalling obj={{data}}/>
{console.log(data)}
    <h1>Hello,{data.title}</h1>
    </>)
}