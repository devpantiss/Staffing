import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/mousewheel';
import 'swiper/css/pagination';
import { Mousewheel, Pagination } from 'swiper/modules';

const HorizontalScrollComponent: React.FC = () => {
    const swiperRef = useRef<any>(null);

    return (
        <div className="slider-container" style={{ height: '100vh', overflow: 'hidden' }}>
            <Swiper
                modules={[Mousewheel, Pagination]}
                spaceBetween={30}
                slidesPerView={1}
                pagination={{ clickable: true }}
                mousewheel={{
                    forceToAxis: true, // Enables vertical scroll only
                }}
                onReachEnd={() => {
                    // Enable normal scroll after the last slide
                    if (swiperRef.current) {
                        swiperRef.current.mousewheel.disable();
                    }
                }}
                onInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                {/* Slides */}
                <SwiperSlide>
                    <div className="slide-content">
                        <h2>Slide 1</h2>
                        <p>Building supply in 350+ schools...</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <h2>Slide 2</h2>
                        <p>Connecting it to demand in 23 states...</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="slide-content">
                        <h2>Slide 3</h2>
                        <p>Expanding across regions...</p>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default HorizontalScrollComponent;
