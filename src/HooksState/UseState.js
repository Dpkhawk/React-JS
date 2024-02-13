import { useState } from "react";
// export default function UseState() {
//     const[firstName,setfirstname]=useState('');
//     const[lastName,setlastname]=useState('');
//     return(<>
//     <input onChange={(e)=>setfirstname(e.target.value)} type="text" value={firstName} placeholder="FirstName"/>
//     <input onChange={(e)=>setlastname(e.target.value)} type="text" value={lastName} placeholder="LastName"/>
//     <p>Hi,{firstName} {lastName}</p>
//     <button onClick={()=>{setfirstname('');setlastname('')}}>Reset</button>
//     </>)
// }

export default function UseState(){
   const[lastName,setlastName]=useState('')
   return(<>
   <input type="text" value={lastName}/>
   <input type="text" onChange={(e)=>setlastName(e.target.value)}/>
   </>)
}