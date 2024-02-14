import { useState } from 'react';

export default function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1>{number}</h1>
      <button onClick={() => {
      
      
        setNumber(number + 5);
        console.log(number);
        //setNumber(n =>{console.log(n);return(n+1)} );
        setNumber(42)
        console.log(number);
        
      }}>Increase the number</button>
    </>
  )
}
//setNumber(number+5) initiates for next render and number changed to 5 during frst render
//n=>n+1 gives the number value which changed before execution of this function it's called as updater function
//updater function changes the state value in the current render