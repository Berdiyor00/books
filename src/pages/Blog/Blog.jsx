import React from 'react'
import book from "../../assets/headerImg/kitob-bg.png"
import Nav from '../../layout/nav/Nav'
import Footer from '../../layout/footer/Footer'
import Books from '../../components/Books/Books'

const Blog = () => {
  return (
    <div>
      <Nav main_title={"blog mybook"} text={"lightweight article where discussing matters relating to the book"} image={book} />
       <div className='blog'>
          <div className='heroContainer'>
            <Books className2={'blog_books'} className3={'blog_books_box'}  limit={6} limitP={130}  btn={'btn_home'} star={'star_none'} />
          </div>
       </div>
       <Footer/>
    </div>
  )
}

export default Blog