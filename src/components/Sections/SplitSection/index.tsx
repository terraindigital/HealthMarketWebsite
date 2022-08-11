import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper } from "./styles";

interface Props {
  align?: String,
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
    case 'muted':
      return "#F6F4F2"
    default:
      return "#FFFFFF"
  }
}

const SplitSection: FC<Props> = ({ align="center", color, children}) => {
  const alignment = "align-" + align
  const bgColor = switchBgColor(color)

  return (
    <Wrapper backgroundColor={bgColor} className={`split-section section ` + color + ` ` + alignment}>
      <div className="inner">
        {children}
      </div>
    </Wrapper>
  )
};

export default SplitSection