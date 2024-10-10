import ArrayObject from "./ArrayObject";
import Subject from "./Subject";

const name = ["ranju","sanju", "manju","sanju"];
const App=()=>{
  const ans=name.map((key)=>{
    return(
      <>
        <h1>{key}</h1>
      </>
    )
  })
  return(
    <>
  <h1>Hello world</h1>
  {ans}
  <Subject />
  <ArrayObject />
    </>
  )
}
export default App;