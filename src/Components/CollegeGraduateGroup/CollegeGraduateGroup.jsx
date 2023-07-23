import fast from "../../assets/1st.jpg" 
import secend from "../../assets/2nd.jpg"
import threed from "../../assets/3th.jpg" 
import four from "../../assets/4th.jpg" 
import five from "../../assets/5th.jpg" 
import six from "../../assets/6th.png" 
import seven from "../../assets/7th.jpg" 
import eight from "../../assets/8th.jpg" 
import nine from "../../assets/9th.avif"

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const CollegeGraduateGroup = () => {
    return (
        <div>
            <h2 className="text-lg text-center mt-5 font-semibold">College Graduate's Group</h2>

        <div className="max-w-7xl mx-auto my-5">

        <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <img className=" w-1/2" src={fast} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={secend} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={threed} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={four} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={five} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={six} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={seven} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={eight} alt="" />
        </SwiperSlide>
        <SwiperSlide>
        <img className=" w-1/2" src={nine} alt="" />
        </SwiperSlide>
      </Swiper>




        </div>
        </div>
    );
};

export default CollegeGraduateGroup;