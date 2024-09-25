import Cybrom from "./Cybrom";
import Footer from "./Footer.jsx";
import Header from "./Header";
import MyData from "./MyData";

const App=()=>{
  return(
    <>
      <h1>Application Form</h1>
      Enter Name: <input type="text"/>
      <br/>
      Enter City: <input type="text"/>
      <Cybrom/>
      <Header/>
      <Footer/>
      <MyData/>
    </>
  )
}
export default App;