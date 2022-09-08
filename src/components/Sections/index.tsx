import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper, Heading, Inner } from "./styles";

interface Props {
  color: String,
  children: ReactNode
  heading?: String,
  subheading?: String,
  guarantee?: ReactNode,
  classes?: String,
  page?: String
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

const Section: FC<Props> = ({ heading, subheading, guarantee, classes, page, color, children}) => {
  const bgColor = switchBgColor(color)

  let classList = "section";
  if (page) { classList += ` ${page}`}
  if (classes) { classList += ` ${classes}`}

  return (
    <Wrapper backgroundColor={bgColor} className={classList}>
      {(heading) ? (
        <Heading className="heading">
          <h2>{heading}</h2>
          <h4>{subheading}</h4>
          {(guarantee) ? guarantee : null}
        </Heading>
      ) : null}
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
};

export default Section