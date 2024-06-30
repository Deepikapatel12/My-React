const age=24;
let name="Deepika";
const sub=<ol>
  <li>PHP</li>
  <li>JAVA</li>
  <li>Oracal</li>
  <li>ASP</li>
</ol>
function App() {
  

  return (
    <>
      <h1>Hello i am {age} year old!!!! my name {name}</h1>
      <h1>hello i am {age*3+4} year old!!! my name {name}</h1>
      <h1> My Subject : {sub}</h1>
    </>
  )
}

export default App
