import React, {Children, FC, ReactNode} from 'react';

// Styles
import { Wrapper, Inner } from "./styles"

// Components
import CarouselNav from "./CarouselNav"

interface Props {
  background: String,
  children: ReactNode
}

const Carousel: FC<Props> = ({ background, children }) => {
  const bgStyle = (background === "full") ? "full-background" : "half-background"

  return (
    <Wrapper className={bgStyle}>
      <Inner>
        {children}
      </Inner>
      <CarouselNav count={children.length} />
    </Wrapper>
  )
};

export default Carousel