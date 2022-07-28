import React, { FC } from "react";
import { Link } from "gatsby";

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
        <li key={item.id} className="item">
          <Link to={item.url} activeClassName="active">
            {item.label}
          </Link>
        </li>
      )}
    </ul>
  </Wrapper>
)

export default FooterMenu