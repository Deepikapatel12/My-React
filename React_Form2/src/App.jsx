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
    let api="http://localhost:3000/student";
    axios.post(api, input).then((res)=>{
      console.log(res);
      alert("Data Save....!!!!")
    })
  }
  return(
    <>
      Enter Rollno : <input type="text" name="rollno" value={input.rollno} onChange={handleInput} />
      <br/><br/>
       Enter Name : <input type="text" name="name" value={input.name} onChange={handleInput} />
      <br/><br/>
       Enter City : <input type="text" name="city" value={input.city} onChange={handleInput} />
      <br/><br/>
       Enter Fees : <input type="text" name="fees" value={input.fees} onChange={handleInput} />
      <br/><br/>
      <button onClick={handleSubmit}>Data Save..!!</button>
    </>
  )
 }
 export default App;