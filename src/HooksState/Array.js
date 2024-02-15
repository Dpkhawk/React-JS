import { useState } from "react";

export default function ArrayMutate(){
    let id=0;
    const[name,setName]=useState('')
    const[artist,setArtist]=useState([])
    return(<>
    <input type="text" onChange={(e)=>setName(e.target.value)}/>
    <button onClick={()=>setArtist([...artist,{id:id++,name:name}])}>Add</button>
    {
        artist.map(e=>(<h1 key={e.id}>{e.name}<ul> <li>Welcome</li></ul><button key={e.id} onClick={()=>setArtist(artist.filter(a=>a.id!==e.id))}>Delete</button></h1>))
       
    }

    </>)
}