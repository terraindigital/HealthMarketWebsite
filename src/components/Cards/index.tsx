import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper } from "./styles"

interface Props {
  openAtMobile?: boolean,
  children: ReactNode,
  relatedContent?: boolean
}

const Cards: FC<Props> = ({openAtMobile, children, relatedContent=false}) => {
  return (
    <Wrapper className={`cards ${(openAtMobile) ? `open-at-mobile` : ``} ${(relatedContent) ? `related-content` : ``}`}>
      {children}
    </Wrapper>
  )
};

export default Cards