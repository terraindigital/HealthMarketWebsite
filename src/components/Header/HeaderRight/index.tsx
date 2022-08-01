import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, SearchButton, MenuButton, Bars } from "./styles"

// Components
import Navigation from "../../Navigation"

// Images
import PhoneIcon from "../../../images/phone-icon.png"
import UserIcon from "../../../images/user-icon.png"
import SearchIcon from "../../../images/search-icon.png"

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
      <Item className="hide-at-mobile">
        <Link to="tel:8553001413">
          <img className="icon" src={PhoneIcon} alt="telephone icon" />
          (855) 300-1413
        </Link>
      </Item>
      <Item className="hide-at-mobile">
        Español
      </Item>
      <Item className="hide-at-mobile">
        - Text Size +
      </Item>
      <Item className="hide-at-mobile">
        <img className="icon" src={UserIcon} alt="user icon" />
        Sign In
      </Item>
      <Item>
        <SearchButton className="hide-at-mobile icon" src={SearchIcon} alt="magnifying glass icon" />
        <MenuButton className="menu-button" onClick={toggleNav}>
          <Bars />
        </MenuButton>
        <Navigation />
      </Item>
    </Wrapper>
  )
}

export default HeaderRight