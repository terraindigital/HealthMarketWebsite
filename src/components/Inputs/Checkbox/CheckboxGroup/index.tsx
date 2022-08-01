import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Box } from "./styles"

interface Props {
  title: String,
  children: ReactNode
}

const CheckboxGroup: FC<Props> = ({ title, children }) => {
  return (
    <Wrapper>
      <h6>{title}</h6>
      <Box>
        {children}
      </Box>
    </Wrapper>
  )
}

export default CheckboxGroup