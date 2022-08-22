import React, { FC, useState, useEffect } from "react";

import { useSwiper } from 'swiper/react';
// Styles
import {
  Wrapper,
  Prev,
  Next,
  Dot } from "./styles"

interface Props {
  count: number,
  current: number, 
}

const CarouselNav: FC<Props> =  ({count, current}) => {
  // create swiper object
  const swiper = useSwiper();
  const [active, setActive] = useState(0);
  
  const renderDots = (num) => {
    const row = []
    for (let i: number=0; i < num; i++) {
      row.push(<Dot className={(active % num) == i ? "swiper-pagination-bullet-active" : ""} onClick={() => {       
        swiper.slideTo(i);
        setActive(i);
    }} />)
    }
    return row
  }


  useEffect(() => {
    if (active != swiper.activeIndex) {
      if (swiper.slides.length > active) {
        swiper.el.querySelector(".swiper-slide-active")?.classList.remove("swiper-slide-active");
        swiper.slides[active].classList.add("swiper-slide-active");
      }
    }
  }, [active])

  useEffect(() => {
    if (swiper.touches.diff > 0) {
      if (active > swiper.activeIndex) {
        setActive(swiper.activeIndex);
      }
    }

    console.log(active);
    if (swiper.touches.diff < 0) {
      if (active >= swiper.activeIndex && count > active + 1) {
        setActive( active + 1);
      } else {
        setActive(swiper.activeIndex);
      }
    }
  }, [current]);

  const slidePrev = () => {
    let prev = (active + count - 1) % count;    
    swiper.slideTo(prev);
    setActive(prev);
  }

  const slideNext = () => {
    let next = active + 1;
    next = next % count;
    swiper.slideTo(next);
    setActive(next);
  }
  return (
    <Wrapper className="carousel-nav">
      <Prev onClick={() => count > 0 ? slidePrev() : swiper.slidePrev()} />
        <Wrapper className="carousel-pagination">
          {count > 0 ? renderDots(count) : <></>}
        </Wrapper>
      <Next onClick={() => count > 0 ? slideNext() : swiper.slideNext() } />
    </Wrapper>
  )
}

export default CarouselNav