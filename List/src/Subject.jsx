const Subject=()=>{


    const subject=["PHP","Java","Python","Html"];

// secont type
    const ans1=subject.map(a =><li>{a}</li>)

    const ans=subject.map((key)=>{
        return(
            <>
                <li>{key}</li>
            </>
        )
    })

    // third type
    const ans3=subject.map(function(data){
        return(
            <>
                <li>{data}</li>
            </>
        )
    })


    return(
        <>
<h1>Subject Data</h1>
<ol>
    {ans}
</ol>
<ol>
    {ans1}
</ol>
<ol>
    {ans3}
</ol>
        </>
    )
}
export default Subject;