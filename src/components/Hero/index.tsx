import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Img, Inner } from "./styles"

interface Props {
  image: String,
  mobileImage?: String,
  centered?: boolean,
  children: ReactNode
}

const Hero: FC<Props> = ({ image, mobileImage, centered, children }) => (
  <Wrapper className={(centered) ? "centered hero" : "hero"}>
    <Img className={(mobileImage) ? "hide-at-mobile" : ""} src={image} alt="Hero" />
    {(mobileImage) ? (
      <Img className="show-at-mobile" src={mobileImage} alt="Hero" />
    ) : null}
    <Inner className={(!centered) ? "half" : ""}>
      {children}
    </Inner>
  </Wrapper>
)

export default Hero