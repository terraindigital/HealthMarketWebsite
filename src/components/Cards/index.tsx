import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper } from "./styles"

interface Props {
  openAtMobile?: boolean,
  children: ReactNode
}

const Cards: FC<Props> = ({openAtMobile, children}) => {
  return (
    <Wrapper className={`cards ${(openAtMobile) ? `open-at-mobile` : ``}`}>
      {children}
    </Wrapper>
  )
};

export default Cards