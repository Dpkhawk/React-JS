import { Component } from "react";
export default class Comp extends Component{
   constructor(props){
    super(props);
    this.state={value:'class'}
    this.handleClick=this.handleClick.bind(this)
   }
   handleClick(e){
    this.setState({value:e.target.value})
   }
   render(){
    
    return(<><h1>{this.state.value}</h1> <input type="text" onChange={(e)=>this.handleClick(e)} value={this.state.value}/>
    
    </>)
   }
}