import React, { FC, ReactNode} from "react"

// Styles
import { Wrapper, Img, Content } from "./styles"

// Scripts
import { routeLink } from "../../../static/scripts/global"

interface Props {
  icon: String,
  mobile: String,
  title: String,
  link?: String
}

const Icon: FC<Props> = ({ icon, mobile, title, link }) => {
  return (
    <Wrapper href={(link) ? link : ''} onClick={routeLink}>
      <Img
        src={icon}
        placeholder="BLURRED"
        maxWidth="128"
        maxHeight="98"
        alt="Card Icon Image"
        className="desktop"
      />
      <Img
        src={mobile}
        placeholder="BLURRED"
        maxWidth="128"
        maxHeight="98"
        alt="Card Icon Image"
        className="mobile"
      />
      <Content>
        <h4>{title}</h4>
      </Content>
    </Wrapper>
  )
}

export default Icon