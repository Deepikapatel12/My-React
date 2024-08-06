import { createContext, useState } from "react";
import Cybrom from "./Cybrom";

const colorContext = createContext();

const App = () => {
  const [color, setColor] = useState("blue");
  return (
    <>
      <h1>Welcome</h1>
      <colorContext.Provider value={[color, setColor]}>
        <Cybrom />
      </colorContext.Provider>
    </>
  );
}

export default App;
export { colorContext };
