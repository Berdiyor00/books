import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";
import { fetchData } from "../../reducer/reducer";
import { useDispatch,useSelector } from "react-redux";
import { useEffect } from "react";

const SiderBar = () => {
  const dispatch = useDispatch();
  let [isOpen,setIsOpen] = useState(false);
  const [category, setCategory] = useState("")
  const deta = useSelector((state) => state.user?.users);

  useEffect(() => {
    if(category){
      dispatch(fetchData(category)())
    }
    // dispatch(fetchData('design')());
  }, [category, dispatch]);
  
  const handle = (e) => setCategory(e)

 console.log(category)

  return (
   <div className="side_bar">
    <div className={`side_ba ${isOpen ? "show" : "hide"}`}>
      <div className="show_btn"> <h3 className='font-bold text-2xl leading-7 pb-6'>Book by Genre</h3>
      <button onClick={() => setIsOpen(!isOpen)} className="icon">{isOpen? <GoArrowLeft/>:<GoArrowRight/>}</button>
    </div>
       <ul>
         <li className='pb-4 font-normal text-xl cursor-pointer' onClick={({target}) => handle(target.innerText)}>All Genres</li>
         <li className='pb-4 font-normal text-xl cursor-pointer' onClick={({target}) => handle(target.innerText)}>Business</li>
         <li className='pb-4 font-normal text-xl cursor-pointer' onClick={({target}) => handle(target.innerText)}>Science</li>
         <li className='pb-4 font-normal text-xl cursor-pointer' onClick={({target}) => handle(target.innerText)}>Fiction</li>
         <li className='pb-4 font-normal text-xl cursor-pointer' onClick={({target}) => handle(target.innerText)}>Philosophy</li>
         <li className='pb-4 font-normal text-xl cursor-pointer' onClick={({target}) => handle(target.innerText)}>Biography</li>
       </ul>
       <div className='liner'></div> 
       <div>
           <h3 className='font-bold text-2xl leading-7 pb-6 '>Recomendations</h3>
           <ul>
              <li className='pb-4 font-normal text-xl cursor-pointer'  onClick={({target}) => handle(target.innerText)}>Artist of the Month</li>
              <li className='pb-4 font-normal text-xl cursor-pointer'  onClick={({target}) => handle(target.innerText)}>Book of the Year</li>
              <li className='pb-4 font-normal text-xl cursor-pointer'  onClick={({target}) => handle(target.innerText)}>Top Genre</li>
              <li className='pb-4 font-normal text-xl cursor-pointer'  onClick={({target}) => handle(target.innerText)}>Trending</li>
           </ul>
       </div>
    </div>
   </div>
  )
}

export default SiderBar


