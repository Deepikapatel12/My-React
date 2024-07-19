 import { useState } from "react";
 import axios from "axios";
 const App=()=>{
  const [input, setInput]= useState({});
  //input={rollno:120, name:"deepu",city:"bhopal", fees:60000}
  const handleInput=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setInput((values)=>({...values, [name]:value}))
    console.log(input)
  }

  const handleSubmit=()=>{
    let api="";
    axios.post(api, input).then((res)=>{
      console.log(res);
      alert("Data Save....!!!!")
    })
  }
  return(
    <>
      Enter Rollno : <input type="text" name="rollno" value={input.rollno}
      <br/><br/>
       Enter Rollno : <input type="text" name="rollno" value={input.rollno}
      <br/><br/>
       Enter Rollno : <input type="text" name="rollno" value={input.rollno}
      <br/><br/>
       Enter Rollno : <input type="text" name="rollno" value={input.rollno}
      <br/><br/>

    </>
  )
 }
 export default App;