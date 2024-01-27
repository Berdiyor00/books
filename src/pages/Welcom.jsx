import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../pages/welcome.scss';
import Welcomeimg from "./../assets/headerImg/welcome.png"
import Welcomeimg2 from "./../assets/headerImg/bacground2.png"
import booksimg from "../assets/headerImg/books.png"

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';
import { NavLink } from 'react-router-dom';

export default function App() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>

            <div className='background'>
                <div className="constainer">
                    <div className="imgs">

               <img src={Welcomeimg} alt="" className='mt-[-90px]' />
               <h2>Only Books Can Help You</h2>
               <p className='max-w-[300px] md:max-w-[100%] text-center ml-[100px] md:ml-0' >Books can help you to increase your knowledge and become more successfully.</p>
                    </div>
                </div>
            </div>

        </SwiperSlide>
        <SwiperSlide>   <div className='background'>
                <div className="constainer">
                    <div className="imgs">

               <img src={ Welcomeimg2} alt="" className='mt-[-90px] imgsa' />
               <h2>Only Books Can Help You</h2>
               <p className='max-w-[300px] md:max-w-[100%] text-center ml-[100px] md:ml-0' >Books can help you to increase your knowledge and become more successfully.</p>
                    </div>
                </div>
            </div></SwiperSlide>

        <SwiperSlide>
          
            <NavLink to='/home'>
            <img src={booksimg} alt={booksimg}  className='imgback'/>
            <div className="w-[230px] h-[55px] bg-red-400 rounded-[11px] md:ml-[110px] ml-[70px] mt-[-10px] pt-[15px]">
            Get Started Now
            </div>
            </NavLink>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
