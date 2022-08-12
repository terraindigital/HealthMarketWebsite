import React, { FC, ReactNode } from "react";

// Styles
import { Wrapper } from "./styles"

interface Props {
  children : ReactNode
}

const Flag: FC<Props> = ({ children }) => {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

export default Flag