import React, { FC, ReactNode} from "react"

// Styles
import { Wrapper, Header, Img, Content } from "./styles"

// Scripts
const toggleOpenState = (el) => {
  const card = el.target.parentElement
  card.classList.toggle('active')
}

interface Props {
  image?: String,
  icon?: String,
  link?: String,
  title: String,
  children?: ReactNode
}

const Card: FC<Props> = ({ image=null, icon=null, link=null, title, children }) => {
  const imageClass = (icon !== null) ? "icon" : ""

  return (
    <Wrapper className={`card ${imageClass}`} href={link}>
      <Header className="card-header" onClick={toggleOpenState}>
        <Img
          src={(image !== null) ? image : icon}
          placeholder="BLURRED"
          maxWidth={(image === null) ? 128 : null}
          maxHeight={(image === null) ? 98 : null}
          alt="Card Icon Image"
        />
        <h2 className="show-at-mobile">{title}</h2>
      </Header>
      <Content className="card-content">
        <h2 className="hide-at-mobile">{title}</h2>
        {children}
      </Content>
    </Wrapper>
  )
}

export default Card