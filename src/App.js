import Introduction from "./Component/Introduction";
import { DisplayDetails } from "./Component/Introduction";
import Array from "./JSX/JSX1";
import Alert from './JSX/JSX2.js';
import Avatar from "./Props/Avatar.js";
import Props from "./Props/PropsComponent.js";
import Children from './Props/Children.js';
import  Components  from "./claaComponent/ClassComponent.js";
import {Object} from './Props/PropsObject.js';
import StateComponent from "./claaComponent/StateClass.js";
import LifeCycle from "./claaComponent/LifeCycle.js";
import Inh from "./claaComponent/Inheritance.js";
import ButtonComponent from "./claaComponent/ButtonComponent.js";
import Condition from "./Condition/Condition.js";
import Comp from "./Condition/new.js";
export default function App(){
    return (<>
    {/* <Introduction/> */}
    {/* <DisplayDetails obj={{name:"deepak",
                        array:[1,2,3,4]}}/> */}
    {/* <Array array={[1,2,3,4]}/> */}
    {/* <Alert name="deepak"/> */}
    {/* <Props avatar={<Avatar/>}/> */}
    {/* <Children>
        <Avatar/>
        <h1>welcome</h1>
    </Children> */}
    {/* <Components/> */}
    {/* <Object obj={{name:"deepak",age:22}}/> */}
    {/* <StateComponent value={5}/> */}
    {/* <LifeCycle/> */}
    {/* <Inh value={3}/> */}
    {/* <ButtonComponent/> */}
    {/* <Condition values={true}/> */}
    <Comp/>
    </>)
}