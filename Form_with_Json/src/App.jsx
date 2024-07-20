// crud operation

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Component/Home";
import Insert from "./Component/Insert";
import Display from "./Component/Display";
import Search from "./Component/Search";
import Update from "./Component/Update";
import Contact from "./Component/Contact";
const App=()=>{
  return(
    <>
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="home" element={<Home/>}/>
    <Route path="insert" element={<Insert/>}/>
    <Route path="display" element={<Display/>}/>
    <Route path="search" element={<Search/>}/>
    <Route path="update" element={<Update/>}/>
    <Route path="contact" element={<Contact/>}/>

    </Route>
  </Routes>
</BrowserRouter>
    </>
  )
}
export default App;