import React, { FC, ReactNode} from 'react';

// Styles
import { Wrapper } from "./styles"

// Components

interface Props {
  children: ReactNode
}

const Reviews: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
};

export default Reviews