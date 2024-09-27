import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import NoPage from "./pages/NoPage";

const App=()=>{
  return(
    <>
    <center>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="*" element={<NoPage/>}/>


        </Route>
      </Routes>
    </BrowserRouter>
    </center>
    </>
  )
}
export default App;

// to install react router dom command is ====   npm i react-router-dom