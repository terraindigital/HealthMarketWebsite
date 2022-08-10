import React from "react";
import { Link } from "gatsby";

// Styles
import { Wrapper, Item, SearchButton } from "./styles"

// Images
import PhoneIcon from "../../../images/phone-icon.png"
import UserIcon from "../../../images/user-icon.png"
import SearchIcon from "../../../images/search-icon.png"

const AfterNav = () => {
  return (
    <Wrapper className="show-at-mobile">
      <Item>
        <SearchButton className="search-button icon" src={SearchIcon} alt="magnifying glass icon" />
      </Item>
      <Item>
        <Link to="tel:8553001413">
          <img className="icon" src={PhoneIcon} alt="telephone icon" />
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
        <img className="icon" src={UserIcon} alt="user icon" />
        Sign In
      </Item>
    </Wrapper>
  )
}

export default AfterNav