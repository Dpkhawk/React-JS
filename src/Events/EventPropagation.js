export default function EventProp(){
    return(<>
    <div onClick={()=>alert("div tag")}>
        <p onClick={(e)=>{e.stopPropagation();alert("para tag")}}>welcome</p>
    </div>
    </>)
}