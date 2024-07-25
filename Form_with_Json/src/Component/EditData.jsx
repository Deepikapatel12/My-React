import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
const EditData=()=>{

    // jo app m : k bd psss ki h bo he yha dena padta h value same name ki
    const {id}=useParams();

  const [mydata, setMydata]=useState({});

  const loadData=()=>{
    let api=`http://localhost:3000/student/${id}`
    axios.get(api).then((res)=>{
        setMydata(res.data)
    });
  }

  useEffect(()=>{
    loadData();
  }, [])

    return(
        <>
       <h1>Edit student Data : </h1>

     Enter Rollno : <input type="text"name="rollno" value={mydata.rollno} onChange={handleInput} />
     <br />
     Enter Name : <input type="text" name="name" value={mydata.name} onChange={handleInput}/>
     <br />
     Enter City : <input type="text" name="city" value={mydata.city} onChange={handleInput}/>
     <br />
     Enter Fees : <input type="text" name="fees " value={mydata.fees} onChange={handleInput}/>
     <br/>
     <button onClick={handleSubmit}>Data Save</button>

        </>
    )
}
export default EditData;