import React, { useState, useCallback } from "react";
import { Link } from "gatsby";

// Styles
import {
  Wrapper,
  Item,
  TextSize,
  SearchButton,
  MenuButton,
  Bars
} from "./styles"

// Scripts
import {
  changeTextSize,
  toggleNav,
  toggleSearch
} from "../../../static/scripts/global"

// Components
import ToggleButton from "../../Buttons/ToggleButton"
import Navigation from "../../Navigation"
import SearchField from "../../SearchField"

// Images
import PhoneIcon from "../../../static/images/phone-icon.png"
import SearchIcon from "../../../static/images/search-icon.png"

const HeaderRight = () => {
  const [isNavOpen, setNavOpen] = useState(false);

  // const changeNavOpen = (value) => {
  //   setNavOpen(value);
  // }

  return (
    <Wrapper className="header-right">
      <Item className="hide-at-mobile">
        <a className="telephone" href="tel:8008279990">
          <img className="phone icon" src={PhoneIcon} alt="telephone icon" />
          (800) 827-9990
        </a>
      </Item>
      <Item className="hide-at-mobile">
        <a className="find-agent" href="/local-health-insurance-agent">
          Find an agent
        </a>
      </Item>
      <Item className="hide-at-mobile">
        <TextSize className="decrease text-size" onClick={changeTextSize}>-</TextSize> Text Size <TextSize className="increase text-size" onClick={changeTextSize}>+</TextSize>
      </Item>
      <Item>
        <SearchButton className="hide-at-mobile" onClick={toggleSearch}>
          <img className="icon" src={SearchIcon} alt="magnifying glass icon" />
        </SearchButton>
        <ToggleButton className="menu-button" callback={toggleNav}>
          <Bars />
        </ToggleButton>
        <Navigation />
        <SearchField />
      </Item>
    </Wrapper>
  )
}

export default HeaderRight
