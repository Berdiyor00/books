import  { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, fetchSwiperData } from '../../reducer/reducer';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import { Autoplay } from "swiper/modules";
import Books from '../Books/Books';


const Swipper = () => {
    const goPage=useNavigate()
    const dispatch = useDispatch();
    const deta = useSelector((state) => state.user.swiperData);
  
    useEffect(() => {
      dispatch(fetchSwiperData("Lord of the rings")(), );
    }, [dispatch]);
  
    console.log(deta)
  return (
   <div className='slider bottom'>
     <div className="swipper">
        <h3 className='swipper_title'>Populer</h3>
      <Swiper
        // slidesPerView={4}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        data-aos="fade-up"
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 30,
            loop: true, 
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true, 
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true, 
          },
        }}
      >   
         
        {deta.map((user)=>(
             <SwiperSlide key={user.id} className="swiperSlide" onClick={()=>{goPage(`/home/${user?.id}`)}}>
               <div>
               <img className='swipper_img' src={user?.volumeInfo.imageLinks?.thumbnail} alt='books' />
               <h3>{user?.volumeInfo.title && user?.volumeInfo.title.slice(0,20)}...</h3>
               <p>by {user?.volumeInfo.authors}</p>
               </div>
           </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
     <Books title={"This new story"}  className={'recommend'} className2={'all_books2'} className3={'books'} limit={4} limitP={40}  btn={'btn_home'}/>
     <div className="swipper">
        <h3 className='swipper_title'>Which they like</h3>
      <Swiper
        // slidesPerView={4}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 600,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
        data-aos="fade-up"
        breakpoints={{
          350: {
            slidesPerView: 1,
            spaceBetween: 10,
            loop: true, 
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            loop: true, 
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 10,
            loop: true, 
          },
        }}
      >   
         
        {deta.map((user)=>(
             <SwiperSlide key={user.id} className="swiperSlide" onClick={()=>{goPage(`/home/${user?.id}`)}}>
               <div>
               <img className='swipper_img' src={user?.volumeInfo.imageLinks?.thumbnail} alt='books' />
               <h3>{user?.volumeInfo.title && user?.volumeInfo.title.slice(0,20)}...</h3>
               <p>by {user?.volumeInfo.authors}</p>
               </div>
           </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
   </div>
  )
}

export default Swipper