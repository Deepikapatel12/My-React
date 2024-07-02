
// MAP METHOD
const name=["sanju","manju","ranju","anju","dkjd"]
const mynm=name.map((key)=>{
    return(
        <>
            <h1>{key}</h1>
        </>
    )
});
const ans=students.map((key1)=>{
    return(
      <>
        
        <tr>
          <td>{key1.rollno}</td>
          <td>{key1.name}</td>
          <td>{key1.city}</td>
        </tr>
      </>
    )
  });
const App=()=>{
    return(
        <>
            <h1>Welcome to map method</h1>
            {mynm}

            <table border="1" width="600">
    <tr>
      <th>Roll NO </th>
      <th>Name</th>
      <th>City</th>
    </tr>
    {ans}
  </table>
            
        </>
    )
}
export default App;




// =================================================================================================================================
