import { useEffect, useMemo } from "react";

export default function UseMemo(){
    
    const obj1=useMemo(()=>{return{name:'deepak'}})
    useEffect(()=>console.log('inside useeffect'),[obj1])
    return(<>
    <h1>{obj1.name}</h1>
    </>)
}