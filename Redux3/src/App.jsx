import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";
import { useState } from "react";
const App=()=>{
  const bgcolor = useSelector((state)=>state.bgcolor.color);
  const dispatch= useDispatch();
  const [val, setVal]= useState("");

  return(
    <>
      <h1>Redux tool Kit</h1>
      Enter color : <input type="text" value={val} onChange={(e)=>{setVal(e.target.value)}}/>
      <button onClick={()=>{dispatch(changeColor(val))}}>Change color</button>
      <br/><br/>
      <div style={{width:"300px", height:"400px", backgroundColor:bgcolor}}>

      </div>
    </>
  )
}
export default App;
