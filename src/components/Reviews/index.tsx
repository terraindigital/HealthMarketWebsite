import React, { FC, ReactNode} from 'react';

// Styles
import { Wrapper } from "./styles"

// Components

interface Props {
  background?: String,
  children: ReactNode
}

const Reviews: FC<Props> = ({ background, children }) => {
  const bgStyle = (background === "half") ? "half-background" : "full-background"

  return (
    <Wrapper className={bgStyle}>
      {children}
    </Wrapper>
  )
};

export default Reviews