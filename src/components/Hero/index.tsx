import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Img, Inner } from "./styles"

interface Props {
  image: String,
  mobileImage?: String,
  bgColor?: String,
  centered?: boolean,
  boxed?: boolean,
  color?: string,
  children: ReactNode
}

const Hero: FC<Props> = ({ image, mobileImage, bgColor, centered, boxed, color, children }) => {
  let classes = "hero"
  if (centered) { classes += " centered" }
  if (boxed) { classes += " boxed" }
  if (color != null) { classes = classes + " " + color }

  return (
    <Wrapper className={classes} background={bgColor}>
      <Img className={(mobileImage) ? "hide-at-mobile" : ""} src={image} alt="Hero" />
      {(mobileImage) ? (
        <Img className="show-at-mobile" src={mobileImage} alt="Hero" />
      ) : null}
      <Inner className={(!centered) ? "half" : ""}>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Hero