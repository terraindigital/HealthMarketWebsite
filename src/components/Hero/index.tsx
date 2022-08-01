import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Img, Inner } from "./styles"

interface Props {
  image: String,
  centered?: boolean,
  children: ReactNode
}

const Hero: FC<Props> = ({ image, centered, children }) => (
  <Wrapper className={(centered) ? "centered hero" : "hero"}>
    <Img src={image} alt="Hero" />
    <Inner className={(!centered) ? "half" : ""}>
      {children}
    </Inner>
  </Wrapper>
)

export default Hero