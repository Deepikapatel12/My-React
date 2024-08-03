import { createContext, useState } from "react"
import Collage from "./Collage";
const courseContext=createContext();
  
  const App=()=>{
    const [course, setCourse]=useState("Full Stack");
    return(
      <>
      <button onClick={()=>{setCourse("FrontEnd")}} >Change Course</button>
        <h1> My App Our Course : {course}</h1>
        <courseContext.Provider value={{course, setCourse}}>
          <Collage/>
        </courseContext.Provider>
      </>
    )
  }
  export default App;
  export {courseContext};