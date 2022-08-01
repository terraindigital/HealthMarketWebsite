import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, MenuButton, Bars } from "./styles"

// Components
import Navigation from "../../Navigation"

// Images
import PhoneIcon from "../../../../images/phone-icon.png"
import UserIcon from "../../../../images/user-icon.png"
import SearchIcon from "../../../../images/search-icon.png"

const HeaderRight = () => {
  const toggleNav = () => {
    const navBtn = document.querySelector('button.menu-button')
    const navMenu = document.querySelector('nav.menu.wrapper')
    const header = document.querySelector('.site-header')
    if (!navBtn || !navMenu || !header) return
    navBtn.classList.toggle('nav-active')
    navMenu.classList.toggle('active')
    header.classList.toggle('nav-active')
    document.body.classList.toggle('nav-active')
    document.documentElement.classList.toggle('nav-active')
  }

  return (
    <Wrapper className="header-right">
      <Item>
        <Link to="tel:8553001413">
          <img src={PhoneIcon} alt="telephone icon" />
          (855) 300-1413
        </Link>
      </Item>
      <Item>
        Español
      </Item>
      <Item>
        - Text Size +
      </Item>
      <Item>
        <img src={UserIcon} alt="user icon" />
        Sign In
      </Item>
      <Item>
        <img src={SearchIcon} alt="magnifying glass icon" />
        <MenuButton className="menu-button" onClick={toggleNav}>
          <Bars />
        </MenuButton>
        <Navigation />
      </Item>
    </Wrapper>
  )
}

export default HeaderRight