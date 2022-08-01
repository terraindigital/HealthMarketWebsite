import React from "react"
import { Link } from "gatsby"

// Styles
import { Nav, Menu, MenuItem } from "./styles"

// Components
import AfterNav from "./AfterNav"
import MobileSearch from "../Search/MobileSearch"

// Queries
import { useMainMenuQuery } from "../../hooks/useMainMenuQuery"

const Navigation = () => {
  const { menu } = useMainMenuQuery();

  return (
    <Nav className="menu wrapper">
      <Menu>
        {menu.menuItems.nodes.map(item =>
          !item.parentId ? (
            <MenuItem key={item.id} className="item">
                <Link to={item.url} activeClassName="active" className={item.childItems.nodes.length !== 0 ? 'parent' : null}>
                    {item.label}
                </Link>
                {item.childItems.nodes.length !== 0 ? (
                    <Menu className="submenu">
                        {item.childItems.nodes.map(child => (
                            <MenuItem key={child.id} className="item">
                                <Link to={child.url} activeClassName="active">
                                    {child.label}
                                </Link>
                            </MenuItem>
                        ))}
                    </Menu>
                ) : null}
            </MenuItem>
          ) : null
        )}
      </Menu>
      <AfterNav />
      <MobileSearch />
    </Nav>
  )
}

export default Navigation