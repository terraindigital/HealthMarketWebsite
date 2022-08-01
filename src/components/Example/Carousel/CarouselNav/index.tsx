import React, { FC } from "react";

// Styles
import {
  Wrapper,
  Prev,
  Next,
  Dot } from "./styles"

interface Props {
  count: number
}

const CarouselNav: FC<Props> = ({ count }) => {
  const renderDots = (num) => {
    const row = []
    for (var i=0; i < num; i++) {
      row.push(<Dot/>)
    }
    return row
  }

  return (
    <Wrapper>
      <Prev/>
        <Wrapper>
          {renderDots(count)}
        </Wrapper>
      <Next/>
    </Wrapper>
  )
}

export default CarouselNav