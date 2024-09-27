import { Link, Outlet } from "react-router-dom";
const Layout=()=>{
    return(
        <>
        <hr size="4" color="black" />
        <Link to="home">Home</Link>  |
        <Link to="about">About</Link>  |  
        <Link to="contact">Contact</Link>  |  
        <hr size="4" color="black" />

{/* outletm jo new page ate h unka contend ya bo page dikhte h show hote h */}

        <Outlet/>
        <hr size="4" color="black" />

            www.google.com
        </>
    )
}
export default Layout;