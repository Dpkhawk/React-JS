import { useState } from "react";

export default function UpdateObjects() {
    const [person, setPerson] = useState({
        name: 'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
          native:{
            work:"karur",
            birth:"chennai"
          }
        }
      });
      function handleChangeTitle(e){
        //setPerson(person.artwork.title=e.target.value)
        setPerson({...person,artwork:{...person.artwork,city:e.target.value}})
        
      }
      function handleNativeTitle(e){
         setPerson({...person,artwork:{...person.artwork,native:{...person.artwork.native,birth:e.target.value}}})
      }
    return(<>
    <h1>
        {person.name}
    </h1>
   <h2> {person.artwork.title}</h2>
    <h3>{person.artwork.city}</h3>
    <img src={person.artwork.image}/>
    <h4><label for="name">Enter the title:</label><input onChange={(e)=>handleChangeTitle(e)} type="text" id="name"/></h4>
    <h5>{person.artwork.native.birth}</h5>
    <h4><label for="native">Enter the native:</label><input onChange={(e)=>handleNativeTitle(e)} type="text" id="native"/></h4>
    </>)
}