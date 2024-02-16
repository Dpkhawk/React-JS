import {useState,useRef} from 'react'
import Video from './ForwardRef'
export default function VideoTag() {
    const myRef=useRef(null)
     const[play,setPlay]=useState(true)
     function handleChange(){
          if(!play){
            myRef.current.pause()
            setPlay(!play)
          }
          else{
            myRef.current.play()
            setPlay(!play)
          }
     }
     return(<>
     <button onClick={handleChange}>
        {play?'Play':'Pause'}
     </button>
     {/* <video  ref={myRef} src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4">
     </video> */}
     <Video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" type="video/mp4" ref={myRef}/>
     </>)
}