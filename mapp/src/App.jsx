import Design from "./Design";
import EmpData from "./EmpData";
import EmpDesigh from "./EmpDesign";
const student=[
  {
    "rollno":121,
    "name":"Deepika",
    "city":"indore"
  },
  {
    "rollno":122,
    "name":"Deepa",
    "city":"Bhopal"
  },
  {
    "rollno":123,
    "name":"Gauri",
    "city":"jabalpur"
  },
  {
    "rollno":124,
    "name":"Deepika",
    "city":"indore"
  },
  {
    "rollno":125,
    "name":"Deepika",
    "city":"indore"
  }
]

const ans1 = student.map((key)=> <Design rno={key.rollno} nm={key.name} ct={key.city}  />)

  const ans2 = EmpData.map((key)=><EmpDesigh eno={key.eno} nm={key.name} dpt={key.dept} sal={key.salary}  />)


const ans = student.map((key)=>{
  return(
    <>
      <tr>
        <td>{key.rollno}</td>
        <td>{key.name}</td>
        <td>{key.city}</td>
      </tr>
    </>
  )
})

const App=()=>{
  return(
    <>
  <table border="1">
  <tr>
    <th>Rollno</th>
    <th>Name</th>
    <th>City</th>
    </tr>
    {ans}
  </table>
<br/>
<br/>
{/* second type with props second file is Design.jsx */}

<table border="1">
<tr>
  <th>RollNo</th>
  <th>Name</th>
  <th>City</th>
</tr>
{ans1}
</table>

<br/>
<br/>
<table border="1">
  <tr>
    <th>Employee Number</th>
    <th>Name</th>
    <th>Department Number</th>
    <th>Salary</th>
  </tr>
  {ans2}
</table>
    </>
  )
}
export default App;