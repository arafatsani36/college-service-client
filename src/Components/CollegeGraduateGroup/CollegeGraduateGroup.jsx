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
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

const CollegeGraduateGroup = () => {
    return (
        <div>
            <h2 className="text-lg text-center mt-5 font-semibold">College Graduate's Group</h2>

        <div className="max-w-7xl mx-auto my-10">
        <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
            clickable: true,
            }}
            breakpoints={{
            640: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 5,
                spaceBetween: 50,
            },
            }}
            modules={[Pagination]}
            className="mySwiper"
        >
            <SwiperSlide>
                <img src={fast} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={secend} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={threed} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={four} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={five} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={six} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={seven} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={eight} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={nine} alt="" />
            </SwiperSlide>
        </Swiper>
        </div>
        </div>
    );
};

export default CollegeGraduateGroup;