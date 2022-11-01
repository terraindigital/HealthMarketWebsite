import React, { FC, ReactNode} from "react"

// Styles
import {
  Wrapper,
  MobileWrapper,
  Header,
  Img,
  ImgContainer,
  Content
} from "./styles"

// Scripts
import { routeLink } from "../../../static/scripts/global";

// Scripts
const toggleOpenState = (el) => {
  const card = el.target.closest('.card.icon');
  if (card) card.classList.toggle('active');
}

interface Props {
  image?: String,
  icon?: String,
  mobile?: String,
  link?: String,
  title: String,
  children?: ReactNode
}

const Card: FC<Props> = ({ image=null, icon=null, mobile=null, link=null, title, children }) => {
  const imageClass = (icon !== null) ? "icon" : "image"

  return (
    <>
      <Wrapper className={`card hide-at-mobile ${imageClass}`} href={link} onClick={routeLink}>
        <Header className="card-header">
          <ImgContainer>
            <Img
              src={(image !== null) ? image : icon}
              placeholder="BLURRED"
              maxWidth={(image === null) ? 128 : null}
              maxHeight={(image === null) ? 98 : null}
              alt="Card Icon Image"
            />
          </ImgContainer>
        </Header>
        <Content className="card-content">
          <h4 className="hide-at-mobile">{title}</h4>
          {children}
        </Content>
      </Wrapper>
      <MobileWrapper className={`card show-at-mobile ${imageClass}`}>
        <Header className="card-header" onClick={toggleOpenState}>
          <ImgContainer>
            <Img
              src={(image !== null) ? image : (mobile != null) ? mobile : icon}
              placeholder="BLURRED"
              maxWidth={(image === null) ? 128 : null}
              maxHeight={(image === null) ? 98 : null}
              alt="Card Icon Image"
            />
          </ImgContainer>
          <h4 className="show-at-mobile">{title}</h4>
        </Header>
        <Content className="card-content">
          {children}
        </Content>
      </MobileWrapper>
    </>
  )
}

export default Card