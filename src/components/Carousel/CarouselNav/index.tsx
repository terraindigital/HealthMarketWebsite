import React, { FC } from "react";

import { useSwiper } from 'swiper/react';
// Styles
import {
  Wrapper,
  Prev,
  Next,
  Dot } from "./styles"

interface Props {
  count: number,
  current: number
}

const CarouselNav: FC<Props> =  ({count, current }) => {
  // create swiper object
  const swiper = useSwiper();

  const renderDots = (num) => {
    const row = []
    for (let i: number=0; i < num; i++) {
      row.push(<Dot className={(current % num)== i ? "active" : ""} onClick={() => swiper.slideTo(i)} />)
    }
    return row
  }
  return (
    <Wrapper className="carousel-nav">
      <Prev onClick={() => swiper.slidePrev() }/>
        <Wrapper>
          {renderDots(count)}
        </Wrapper>
      <Next onClick={() => swiper.slideNext() }/>
    </Wrapper>
  )
}

export default CarouselNav