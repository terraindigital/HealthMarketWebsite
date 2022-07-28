import React, { FC, ReactNode} from "react"

// Styles
import { Wrapper, Content } from "./styles"

interface Props {
  image?: String,
  icon?: String,
  title: String,
  children?: ReactNode
}

const Card: FC<Props> = ({ image=null, icon=null, title, children }) => {
  const imageClass = (icon !== null) ? "icon" : ""

  return (
    <Wrapper className={`card ${imageClass}`}>
      <img
        src={(image !== null) ? image : icon}
        placeholder="BLURRED"
        maxWidth={(image === null) ? 128 : null}
        maxHeight={(image === null) ? 98 : null}
        alt="Card Icon Image"
      />
      <Content>
        <h2>{title}</h2>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Card