export default function Condition({values}){
    let value=values;
    function handleClick(){
        {value?value=false:value=true}
        console.log(value);
    }
    console.log(value);
    // return(<>
    // {value?<><h1>Welcome</h1> <button onClick={handleClick}>Hide</button></>:<button onClick={handleClick}>Show</button>}
    // </>)
    if(value){
        //console.log(value);
        return(<>
        <h1>Welcome</h1>
        <button onClick={handleClick}>Hide</button>
        </>)
    }
    console.log(value);
    return(<button onClick={handleClick}>Show</button>)
}

// import { Component } from "react";
// export default class Condition extends Component{
//     constructor(props){
//         super(props)
//         this.state={isToggle:props.values};
//         this.handleClick=this.handleClick.bind(this)
//     }
//     handleClick(){
//         this.setState({isToggle:!this.state.isToggle})
//     }
//     render(){
//         return(<>
//           {this.state.isToggle?<><h1>Welcome</h1> <button onClick={this.handleClick}>Hide</button></>:<button onClick={this.handleClick}>Show</button>}
//         </>)
//     }
// }