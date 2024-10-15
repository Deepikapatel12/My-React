import { useState  } from "react";
import Color from "./color";
import Counter from "./Counter";
const App=()=>{
  const [name, setName]=useState("Deepika");

  const myName=()=>{
    setName("Deepu");
  }
// 2nd

const [city, setCity]=useState("");
const display=()=>{
  setCity("Indore");
}

  return(
    <>
<h1>Welcome</h1>
<h1>My Name : {name}</h1>
<button onClick={myName}>Change Name</button>
<br/>
{/* 2nd type with arrow function sort */}


<h1>My City : {city}</h1>
<button onClick={()=>{setCity("Bhopal")}}>Click Here</button>
<button onClick={display}>Click here</button>
<br/>
<Color />
<Counter />
    </>
  )
}
export default App;