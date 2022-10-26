import React from "react";

// Styles
import {
  Wrapper,
  Item,
  TextSize,
  SearchButton
} from "./styles"

// Scripts
import {
  changeTextSize,
  toggleSearch
} from "../../../static/scripts/global";

// Images
import PhoneIcon from "../../../static/images/phone-icon.png"
import SearchIcon from "../../../static/images/search-icon.png"

// Components

const AfterNav = () => {
  return (
    <Wrapper className="show-at-device">
      <Item>
        <SearchButton className="search-button" onClick={toggleSearch}>
          <img className="icon" src={SearchIcon} alt="magnifying glass icon" />
        </SearchButton>
      </Item>
      <Item>
        <a href="tel:8008279990">
          <img className="icon" src={PhoneIcon} alt="telephone icon" />
          (800) 827-9990
        </a>
      </Item>
      <Item>
        <a className="find-agent" href="/local-health-insurance-agent">
          Find an agent
        </a>
      </Item>
      <Item>
        Text Size <TextSize className="decrease text-size" onClick={changeTextSize}>-</TextSize> <TextSize className="increase text-size" onClick={changeTextSize}>+</TextSize>
      </Item>
    </Wrapper>
  )
}

export default AfterNav
