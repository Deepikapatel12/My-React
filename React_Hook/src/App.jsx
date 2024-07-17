import { useState } from "react";
const App=()=>{
  const [name, setName]= useState("Deepika");
  const myName=()=>{
    setName("kumkum")
  }
  const [color, setColor]=useState("red");
  return(
    <>
      <h1>Welcome : {name}</h1>
      <button onClick={myName}>Click Here</button>

      {/* with parameter arrow function */}
    <h1 style={{color:color}}>MY Favourit {color}</h1>
    <button onClick={()=>{setColor("green")}}>Green Color</button>
    <button onClick={()=>{setColor("pink")}}>pink Color</button>
    <button onClick={()=>{setColor("blue")}}>Blue Color</button>
    <button onClick={()=>{setColor("yellow")}}>Yellow Color</button>

    </>
  )
}
export default App;