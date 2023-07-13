

import React, {CSSProperties, FC, ReactNode} from "react"

// Styles
import { Wrapper, Img, Inner } from "./styles"

interface Props {
  image: String,
  mobileImage?: String,
  bgColor?: String,
  classes?: String,
  centered?: boolean,
  boxed?: boolean,
  half?: boolean,
  open?: boolean,
  color?: string,
  children: ReactNode
  wrapperStyle?: CSSProperties
  desktopImgStyle?: CSSProperties
  mobileImgStyle?: CSSProperties
  innerStyle?: CSSProperties
}

const Hero: FC<Props> = ({ image, mobileImage, bgColor, classes, centered, boxed, half, open, color, children, desktopImgStyle, mobileImgStyle, wrapperStyle, innerStyle }) => {
  let classNames = "hero"
  if (classes) { classNames += " " + classes}
  if (centered) { classNames += " centered" }
  if (boxed) { classNames += " boxed" }
  if (half) { classNames += " half" }
  if (open) { classNames += " open" }
  if (color != null) { classNames = classNames + " " + color }

  return (
    <Wrapper className={classNames} background={bgColor} style={wrapperStyle}>
      <Img className={(mobileImage) ? "hide-at-mobile" : ""} src={image} alt="Hero" style={desktopImgStyle}/>
      {(mobileImage) ? (
        <Img className="show-at-mobile" src={mobileImage} alt="Hero" style={mobileImgStyle} />
      ) : null}
      <Inner className={(!centered) ? "half" : ""}>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Hero