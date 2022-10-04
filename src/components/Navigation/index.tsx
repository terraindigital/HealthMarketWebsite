import React from "react"
import { Link } from "gatsby"

// Styles
import { Nav, Menu, MenuItem } from "./styles"

// Scripts
import { toggleSubnav } from "../../static/scripts/global"

// Components
import AfterNav from "./AfterNav"

// Queries
import { useMainMenuQuery } from "../../hooks/useMainMenuQuery"

const Navigation = () => {
  const { menu } = useMainMenuQuery();

  return (
    <Nav className="menu wrapper">
      <Menu>
        {menu.menuItems.nodes.map(item =>
          !item.parentId ? (
            <MenuItem key={item.id}
              className={item.childItems.nodes.length !== 0 ? `item has-submenu` : `item`}
              onClick={item.childItems.nodes.length !== 0 ? toggleSubnav : null}>
                <a href={item.url} activeClassName="active" className={item.childItems.nodes.length !== 0 ? 'parent' : null}>
                    {item.label}
                </a>
                {item.childItems.nodes.length !== 0 ? (
                    <Menu className="submenu">
                        {item.childItems.nodes.map(child => (
                            <MenuItem key={child.id} className="item">
                                <a href={child.url} activeClassName="active">
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
    </Nav>
  )
}

export default Navigation