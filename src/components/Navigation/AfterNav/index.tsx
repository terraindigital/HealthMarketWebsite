import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, TextSize, SearchButton } from "./styles"

// Images
import PhoneIcon from "../../../images/phone-icon.png"
import SearchIcon from "../../../images/search-icon.png"

const AfterNav = () => {
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