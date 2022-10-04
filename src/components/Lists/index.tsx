import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper } from "./styles"

// Components

// Images

interface Props {
  children: ReactNode
}

const List: FC<Props> = ({children}) => {
  return (
    <Wrapper className="list">
      {children}
    </Wrapper>
  )
}

export default List