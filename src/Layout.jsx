import { Outlet } from "react-router-dom"
import Footer from "./footer/Footer.jsx"
import Header from "./header/Header.jsx"




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
  