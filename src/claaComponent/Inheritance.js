import { Component } from "react";
class Inheritance extends Component{
   constructor(props){
    super(props);
    this.state={value:props.value}
    // this.handleClick=this.handleClick.bind(this)
   }
//    handleClick(){
//     this.setState({value:this.state.value+1})
//    }
}
class Inh extends Inheritance{
    constructor(props){
        super(props)
        this.handleClick=this.handleClick.bind(this)
    }
    handleClick(){
        this.setState({value:this.state.value+1})
       }
    render(){
        return(<h1 onClick={this.handleClick}>{this.state.value}</h1>)
    }
}
export default Inh