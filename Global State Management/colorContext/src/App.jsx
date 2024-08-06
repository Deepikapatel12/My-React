import { useContext } from "react";
import { myContext } from "./ColorContext";

const App=()=>{
  const {color, setColor}= useContext(myContext);
  return(
    <>
    <button onClick={()=>{setColor("red")}}>Click Here</button>
      <h1 style={{color:color}}>Welcome</h1>
    </>
  )
}
export default App;