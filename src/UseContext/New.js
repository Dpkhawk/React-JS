
import { useState,useContext,createContext } from "react";
const context = createContext()
 
export default function ComponentMain(){
  const [state,setState] = useState('deepak');
  return(
    <context.Provider value={state}>
    <h3>Hello, {state} from Component main</h3>
    <Component1/>
    </context.Provider>
  );
}
function Component1() {
return(
  <>
  <h3>Hello,from Component 1</h3>
  <Component2/>
  </>
)
  
}
function Component2() {
  return(
    <>
    <h3>Hello,from Component 2</h3>
    <Component3/>
    </>
  )
    
}
function Component3() {
    return(
      <>
      <h3>Hello,from Component 3</h3>
      <Component4/>
      </>
    )
}
function Component4() {
    const name = useContext(context);
    return(
      <>
      <h3>Hello,{name}from Component 4</h3>
      </>
    )     
}