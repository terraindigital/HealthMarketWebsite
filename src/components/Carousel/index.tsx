import React, { FC, ReactNode } from 'react';

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

  if (type === "reviews") {
    return (
      <Wrapper className={type + ` ` + bgStyle}>
        <Reviews>
          {children}
        </Reviews>
        <CarouselNav count={children.length} />
      </Wrapper>
    )
  } else if (type === "tiles") {
    return (
      <Wrapper className={type}>
        <Tiles>
          {children}
        </Tiles>
        <CarouselNav count={children.length} />
      </Wrapper>
    )
  }
};

export default Carousel