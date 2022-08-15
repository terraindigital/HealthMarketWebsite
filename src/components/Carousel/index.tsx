import React, { FC, ReactNode, Children, useState } from 'react';

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

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
        loop={true}
        onSlideChange={(swiper) => {
          console.log(swiper.activeIndex);
          setCurrent(swiper.activeIndex);
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
        spaceBetween={0} slidesPerView={1}
        loop={true}       
        breakpoints={{
          620: {
            slidesPerView: 2
          },
          920: {
            slidesPerView: 3
          },
          1044: {
            slidesPerView: 4
          }
        }}
        onSlideChange={(swiper) => {          
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
        <CarouselNav current={current + 1} count={children.length}/>
        </Swiper>        
      </Wrapper>
    )
  }
};

export default Carousel