import React from "react"
import { Link } from "gatsby"

// Styles
import { Nav, Logo, Menu, MenuItem } from "./styles"

const Navigation = () => (
  <Nav className="menu wrapper">
    <Menu>
      <MenuItem className="item">
        <Link to="/#top">
          Home
        </Link>
      </MenuItem>
      <MenuItem className="item">
        <Link to="/#plans">
          Plans
        </Link>
      </MenuItem>
      <MenuItem className="item">
        <Link to="/#insurance">
          Insurance
        </Link>
        <Menu className="submenu">
          <MenuItem className="item">
            <Link to="/#individual">
              Individual
            </Link>
          </MenuItem>
          <MenuItem className="item">
            <Link to="/#family">
              Family
            </Link>
          </MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem className="item">
        <Link to="/#faq">
          FAQs
        </Link>
        <Menu className="submenu">
          <MenuItem className="item">
            <Link to="/#resources">
              Product resources
            </Link>
          </MenuItem>
          <MenuItem className="item">
            <Link to="/#content">
              Get counsel
            </Link>
          </MenuItem>
        </Menu>
      </MenuItem>
      <MenuItem className="item">
        <Link to="/#how-we-help">
          How we help
        </Link>
      </MenuItem>
      <MenuItem className="item">
        <Link to="/#shop">
          Shop online
        </Link>
      </MenuItem>
    </Menu>
  </Nav>
)

export default Navigation