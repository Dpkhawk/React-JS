import { useState } from "react";

export default function useCuctomHook(){
    const[value,setValue]=useState(1)
    function setingValue(number){
        setValue(number+value)
    }
    return [value,setingValue]
}