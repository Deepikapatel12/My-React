//======== on click events function======

const App=()=>{
  // without parameter
  const display=()=>{
    alert("WEllcome to cybrom")
  }

  // with parameter
  const myname=(fnm, snm)=>{
    alert("My Name "+fnm + " "+ snm);
  }

  const myAdd=(n1, n2)=>{
    alert(n1+n2);
  }

  // event object================
const myName=(nm, e)=>{
  alert("My Name : "+ nm  + "Type :" +e.type)
}

const myDisplay=(a)=>{
  alert("Welcome "+a.target.name + " " + a.target.value + " " + a.target.type)
}


const handleClick=(c)=>{
let name=c.target.name;
let val=c.target.value;
alert("Name :" + name + " value : "+ val);
}

  return(
    <>
   <h1>Hello This Is React Class </h1>
   <button  onClick={display}>click here</button>
   <br/><br/>
   {/* with parameter */}
   <button  onClick={()=>{myname("Depika", "Patel")}}>click here</button>
   <br/><br/>
   <button  onClick={()=>{myAdd(100,300)}}>click here</button>
<br/><br/>
{/* event object is e */}
   <button  onClick={(e)=>{myName("Deepika", e)}}>click here</button>
<br/>
<br/>
   <button  onClick={(e)=>{myName("Deepika", e)}}>click here</button>
<br/><br/>
   <button name="btn1" value="my btn" onClick={myDisplay}>click here</button>
<br/><br/>
   <input type="text" name="city" value="bhopal" onClick={handleClick} />



    </>
  )
}
export default App;