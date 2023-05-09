import React, { FC } from "react";

// Styles
import { Wrapper } from "./styles"

// Scripts
import { routeLink } from '../../../static/scripts/global'

interface Props {
  menu: Object,
  title?: String
}

const FooterMenu: FC<Props> = ({ menu, title }) => (
  <Wrapper>
    {(title) ? (
      <h6>{title}</h6>
    ) : null}
    <ul>
      {menu.menuItems.nodes.map(item =>
        <li key={item.id} className={`item ${item.cssClasses.map(className => className)}`}>
          <a href={item.url} onClick={routeLink}>
            {item.label}
          </a>
        </li>
      )}
      {(title === 'Get to Know Us') ? 
        <li id="doNotTrack" className="item doNotTrack">
          <div>
            <a href='https://submit-irm.trustarc.com/services/validation/10525e43-877a-42dd-ae69-031a183e6adf' target='_blank'> 
              <img src='https://submit-irm.trustarc.com/services/validation/10525e43-877a-42dd-ae69-031a183e6adf/image' alt='TrustArc'/>
            </a>
          </div>
        </li> : null}
    </ul>
  </Wrapper>
)

export default FooterMenu
