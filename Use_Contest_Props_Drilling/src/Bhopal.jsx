import { useContext } from "react";
import { userContext } from "./App";

const Bhopal=()=>{
    const {user, setuser}= useContext(userContext);
    return(
        <>
<h1> Welcome to bhopal : Name : {user}</h1>
<button onClick={()=>{setuser("Nisha")}}>Click</button>
        </>
    )
}
export default Bhopal;