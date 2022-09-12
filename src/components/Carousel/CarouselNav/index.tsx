import React, { FC, useState, useEffect } from "react";
import { useSwiper } from 'swiper/react';

// Styles
import {
  Wrapper,
  Prev,
  Next,
  Dot
} from "./styles"

interface Props {
  count: number,
  current: number
}

const CarouselNav: FC<Props> =  ({count, current}) => {
  // create swiper object
  const swiper = useSwiper();
  const [active, setActive] = useState(0);
  
  const renderDots = (num) => {
    const row = []
    for (let i: number=0; i < num; i++) {
      row.push(<Dot className={(active % num) == i ? "swiper-pagination-bullet-active" : ""} onClick={() => {
        swiper.slideTo((i % 3) > 0 ? (i * 3) : 0);
        setActive(i);
      }} />)
    }
    return row
  }

  const slidePrev = () => {
    let prev = (active - 3) >= 0 ? active - 3 : 9;
    console.log("prev: " + prev);
    swiper.slideTo(prev);
    setActive(prev);
  }

  const slideNext = () => {
    let next = (active + 3) <= 9 ? active + 3 : 0;
    console.log("next: " + next);
    swiper.slideTo(next);
    setActive(next);
  }

  return (
    <Wrapper className="carousel-nav">
      <Prev onClick={() => slidePrev()} />
      <Wrapper className="carousel-pagination">
        {count > 0 ? renderDots((count / 3)) : <></>}
      </Wrapper>
      <Next onClick={() => slideNext() } />
    </Wrapper>
  )
}

export default CarouselNav