import { useContext, useState } from "react";
import { colorContext } from "./App";

const Cybrom = () => {
    const [color, setColor] = useContext(colorContext);
    const [val, setVal] = useState("");
    return (
        <>
            Enter Color : <input type="text" value={val} onChange={(e) => setVal(e.target.value)} />
            <button onClick={() => setColor(val)}>Click Here</button>
            <div style={{ width: "200px", height: "200px", backgroundColor: color }}></div>
        </>
    )
}

export default Cybrom;
