// export default function ButtonEvent() {
//     return (<button onClick={()=>alert('hey')}>Click it</button>)
// }
function DisplayEvents({message,children}){
    return(<>
    <button onClick={()=>alert(message)}>{children}</button>
    </>)
}
export default function ButtonEvent(){
   return(<>
   <DisplayEvents message='playing'>
    Play Movie
   </DisplayEvents>
   <DisplayEvents message='uploading'>
    Upload
   </DisplayEvents>
   </>)
}
