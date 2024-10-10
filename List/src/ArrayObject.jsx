

const student=[
    {
        "rollno":121,
    "name":"sachin",
    "city":"Bhopal"
    },
    {
        "rollno":122,
    "name":"vipin",
    "city":"indore"
    },
    {
        "rollno":123,
    "name":"sunil",
    "city":"Jablpur"
    }
]

const ans=student.map((key)=>{
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

const ArrayObject=()=>{
    return(
        <>
    <table border="1" >
<tr>
        <th>Roll No</th>
        <th>Name</th>
        <th>City</th>
        </tr>
        {ans}
    </table>
        </>
    )
}
export default ArrayObject;