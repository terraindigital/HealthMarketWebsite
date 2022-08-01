import React, { FC, ReactNode} from "react"

// Styles
import { Wrapper, Content } from "./styles"

interface Props {
  icon: String,
  title: String,
}

const Icon: FC<Props> = ({ icon, title }) => {
  return (
    <Wrapper>
      <img
        src={icon}
        placeholder="BLURRED"
        maxWidth="128"
        maxHeight="98"
        alt="Card Icon Image"
      />
      <Content>
        <h2>{title}</h2>
      </Content>
    </Wrapper>
  )
}

export default Icon