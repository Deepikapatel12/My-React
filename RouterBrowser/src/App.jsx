import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
// import Layout from "./Layout";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import AboutCompany from "./AboutCompany";
import AboutProduct from "./AboutProduct";
import AboutService from "./AboutService";
const App=()=>{
  return(
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>} />
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}>
          <Route index element={<AboutCompany/>} />
             <Route path="abtcompany" element={<AboutCompany/>} />
             <Route path="abtproduct" element={<AboutProduct/>} />
             <Route path="abtservice" element={<AboutService/>} />
          </Route>
          <Route path="contact" element={<Contact/>}/>

          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;