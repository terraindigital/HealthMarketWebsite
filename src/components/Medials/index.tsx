import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Inner } from "./styles"

interface Props {
  color: String,
  children: ReactNode
}

const Medial: FC<Props> = ({ color, children }) => {
  let columnCount = (children.length > 2) ? 'three-columns' : 'two-columns';

  return (
    <Wrapper className={`medial ` + color + ` ` + columnCount}>
      <Inner>
        {children}
      </Inner>
    </Wrapper>
  )
}

export default Medial