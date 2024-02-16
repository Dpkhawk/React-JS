// import { useContext } from "react"
 import { newContext } from "./Parent"

import { useContext } from "react";

// export default function Section({children}){
//     return(<newContext.Provider value={1}>
     
//         {children}
//     </newContext.Provider>)
// }

export default function Child2(){
    const name=useContext(newContext)
    return(<h1>{name.age}</h1>)
}