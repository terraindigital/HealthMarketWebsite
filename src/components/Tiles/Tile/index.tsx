import React, { FC, ReactNode} from "react"

// Styles
import { Wrapper, Content } from "./styles"

interface Props {
  image?: String,
  icon?: String,
  title: String,
  selected?: boolean,
  link?: String,
  children: ReactNode
}

const Tile: FC<Props> = ({ image, title, selected, link, children }) => {

  return (
    <Wrapper className={(selected) ? `tile selected` : `tile`}>
      <a href={link} title={title}>
      <img
        src={image}
        placeholder="BLURRED"
        maxWidth={(image === null) ? 128 : null}
        maxHeight={(image === null) ? 98 : null}
        alt="Tile Image"
      />
      <Content>
        <h4>{title}</h4>
        {children}
      </Content>
      </a>
    </Wrapper>
  )
}

export default Tile