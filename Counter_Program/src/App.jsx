import { useState } from "react";
import Button from 'react-bootstrap/Button';
const App=()=>{
  const [cnt, setCnt]=useState(0);
  const myDec=()=>{
    if(cnt<=0)
    {
      alert("No negative Value")
    }
    else{
      setCnt(cnt-1);
    }
  }
  return(
    <>
      <h1>My counter program </h1>
      <h2>Count : {cnt}</h2>
<button onClick={()=>{setCnt(cnt+1)}}>increment</button>
<button onClick={()=>{setCnt(cnt-1)}}>Decrement</button>
<Button variant="primary" onClick={myDec}>Drecrement</Button>


    </>
  )
}
export default App;