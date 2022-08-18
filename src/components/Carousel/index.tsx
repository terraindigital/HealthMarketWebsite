import React, { FC, ReactNode, Children, useState } from 'react';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

// Swiper Styles
import 'swiper/css'

// Styles
import { Wrapper } from "./styles"
// Components
import Reviews from "../Reviews"
import Tiles from "../Tiles"
import CarouselNav from "./CarouselNav"

interface Props {
  type: String,
  background?: String,
  children: ReactNode
}

const Carousel: FC<Props> = ({ type, background, children }) => {
  const bgStyle = (background) ? ((background === "half") ? "half-background" : "full-background") : ""
  const [current, setCurrent] = useState(0);

  if (type === "reviews") {
    return (
      <Wrapper className={type + ` ` + bgStyle}>
        <Swiper 
        spaceBetween={0} slidesPerView={1}
        modules={[Pagination]}
        loop={true}
        pagination={{ 
          el: '.carousel-pagination',
          clickable: true,
          renderBullet: (index, className) =>  {
            return '<div class="' + className + '"></div>';
          }
        }}
        >
        <Reviews>
          {
          Array.isArray(children) ? (
            Children.map(children, (child: ReactNode) => <SwiperSlide>{child}</SwiperSlide>)
          ) : ({children})
          }
        </Reviews>
        <CarouselNav current={current} count={children.length}/>
        </Swiper>
      </Wrapper>
    )
  } else if (type === "tiles") {
    return (
      <Wrapper className={type}>
        <Swiper 
        spaceBetween={0} slidesPerView={2}
        centeredSlides={true}
        centeredSlidesBounds={true}
        modules={[Pagination]}
        pagination={{ 
          el: '.carousel-pagination',
          clickable: true,
          renderBullet: (index, className) =>  {
            return '<div class="' + className + '"></div>';
          }
        }}
        breakpoints={{
          768: {
            slidesPerView: 2
          },
          960: {
            slidesPerView: 3
          },
          1200: {
            slidesPerView: 4
          }
        }}
        onSlideChange={(swiper) => {
          console.log("current activeIndex", swiper.activeIndex);
          setCurrent(swiper.activeIndex);
        }}

        >
        <Tiles>
          {
          Array.isArray(children) ? (
            Children.map(children, (child: ReactNode) => <SwiperSlide>{child}</SwiperSlide>)
          ) : ({children})
          }
        </Tiles>
        <CarouselNav current={current} count={children.length}/>
        </Swiper>        
      </Wrapper>
    )
  }
};

export default Carousel