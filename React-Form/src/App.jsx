import { useState, useEffect } from "react";
const App=()=>{
  const [name, setName]= useState("");
    const [city, setCity]=useState("");
  return(
    <>
<h1>Application Form</h1>
Enter Name : <input type="text"/>
<br/>
Enter City : <input type="text"/>
<br/>
<button>Data Save...!!!</button>
    </>
  )
}
export default App;