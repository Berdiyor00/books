import Nav from '../../layout/nav/Nav'
import girls from "../../assets/headerImg/qiz-bg.png"
import Footer from '../../layout/footer/Footer'
import SiderBar from '../../components/SideBar/SiderBar'
import Books from '../../components/Books/Books'

const Shop = () => {
  return (
    <div>
      <Nav main_title={`appreciate your author's work`} text={"find your favorite book and read it here for free"} image={girls} />
      <div className='home_main'>
           <SiderBar/>
           <Books  className2={'shop_books'} className3={'shop_books_box'} limit={8} limitP={40} btn={'btn'} star={'star_none'} />
         </div>
      <Footer/>
    </div>
  )
}

export default Shop