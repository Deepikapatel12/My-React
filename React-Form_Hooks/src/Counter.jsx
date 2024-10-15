import { useState } from "react";
const Counter=()=>{
    const [cnt, setCnt]=useState(0);
    return(
        <>
<h1>Counter App</h1>
<h1>Count : {cnt}</h1>
<button onClick={()=>{setCnt(cnt+1)}}>Increment</button>
<button>Decrement</button>
        </>
    )
}
export default Counter;