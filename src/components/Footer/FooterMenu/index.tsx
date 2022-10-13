import React, { FC } from "react";

// Styles
import { Wrapper } from "./styles"

interface Props {
  menu: Object,
  title: String
}

const FooterMenu: FC<Props> = ({ menu, title }) => (
  <Wrapper>
    <h6>{title}</h6>
    <ul>
      {menu.menuItems.nodes.map(item =>
        <li key={item.id} className={`item ${item.cssClasses.map(className => className)}`}>
          <a href={item.url}>
            {item.label}
          </a>
        </li>
      )}
    </ul>
  </Wrapper>
)

export default FooterMenu
