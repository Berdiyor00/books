
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
       <div className='heroContainer flex justify-between'>
          <span className='span'></span>
          <p>2020 MY<span>BOOK</span></p>
          <ul className="flex gap-7">
                <Link to="/Home"><li className="text-lg leading-5 font-medium text-white" >Explorer</li></Link>
                <Link to="/shop"><li className="text-lg leading-5 font-medium text-white">Shop</li></Link>
                <Link to="/blog"><li className="text-lg leading-5 font-medium text-white">Blog</li></Link>
           </ul>
       </div>
    </footer>
  )
}

export default Footer