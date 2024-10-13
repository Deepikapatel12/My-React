const App=()=>{
  // without rgument
  const display=()=>
  {
    alert("this is my event");
  }

  // with argument
  const myName =(nm)=>{
    alert(`My Name Is : ${nm}`)
  }

  // event object to find what type of object 
const cybrom=(course, e)=>{
  alert(`My Course Is : ${course} Event Object : ${e.type}`);
}
const myName1=(nm, b)=>{
  let Name= b.target.name;
  let val= b.target.value;
  alert("Name : "+ Name + " Value :"+ val);
}

const textboxVal=()=>{
  let name =e.target.value;
  let value=e.target.value;
  alert("Name : "+ name + " value : "+ value);
}

  return(
    <>
  <h1>Welcome to React Event</h1>
  {/* without argument */}
  <button onClick={display}>Click here</button>
<br /><br />
{/* with argument */}
  <button onClick={()=>{myName("Deepika Patel")}}>Show Name</button>
  <br/><br/>

  {/* event object  */}
  <button onClick={(e)=>{cybrom("FullStack....!!!", e)}}>Click Here</button>
  <br/>
  <br/>
  <button name="btn1" value="mybtn" onClick={(b)=>{myName1("Raj", b)}}>Click Here</button>
  <br/><br/>
  Enter City : <input type="text" name="city" value="bhopal"
                        onClick={textboxVal}/>
    </>
  )
}
export default App;