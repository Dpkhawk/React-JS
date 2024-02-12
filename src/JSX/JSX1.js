export default function Array(props){
   return( <>
    <h1>{props.array.splice(0,2)}</h1>
    <h1><RandomNumber/></h1>
    {props.array}
    </>)
}

function RandomNumber(){
    return(setTimeout(() => {
      return Math.ceil(Math.random())*100  
    }, 1000))
}