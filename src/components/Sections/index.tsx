import React, {FC, ReactNode} from 'react';

// Styles
import { Wrapper, Heading, Inner, OuterWrapper } from "./styles";

interface Props {
  color: String,
  children: ReactNode
  heading?: String,
  subheading?: String,
  guarantee: boolean,
  bestPrice?: ReactNode,
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

const Section: FC<Props> = ({ heading, subheading, guarantee, bestPrice, classes, page, color, children}) => {
  const bgColor = switchBgColor(color)

  let classList = "section";
  if (page) { classList += ` ${page}`}
  if (classes) { classList += ` ${classes}`}

  return (
      <OuterWrapper>
    <Wrapper backgroundColor={bgColor} className={classList}>
      <Heading className="heading">
        {(heading) ? (<h2>{heading}</h2>) : null}
        {(subheading) ? (<h4>{subheading}</h4>) : null}
        {(guarantee !== 'false') ? bestPrice : <></>}
      </Heading>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
      </OuterWrapper>
  )
};

export default Section
