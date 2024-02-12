import {Component} from "react";
class ButtonComponent extends Component{
   constructor(props){
    super(props);
    this.state={boolean:true}
   }
   render(){
    return(
        <>
        <h1>Button is {this.state.boolean?"On":"Off"}</h1>
        <button onClick={()=>this.setState({boolean:!this.state.boolean})}>{this.state.boolean?"On":"Off"}</button>
        </>
    )
   }
}
export default ButtonComponent