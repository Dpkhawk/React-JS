import { useState } from "react";
import ArrayMutate from "./Array";
const initialItems = [
    { title: 'pretzels', id: 0 },
    { title: 'crispy seaweed', id: 1 },
    { title: 'granola bar', id: 2 },
  ];
  export default function Activity(){
    const[value,setValue]=useState('');
    const[array,setArray]=useState(initialItems)
    function handleClick(i){
        setValue(array[i].title)
    }
    function handleChange(event,i){
    //   setArray(array.map((el)=>{
    //     if(el.id==i){
    //         return({...el,title:e.target.value})
    //     }
    //     else{
    //         return el
    //     }
    //    }))
    {array.map((element,index)=>{
        if(i==index){
            return(setArray({...element,title:event.target.value}))
        }
        else{
            return element;
        }
    })}}
    return(<>
    <ul>
        {initialItems.map((items,i)=>
        {return(<li><input type="text" value={items.title} onChange={(event)=>handleChange(event,items.id)}/><button onClick={()=>handleClick(i)}>Choose</button></li>)})}
    </ul>
    <p>selected item is {value}</p>
    {/* <a href={<ArrayMutate/> }>Click it</a> */}
    </>)
  }