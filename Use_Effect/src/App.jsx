import { useEffect, useState } from "react";
// use effect hook
const App=()=>{
const [cnt, setCnt]=useState(0);
useEffect(()=>{
// 1st type
// runs on every render
  setTimeout(()=>{
    setCnt(cnt+1)
  }, 3000);

})
// 2nd type
const [cnt1, setCnt1]=useState(0);
useEffect(()=>{
  // runs only one render
  setTimeout(()=>{
    setCnt1(cnt1+1);
  }, 3000)
}, [])

// 3rd type
const [cnt2, setCnt2]=useState(0);
const [multi, setMulti]=useState(0);
useEffect(()=>{
  setMulti(cnt2*2)
  // and any time any dependency value changes
}, [cnt2])

// 4th type




  return(
    <>
<h1>Welcome to use effect hook</h1>

<h2>Use Effect Hook 1st type : {cnt}</h2>


<h2>Use Effect Hook 2nd Type :{cnt1}</h2>


<h2>Use Effect Hook 3rd Type :{cnt2}</h2>
<h2>Use Effect Hook Multiplication 3rd Type :{multi}</h2>
<button onClick={()=>{setCnt2(cnt2+1)}}>Click Here</button>


    </>
  )
}
export default App;