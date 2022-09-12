import React from "react";

// Styles
import { Wrapper, CloseButton } from "./styles"

// Scripts
import { toggleSearch } from "../../assets/scripts/global";

// Images
import Icon from "../../assets/images/search-icon.png"

const SearchField = () => {
  return (
    <Wrapper className="search-box-wrap">
      <form className="search-box">
        <input className="search-box-input" type="text" placeholder="Search" />
        <button className="search-box-submit" type="submit">
          <img src={Icon} alt="search icon" />
        </button>
      </form>
      <CloseButton onClick={toggleSearch}>X</CloseButton>
    </Wrapper>
  )
}

export default SearchField