import { useState, useEffect } from "react";
import axios from "axios";
import  Table from "react-bootstrap/Table";
import edtimg from "../images/edit.png";
import delimg from "../images/delet.png";
const Update=()=>{
    const [mydata, setMydata]=useState([]);

    const loadData=()=>{
        let url="http://localhost:3000/student";
        axios.get(url).then((res)=>{
            setMydata(res.data)
        })
    }
    useEffect(()=>{
        loadData();
    }, [])
    const myDel=(myid)=>{
        let url=`http://localhost:3000/student/${myid}`;
        axios.delete(url).then((res)=>{
            alert("Record Deleted..!!!!");
            loadData();
        })
    }
    const ans=mydata.map((key)=>{
        return(
            <>
                 <tr>
            <td>{key.rollno}</td>
            <td>{key.name}</td>
            <td>{key.city}</td>
            <td>{key.fees}</td>
            <td>
                <img src={edtimg} width="30" height="30" />
                <a href="#">
                <img src={delimg} width="30" height="30" onClick={()=>{myDel(key.id)}} />
                </a>
            </td>
        </tr>
            </>
        )
    })
    return(
        <>
<h1>This is Update Pagwe</h1>
<Table striped bordered hover>
    <thead>
    <tr>
        <th>Rollno</th>
        <th>Name</th>
        <th>City</th>
        <th>Fees</th>
        <th> </th>
        </tr>
    </thead>
    <tbody>
        {ans}
    </tbody>
</Table>
        </>
    )
}
export default Update; 