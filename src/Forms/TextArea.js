import {useState} from 'react'

export default function TextArea(){
    const[text,setText]=useState('')
    return(<>
    <form>
        <textarea rows={5} cols={15} onChange={(e)=>setText(e.target.value)}/>
        <input type='button' value={"submit"} onClick={(e)=>{alert(text)}}/>
    </form>
    </>)
}