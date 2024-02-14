import {useState} from 'react'

export default function SnapShot(){
    const [value,setValue]=useState(true); //set function triggers a render 
    return(<> 
    <button onClick={()=>{setValue(!value);alert(value?'stop':'walk')}}>  
        {value?'stop':'walk'}
    </button>
    <h1>{value?'walk':'stop'}</h1>
    </>)
}
//react takes the snapshot of state it lives upon the component
//during the first render onClick event triggers the set function and set function triggers the chnge of state value but the value don't change
//so the first render the alert value is true it only chnges during the second render
//in this code even the setValue changes before the alert the value in alert remains the before the change of setValued 