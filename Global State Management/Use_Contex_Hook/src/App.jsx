import { useState, createContext } from "react"
import Comp1 from "./Comp1";

const userContext= createContext();
const App=()=>{
    const [user, setUser]=useState("Deepika");
    return(
        <>
            <h1>Welcome To Cybrom Bhopal : {user}</h1>
            <userContext.Provider value={{user}}>
                <Comp1/>
            </userContext.Provider>
        </>
    )
}
export default App;
export {userContext};