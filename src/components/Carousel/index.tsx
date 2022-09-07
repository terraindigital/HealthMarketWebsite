import React, { FC, ReactNode, Children, useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

// Styles
import 'swiper/css';
import {
  Wrapper
} from './styles';

// Components
import CarouselNav from './CarouselNav';

interface Props {
  children: ReactNode
}

const Carousel: FC<Props> = ({ children }) => {
  // use swiper
  const swiper = useSwiper();
  const [current, setCurrent] = useState(0);

  return (
    <Wrapper>
      <Swiper
        modules={[Navigation, Pagination]}
        spacebetween={34}
        centeredSlides={true}
        centeredSlideBounds={true}
        onSlideChange={() => console.log('changed')}
        allowTouchMove={true}
        pagination={{
          el: '.carousel-pagination',
          clickable: true,
          renderBullet: (index, className) => {
            return '<div class="' + className + '"></div>';
          }
        }}
        breakpoints={{
          620: {
            slidesPerView: 1,
            slidesPerGroupAuto: false,
            centeredSlides: false,
            centeredSlidesBounds: false
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            slidesPerGroupAuto: true,
            centeredSlides: false,
            centeredSlidesBounds: false
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            slidesPerGroupAuto: true,
            centeredSlides: false,
            centeredSlidesBounds: false
          },
          1920: {
            slidesPerView: 4,
            slidesPerGroup: 4,
            slidesPerGroupAuto: true,
            centeredSlides: false,
            centeredSlidesBounds: false
          }
        }}

        onTouchEnd={(swiper) => {
          setTimeout(() => {
            setCurrent(new Date().getTime());
          }, 100);
        }}

        onResize={(swiper) => {
          setCurrent(new Date().getTime());
        }}
      >
        {
          Array.isArray(children) ? (
            Children.map(children, (child: ReactNode) => (<SwiperSlide>{child}</SwiperSlide>))
          ) : ({children})
        }
        <div className="hide-at-mobile">
          <CarouselNav current={current} count={children.length / 3}/>
        </div>
      </Swiper>  
    </Wrapper>
  )
};

export default Carousel