import { useContext } from "react";
import { courseContext } from "./App";
const Cybrom=()=>{
    const {course, setCourse}=useContext(courseContext);
    return(
        <>
            <h1>Welcome to Cybrom Bhopal : {course}</h1>
            <button onClick={()=>{setCourse("Java Developer...!!!!")}}>Click Here</button>
        </>
    )
}
export default Cybrom;