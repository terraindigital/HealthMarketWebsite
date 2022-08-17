import React, { FC } from "react";

import { useSwiper } from 'swiper/react';
// Styles
import {
  Wrapper,
  Prev,
  Next } from "./styles"

interface Props {
  count: number,
  current: number
}

const CarouselNav: FC<Props> =  ({count, current }) => {
  // create swiper object
  const swiper = useSwiper();
  return (
    <Wrapper className="carousel-nav">
      <Prev onClick={() => swiper.isBeginning ? swiper.slideTo(100) : swiper.slidePrev()} />
        <Wrapper className="carousel-pagination">
        </Wrapper>
      <Next onClick={() => swiper.isEnd ? swiper.slideTo(0) : swiper.slideNext() } />
    </Wrapper>
  )
}

export default CarouselNav