import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "./colorSlice";


const App=()=>{
  const Color = useSelector((state)=>state.mycolor.color);
  const dispatch= useDispatch();
  return(
    <>
<h1>Welcome to Redux Tool Kit</h1>
<button onClick={()=>{dispatch(changeColor())}}>Change Color</button>
<div style={{width:"300px", height:"300px", backgroundColor:Color}}>
  
</div>
    </>
  )
}
export default App;
// npm install @reduxjs/toolkit react-redux 