import { Suspense, lazy } from "react";

export default function LazyLoading(){
    return(<>
    <Suspense fallback={<div>...Loading</div>}>
       {/* {
        setTimeout(()=><div><Display/></div>,3000)
       } */}
       
    {/* //{    setTimeout(()=> {<h1>welcome</h1>},1000)} */}
    <Display/>
    </Suspense>
    </>)
}
function Display(){
    return(setTimeout(()=><h1>welcome</h1>,1000))
}