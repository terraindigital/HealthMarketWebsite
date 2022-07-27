import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Check, Heading } from "./styles"

// Components

// Images
import checkImg from "../../../images/list-check.png"

interface Props {
  heading: String,
  children: ReactNode
}

const ListItem: FC<Props> = ({ heading, children }) => {
  return (
    <Wrapper>
      <Check>
        <img src={checkImg} alt="list checkmark" />
      </Check>
      <Heading>{heading}</Heading>
      {children}
    </Wrapper>
  )
}

export default ListItem