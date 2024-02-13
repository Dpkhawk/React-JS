// import './List.css'
// function ArrayList({array}){
//    let li= array.map((e,i)=><li key={i}>{e}</li>)
//    return (<ul style={{listStyle:'initial'}}>{li[0]}</ul>)
// }

// export default ArrayList

// import { Component } from 'react'
// export class ArrayofObjects extends Component{
//     constructor(props){
//         super(props)
//        // this.state={value:props.obj}
//     }
//    render(){
//      let li=this.props.obj.map(e=><li>{[`${e.name}-${e.profession} `]}</li>)
//     return(
//       // <h1> {this.props.obj[0].id}</h1>
   
//     //   <h1>{this.props.obj.map(e=>{return (e.name )})}</h1>
//     <ul>{li}</ul>
//     )
//    }
// }

export default function ArrayofObjects(props){
    return(<>
    <ul>
    <li>{props.obj.map(e=><li>{`${e.name}-${e.profession}`}</li>)}</li>
    </ul>
    </>)
}

