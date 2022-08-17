import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, TextSize, SearchButton, MenuButton, Bars } from "./styles"

// Scripts
import {
  changeTextSize,
  toggleNav,
  toggleSearch,
  toggleMobileSearch
} from "../../../assets/scripts/global"

// Components
import Navigation from "../../Navigation"
import SearchField from "../../SearchField"
import SearchFieldMobile from "../../SearchField/Mobile"

// Images
import PhoneIcon from "../../../images/phone-icon.png"
import SearchIcon from "../../../images/search-icon.png"

const HeaderRight = () => {
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
        <SearchField />
        <SearchButton className="hide-at-mobile icon" onClick={toggleSearch} src={SearchIcon} alt="magnifying glass icon" />
        {/* TODO: remove this vvvv */}
        {/* <SearchButton className="hide-at-mobile icon" onClick={toggleMobileSearch} src={SearchIcon} alt="magnifying glass icon" /> */}
        <MenuButton className="menu-button" onClick={toggleNav}>
          <Bars />
        </MenuButton>
        <Navigation />
        <SearchFieldMobile />
      </Item>
    </Wrapper>
  )
}

export default HeaderRight