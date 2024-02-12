import {Component} from 'react'
class StateComponent extends Component{
     constructor(props){
        super(props)
        this.state={value:props.value,add:2}
       // this.handleClick=this.handleClick.bind(this)
     }
     handleClick(values){
        this.setState({value:this.state.value+this.state.add})
        console.log(values);
     }
     render(){
        return(<><h1 onClick={()=>this.handleClick(1)}>{this.state.value}</h1></>)
        // return(<>
        // <select>
        //     <option>The</option>
        //     <option selected>Welcome</option>
        //     <option>Hello</option>
        // </select>
        // <input type='text'/>
        // </>)
     }
} 
export default StateComponent