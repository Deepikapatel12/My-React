
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "./todoSlice";
import { useState } from "react";
const App=()=>{
  const [mytsk, setMytsk]= useState("");
  const mywork= useSelector((state)=>state.todo.task);
  const dispatch= useDispatch();
  console.log(mywork);
  let sno=0;
  const ans= mywork.map((key)=>{
 sno++;
 return(
  <>
    <tr>
      <td>{sno}</td>
      <td>{key.work}</td>
      <td><button onClick={()=>{}}>Delete</button></td>
    </tr>
  </>
 )
  })
  return(
    <>
      <h1>To Do App</h1>
      Enter  Your Task:
      <input type="text" value={mytsk} onChange={(e)=>{setMytsk(e.target.value)}} />
      <button onClick={()=>{dispatch(addTask({id:Date.now(), work:mytsk}))}}>Add</button>
      <hr size ="4" color="red" />
      <table border="1" width="500">
        <tr>
          <th>Sno</th>
          <th>Your Task</th>
          <th></th>
        </tr>
        {ans}
      </table>
    </>
  )
}
export default App;
 
