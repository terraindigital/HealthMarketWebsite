import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, TextSize, SearchButton } from "./styles"

// Images
import PhoneIcon from "../../../images/phone-icon.png"
import SearchIcon from "../../../images/search-icon.png"

// Components
import Search from "../../Search"

const AfterNav = () => {
  const toggleSearch = () => {
    const searchBtn = document.querySelector('.search-button')
    const searchBox = document.querySelector('.search-box')
    const header = document.querySelector('.site-header')
    console.log(searchBtn)
    console.log(searchBox)
    console.log(header)
    if (!searchBtn || !searchBox || !header) return
    searchBtn.classList.toggle('search-active')
    searchBox.classList.toggle('active')
    header.classList.toggle('search-active')
    document.body.classList.toggle('search-active')
    document.documentElement.classList.toggle('search-active')
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
    <Wrapper className="show-at-mobile">
      <Item>
        <SearchButton className="search-button icon" src={SearchIcon} alt="magnifying glass icon" />
      </Item>
      <Item>
        <Link to="tel:8008279990">
          <img className="icon" src={PhoneIcon} alt="telephone icon" />
          (800) 827-9990
        </Link>
      </Item>
      <Item>
        Text Size <TextSize className="decrease text-size" onClick={changeTextSize}>-</TextSize> <TextSize className="increase text-size" onClick={changeTextSize}>+</TextSize>
      </Item>
    </Wrapper>
  )
}

export default AfterNav