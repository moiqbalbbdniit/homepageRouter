import { Outlet } from "react-router-dom"
import Footer from "./footer/footer"
import Header from "./header/Header"




function App() {

    return (
      <>
        <Header/>
        <Outlet/>
        <Footer/>        
      </>
    )
  }
  
  export default App
  