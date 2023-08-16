import React from "react"

// Styles
import { Nav, Menu, MenuItem, Wrapper } from "./styles"

// Scripts
import { routeLink, toggleSubnav } from "../../static/scripts/global"

// Components
import AfterNav from "./AfterNav"

const Navigation = ({ headerData }: { headerData: any }) => {
  return (
    <Nav className="menu wrapper">
      <Wrapper>
      <Menu>
        {headerData?.menuItems && headerData?.menuItems?.nodes.map(item =>
          !item.parentId ? (
            <MenuItem key={item.id}
              className={item.childItems.nodes.length !== 0 ? `item has-submenu` : `item`}
              onClick={item.childItems.nodes.length !== 0 ? toggleSubnav : null}>
                <a href={item.url} activeClassName="active" className={item.childItems.nodes.length !== 0 ? 'parent' : null} onClick={routeLink}>
                    {item.label}
                </a>
                {item.childItems.nodes.length !== 0 ? (
                    <Menu className="submenu">
                        {item.childItems.nodes.map(child => (
                            <MenuItem key={child.id} className="item">
                                <a href={child.url} activeClassName="active" onClick={routeLink}>
                                    {child.label}
                                </a>
                            </MenuItem>
                        ))}
                    </Menu>
                ) : null}
            </MenuItem>
          ) : null
        )}
      </Menu>
      <AfterNav />
      </Wrapper>
    </Nav>
  )
}

export default Navigation
