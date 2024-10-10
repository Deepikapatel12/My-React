 import { Link,Outlet } from "react-router-dom";
const About=()=>{
    return(
        <>
    <table border="1" width="90%" align="center">
        <tr>
            <td width="20%">
                <Link to="aboutcompany">AboutCompany</Link>
                <br/>
                <br/>
                <Link to="aboutproduct">AboutProduct</Link>
            </td>
            <td width="20%">dsdsd</td>
        </tr>
    </table>
        </>
    )
}
export default About;