import { useReducer,useState } from "react";

let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];



export default function UseReducer(){
    const[state,dispatch]=useReducer(reducerFunc,initialTasks)
    const[value,setValue]=useState('')
    function handleChange(){
        dispatch({
            type:'adding',
            id:nextId,
            text:value
        })
    }
   return(<ul> {
        state.map(st=>{
            return(<li>{st.text}<input onChange={(e)=>setValue(e.target.value)} type="text"/><button onClick={handleChange}>add</button></li>)}
        )
    }</ul>)
}

function reducerFunc(state,action){
   switch (action.type) {
    case 'adding':
        return[...state,{id:action.id,done:false,text:action.text}]
        break;
   
    default:
        <h1>error</h1>
        break;
   }
}