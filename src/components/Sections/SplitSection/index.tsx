import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper } from "./styles";

interface Props {
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

const SplitSection: FC<Props> = ({ color, children}) => {
  const bgColor = switchBgColor(color)

  return (
    <Wrapper backgroundColor={bgColor} className={`section ` + color}>
      {children}
    </Wrapper>
  )
};

export default SplitSection