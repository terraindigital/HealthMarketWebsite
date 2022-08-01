import React, { FC, ReactNode} from "react"

// Styles
import { Wrapper, Content } from "./styles"

interface Props {
  image?: String,
  icon?: String,
  title: String,
  selected?: boolean,
  children: ReactNode
}

const Tile: FC<Props> = ({ image, title, selected, children }) => {

  return (
    <Wrapper className={(selected) ? `tile selected` : `tile`}>
      <img
        src={image}
        placeholder="BLURRED"
        maxWidth={(image === null) ? 128 : null}
        maxHeight={(image === null) ? 98 : null}
        alt="Tile Image"
      />
      <Content>
        <h2>{title}</h2>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Tile