import React, { FC, ReactNode } from "react"

// Styles
import { Wrapper, Check, Heading, Body } from "./styles"

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
      <Heading dangerouslySetInnerHTML={{ __html: heading }} />
      <Body>{children}</Body>
    </Wrapper>
  )
}

export default ListItem