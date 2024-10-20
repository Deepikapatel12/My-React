import { useState, useEffect } from "react";
const App=()=>{
  // firste type
const[cnt, setCnt]= useState(0);
useEffect(()=>{
  setTimeout(()=>{
    setCnt(cnt+1)
  }, 1000);
})
// second type
const [cnt1, setCnt1]= useState(0);
useEffect(()=>{
  setTimeout(()=>{
    setCnt1(cnt+1);
  }, 1000);
}, [])

// third type
const [cnt2, setCnt2]= useState(0);
const [multi, setMulti]=useState(0);

useEffect(()=>{
  setMulti(cnt2*2);
}, [cnt2])

  return(
    <>
<h1>welcome this is my counter : {cnt}</h1>
<h1>welcome this is my counter : {cnt1}</h1>

<br/>
<h1>welcome this is my count : {cnt2}</h1>
<h1>welcome this is my multi : {multi}</h1>
<br/>
<button onClick={()=>{setCnt2(cnt2+1)}}>click here</button>

</>
  )
}
export default App; 