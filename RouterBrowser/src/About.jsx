import { Link } from "react-router-dom";
const About=()=>{
    return(
        <>
            <h1>About page</h1>
            <h2>Welcome to about company</h2>
            <div style={{display:"flex"}}>
                <div>
                    <Link to="abtcompany">About Company</Link>
                    <br/><br/>
                    <Link to="abtproduct">About Company</Link>
                    <br/><br/>
                    <Link to="abtservice">About Company</Link>
                    <br/><br/>

                </div>
            </div>
        </>
    )
}
export default About;