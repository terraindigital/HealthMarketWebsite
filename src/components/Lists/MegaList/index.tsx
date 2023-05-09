import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper } from "./styles"

// Components

// Images

interface Props {
  children: ReactNode
}

const MegaList: FC<Props> = ({children}) => {
  return (
    <Wrapper className="megalist">
      {children}
    </Wrapper>
  )
}

export default MegaList