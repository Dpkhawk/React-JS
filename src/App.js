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
import Button from "./Component/Button.js";
import Colour from "./Component/Colour.js";
import Practise from "./List/Practise.js";
// import './List/List.css'
import ArrayList from './List/ArrayList.js'
import  ArrayofObjects  from "./List/ArrayList.js";
import ButtonEvent from "./Events/ButtonEvent.js";
import EventProp from "./Events/EventPropagation.js";
import Practises from "./claaComponent/Practise.js";
import UseState from "./HooksState/UseState.js";
import InputTag from "./Forms/InputTag.js";
import TextArea from "./Forms/TextArea.js";
import { SelectTag } from "./Forms/Select.js";
import SnapShot from "./HooksState/StateSnapshoot.js";
import Counter from "./HooksState/StateUpdate1.js";
import UpdateObjects from "./HooksState/ObjectsChange.js";
import ArrayMutate from "./HooksState/Array.js";
import Activity from "./HooksState/Activity.js";
import UseReducer from "./HooksState/UseReducer.js";
import Parent from "./UseContext/Parent.js";
import InputTagUseRef from "./UseRef/InputTagUSeref.js";
import VideoTag from "./UseRef/VideoPlaying.js";
import Fetching from "./UseEffect/Fetching.js";
import Dependency from "./UseEffect/Dependency.js";
import Hooks from "./CustomHooks/Hooks.js";
import UseCallBack from "./UseCallBack/UseCallBack.js";
import UseMemo from "./UseMemo/UseMemo.js";
import Memo from "./UseMemo/ValueReturnInMemo.js";
import LazyLoading from "./CodeSplitting/LazyLoading.js";
import MemoInsideCallBack from "./UseMemo/MemoWithCallback.js";
import Parents from "./LiftingStateUp/Parent.js";
import FunctionCalling from "./UseMemo/FunctionCalling.js";
import { Push } from "./LiftingStateUp/Parent.js";
export default function App(){
     const people = [
        'Creola Katherine Johnson: mathematician',
        'Mario José Molina-Pasquel Henríquez: chemist',
        'Mohammad Abdus Salam: physicist',
        'Percy Lavon Julian: chemist',
        'Subrahmanyan Chandrasekhar: astrophysicist'
      ];
      const peoples = [{
        id: 0,
        name: 'Creola Katherine Johnson',
        profession: 'mathematician',
      }, {
        id: 1,
        name: 'Mario José Molina-Pasquel Henríquez',
        profession: 'chemist',
      }, {
        id: 2,
        name: 'Mohammad Abdus Salam',
        profession: 'physicist',
      }, {
        name: 'Percy Lavon Julian',
        profession: 'chemist',  
      }, {
        name: 'Subrahmanyan Chandrasekhar',
        profession: 'astrophysicist',
      }];
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
    {/* <Colour/> */}
    {/* <ArrayList array={people}/> */}
    {/* <ArrayofObjects obj={peoples}/> */}
    {/* <Practise/> */}
    {/* <ButtonEvent/> */}
    {/* <Practises/> */}
    {/* <UseState/> */}
    {/* <InputTag/> */}
    {/* <TextArea/> */}
    {/* <SelectTag/> */}
    {/* <SnapShot/> */}
    {/* <Counter/> */}
    {/* <UpdateObjects/> */}
    {/* <ArrayMutate/> */}
    {/* <Activity/> */}
    {/* <UseReducer/> */}
    {/* <Parent/> */}
    {/* <InputTagUseRef/>
    <VideoTag/> */}
    {/*   c<Fetching/> */}
    {/* <Dependency/> */}
    {/* <Hooks/> */}
    {/* <UseCallBack/> */}
    {/* <UseMemo/> */}
    {/* <Memo/> */}
    {/* <LazyLoading/> */}
    {/* <MemoInsideCallBack/> */}
    {/* <Parents/> */}
    {/* <FunctionCalling/> */}
    <Push/>
    </>)
}