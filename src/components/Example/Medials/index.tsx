import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Inner } from "./styles"

interface Props {
  color: String,
  children: ReactNode
}

const Medial: FC<Props> = ({ color, children }) => {
  return (
    <Wrapper className={color}>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Medial