import { useState, createContext } from "react";
import Comp1 from "./comp1";
import Cybrom from "./Cybrom";
const userContext= createContext();
const myContext= createContext();

const App=()=>{
    const [user, setUser]= useState("Deepika");
    const [buser, setBuser]= useState("Deepa");
    return(
        <>

<h1> Welcome : {user}</h1>

<button onClick={()=>{setBuser("NaZneen")}}>Click</button>
<h1>Welcome : {buser}</h1>
<myContext.Provider value={{user}}>
<Comp1 />
<Cybrom />
</myContext.Provider>
        </>
    )
}
export default App;
export {myContext};
export {userContext};