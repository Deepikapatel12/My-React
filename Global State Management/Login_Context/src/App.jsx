import AuthUser from "./AuthUser";
import UnAuthApp from "./UnAuthApp";
import { useContext } from "react";
import { userContext } from "./LoginContext";

const App=()=>{
  const {user}= useContext(userContext);
  return(
    <>
    {user.auth? <AuthUser/>: <UnAuthApp/>}
    </>
  )
}
export default App; 