import { useState } from "react";

const Color=()=>{
    const [color, setColor]=useState("red");

    return(
        <>
<h1 style={{color:color}}>My Favourite Color : {color}</h1>
<button onClick={()=>{setColor("Green")}}>Green</button>
<button onClick={()=>{setColor("Blue")}}>Blue</button>
<button onClick={()=>{setColor("Aqua")}}>Aqua</button>
<button onClick={()=>{setColor("Pink")}}>pink</button>

        </>
    )
}
export default Color;