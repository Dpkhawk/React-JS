import useCuctomHook from "./Customhook"
export default function Hooks(){
    const[num1,setNum1]=useCuctomHook()

    return(<>
    <h1>{num1}</h1>
    <button onClick={()=>setNum1(1)}>Click to increment the value</button>
    </>)
}