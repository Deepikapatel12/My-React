import { useContext } from "react";
import { userContext } from "./App";
const Comp5=()=>{
    const {user}=useContext(userContext);
    return(
        <>
            <h1>Component 5: {user}</h1>
        </>
    )
}
export default Comp5;