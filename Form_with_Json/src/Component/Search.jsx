import { useState } from "react";
import axios from "axios";
import  Table  from "react-bootstrap/Table";
const Search=()=>{
    const [rollno,setRollno]=useState("");
    const [mydata, setMydata] = useState([])

    const mySearch=()=>{
        let url=`http://localhost:3000/student/?rollno${rollno}`
        axios.get(url).then((res)=>{
            setMydata(res.data);
        })
    }
    const ans=mydata.map((key)=>{
        return<>
            <tr>
                <td>{key.rollno}</td>
                <td>{key.name}</td>
                <td>{key.ctiy}</td>
                <td>{key.fees}</td>
            </tr>
        </>
    })
    return(
        <>
        {/* Qusri string json url/?name= */}
        {/* http://localhost:3000/student/?name=deepika */}
<h1>This is Search Page</h1>
Enter Rollno : <input type="text" value={rollno} onChange={(e)=>{setRollno(e.target.value)}} />
<button onClick={mySearch}>Search</button>
<hr />

<Table striped bordered hover>
    <thead>
    <tr>
        <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</Table>
 
        </>
    )
}
export default Search;