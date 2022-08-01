import React, { FC, ReactNode } from "react"

// Styles
import { Select, Wrapper } from "./styles"

// Components

// Images

interface Props {
  children: ReactNode
}

const List: FC<Props> = ({children}) => {
  return (
    <Wrapper>
      <Select>
          {children}
      </Select>
    </Wrapper>
  )
}

export default List