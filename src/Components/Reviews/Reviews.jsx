// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';

const Reviews = () => {

    const[review, setReview] = useState([])
    useEffect(() => {
        fetch('review.json')
        .then(res => res.json())
        .then(data => setReview(data))
        
    },[])



    return (
        <div className='mt-10'>
            <h2 className="text-lg text-center mt-5 font-semibold">reviews and feedback</h2>
            <div className="max-w-7xl mx-auto my-5">
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

                {
                    review.map(r => <SwiperSlide key={r.id}>
                        <div>
                            <img className=' rounded-full' src={r.img} alt="" />
                        </div>
                        <div className='mt-4'>
                            <h2 className=' text-center my-4 text-lg font-bold secondary-text'>{r.name}</h2>
                            <p>{r.review}</p>
                            <p>Rating: {r.rating}</p>
    
                        </div>
                    </SwiperSlide>
                    )
                }
                
            </Swiper>
            </div>
        </div>
    );
};

export default Reviews;