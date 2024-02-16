import { useContext } from "react"
//import { newContext } from "./LevelContext"
//import Section from "./Section"
import Child2 from "./Child2";
import { createContext } from "react";

export  let newContext=createContext()
export default function Parent(){
    return(<>
    <newContext.Provider value={{name:'deepak',age:22}}>
        <Child />
        </newContext.Provider>
    
   
    </>)
}
function Child(){
    //const name=useContext(newContext)
    return(<> <h1>name</h1><Child1/></>)
}

function Child1(){
    
    return(<><h1>welcome</h1><Child2 /></>)
}

// function Child2(){
//     const name=useContext(newContext)
//     return(<h1>{name.age}</h1>)
// }