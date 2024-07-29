import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import TopNavbar from "./Components/TopNavbar";

const App=()=>{
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
         <Route path="home" element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
 <Layout/>
 <TopNavbar/>
    </>
  )
}
export default App;