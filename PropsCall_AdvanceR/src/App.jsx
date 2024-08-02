import { useState } from "react";
import Comp1 from "./Comp1";
const App=()=>{
  const [user, setUser]=useState("Deepika");
  return(
    <>
    <h1>Welcome To Cybrom : {user}</h1>
    {/* props deling (Drilling) nested component also called Toolkit  */}
    <Comp1 user={user}/>
    </>
  )
}
export default App; 