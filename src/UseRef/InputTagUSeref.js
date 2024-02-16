import { useRef } from "react";

export default function InputTagUseRef(){
    const myRef=useRef(null)
    return(<>
    <input type="text" ref={myRef}/>
    <button onClick={()=>myRef.current.value=""}>Click to focus input</button>
    <button onClick={()=>myRef.current.blur()}>Click to unfocus</button>
    </>)
}