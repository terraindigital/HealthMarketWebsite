

import React, {CSSProperties, FC, ReactNode} from "react"

// Styles
import { Wrapper, Img, Inner } from "./styles"

interface Props {
  image: String,
  mobileImage?: String,
  bgColor?: String,
  centered?: boolean,
  boxed?: boolean,
  half?: boolean,
  color?: string,
  children: ReactNode
  wrapperStyle?: CSSProperties
  desktopImgStyle?: CSSProperties
  mobileImgStyle?: CSSProperties
  innerStyle?: CSSProperties
}

const Hero: FC<Props> = ({ image, mobileImage, bgColor, centered, boxed, half, color, children, desktopImgStyle, mobileImgStyle, wrapperStyle, innerStyle }) => {
  let classes = "hero"
  if (centered) { classes += " centered" }
  if (boxed) { classes += " boxed" }
  if (half) { classes += " half" }
  if (color != null) { classes = classes + " " + color }

  return (
    <Wrapper className={classes} background={bgColor} style={wrapperStyle}>
      <Img className={(mobileImage) ? "hide-at-mobile" : ""} src={image} alt="Hero" style={desktopImgStyle}/>
      {(mobileImage) ? (
        <Img className="show-at-mobile" src={mobileImage} alt="Hero" style={mobileImgStyle} />
      ) : null}
      <Inner className={(!centered) ? "half" : ""} style={innerStyle}>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Hero