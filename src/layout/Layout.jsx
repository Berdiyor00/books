
import { Outlet } from 'react-router-dom'
import Nav from './nav/Nav'
import Footer from './footer/Footer'
import girls from "../assets/headerImg/qiz-bg.png"

const Layout = () => {
  return (
    <div>
        <Nav main_title={"read and add your insight"} text={"find your favorite book and read it here for free"} image={girls} />
      <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout