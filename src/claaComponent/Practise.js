import { sculptureList } from "./Data.";
import { Component } from "react";

export default class Practises extends Component{
    constructor(props){
        super(props);
        this.state={value:1};
        this.handleClick=this.handleClick.bind(this)
        this.handleBackClick=this.handleBackClick.bind(this)
    }
    handleClick(){
        if(this.state.value>sculptureList.length-1){
            this.setState({value:1})
        }
        else
      this.setState({value:this.state.value+1})
    }
    handleBackClick(){
        if(this.state.value>1)
        this.setState({value:this.state.value-1})
    }
    render(){
        return(<>
         <button onClick={this.handleClick}>Next</button>
         <button onClick={this.handleBackClick}>back</button><br/>
         {this.state.value}/{sculptureList.length}
         <h1>{sculptureList[this.state.value-1].name}</h1>
         <img src={sculptureList[this.state.value-1].url} alt={sculptureList[this.state.value-1].alt}/>
         <p>{sculptureList[this.state.value-1].description}</p>
        </>)
    }
}