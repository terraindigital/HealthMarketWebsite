import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, TextSize, SearchButton, MenuButton, Bars } from "./styles"

// Components
import Navigation from "../../Navigation"

// Images
import PhoneIcon from "../../../images/phone-icon.png"
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
  
  const changeTextSize = (el) => {
    const html = document.getElementsByTagName('html')[0]
    const textSize = el.target.classList[0]
    const fontSize = parseFloat(window.getComputedStyle(html, null).fontSize)
    if (textSize === "increase") {
      html.style.fontSize = (fontSize + 1) + "px"
    } else if (textSize === "decrease") {
      html.style.fontSize = (fontSize - 1) + "px"
    }
  }

  return (
    <Wrapper className="header-right">
      <Item className="hide-at-mobile">
        <Link to="tel:8008279990">
          <img className="icon" src={PhoneIcon} alt="telephone icon" />
          (800) 827-9990
        </Link>
      </Item>
      <Item className="hide-at-mobile">
        <TextSize className="decrease text-size" onClick={changeTextSize}>-</TextSize> Text Size <TextSize className="increase text-size" onClick={changeTextSize}>+</TextSize>
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