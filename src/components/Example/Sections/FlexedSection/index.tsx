import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper, Heading, Inner } from "./styles";

interface Props {
  heading: String,
  color: String,
  children: ReactNode
}

const switchBgColor = (bgColor) => {
  switch (bgColor) {
    case 'primary':
      return "#F3FAFD"
    case 'accent':
      return "#F1FBEA"
    case 'dark':
      return "#4D4D4D"
    default:
      return "#FFFFFF"
  }
}

const FlexedSection: FC<Props> = ({ heading, color, children}) => {
  const bgColor = switchBgColor(color)

  return (
    <Wrapper backgroundColor={bgColor}>
      <Heading>
        <h1>{heading}</h1>
      </Heading>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
};

export default FlexedSection